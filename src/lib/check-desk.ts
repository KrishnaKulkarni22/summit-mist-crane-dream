import { createServerFn } from "@tanstack/react-start";
import { PROGRAMMES, type Confidence } from "@/data/fleet";

export type DeskChange = {
  id: string;
  stage: string;
  window: string;
  confidence: Confidence;
  line: string;
  source: string;
  url: string;
  from?: number;
  to?: number;
};

export type CheckResult =
  | { ok: true; checkedAt: string; changes: DeskChange[] }
  | { ok: false; error: string };

const CONF: Confidence[] = ["signed", "reported", "model"];

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function httpUrl(value: unknown) {
  const raw = clip(value, 300);
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

function year(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < 2026 || n > 2046) return undefined;
  return n;
}

export function parseChanges(text: string): DeskChange[] {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return [];
  const parsed = JSON.parse(text.slice(start, end + 1)) as { changes?: unknown };
  if (!Array.isArray(parsed.changes)) return [];
  const known = new Set(PROGRAMMES.map((p) => p.id));
  const out: DeskChange[] = [];
  for (const item of parsed.changes) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    const id = clip(row.id, 40);
    if (!known.has(id)) continue;
    const confidence = CONF.includes(row.confidence as Confidence)
      ? (row.confidence as Confidence)
      : "reported";
    const from = year(row.from);
    const to = year(row.to);
    out.push({
      id,
      stage: clip(row.stage, 80),
      window: clip(row.window, 80),
      confidence,
      line: clip(row.line, 240),
      source: clip(row.source, 80),
      url: httpUrl(row.url),
      ...(from !== undefined && to !== undefined && from < to ? { from, to } : {}),
    });
  }
  return out;
}

function lastAnswer(payload: { output?: { type?: string; content?: { type?: string; text?: string }[] }[] }) {
  const messages = (payload.output ?? []).filter((item) => item.type === "message");
  const last = messages[messages.length - 1];
  return (last?.content ?? [])
    .filter((part) => part.type === "output_text" && part.text)
    .map((part) => part.text)
    .join("\n");
}

export const checkDevelopments = createServerFn({ method: "POST" }).handler(async (): Promise<CheckResult> => {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: false, error: "A live check is not available in this environment." };

  const baseline = PROGRAMMES.map((p) => `${p.id} | ${p.stage} | ${p.window} | ${p.confidence}`).join("\n");
  const prompt = `Baseline date: 28 September 2026. Indian Navy programme desk.
Search the open web at most four times, in total, for material events AFTER that date only: a contract signature, an RFP, a CCS clearance, a keel, a launch, a delivery, or a commissioning.
Do not guess. Do not move a delivery window unless a signed contract states one.
If nothing material has happened, return {"changes":[]}.
Final message must be one JSON object and nothing else:
{"changes":[{"id":"p75i","stage":"short status","window":"short window","confidence":"signed|reported|model","line":"one sentence of what changed","source":"publication","url":"https://...","from":2033,"to":2038}]}
Omit from and to unless a signed delivery clause gives both years.
Ids must be one of: ${PROGRAMMES.map((p) => p.id).join(", ")}.
Current rows:
${baseline}`;

  try {
    const res = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      signal: AbortSignal.timeout(90_000),
      body: JSON.stringify({
        model: "grok-4.5",
        input: [{ role: "user", content: prompt }],
        max_output_tokens: 700,
        max_tool_calls: 4,
        reasoning: { effort: "low" },
        tools: [{ type: "web_search" }],
      }),
    });
    if (!res.ok) return { ok: false, error: `The check failed (${res.status}). The snapshot is unchanged.` };
    const payload = (await res.json()) as {
      output?: { type?: string; content?: { type?: string; text?: string }[] }[];
    };
    const text = lastAnswer(payload);
    const changes = parseChanges(text).filter((c) => c.line && c.stage);
    return { ok: true, checkedAt: new Date().toISOString(), changes };
  } catch {
    return { ok: false, error: "The check did not finish. The snapshot is unchanged." };
  }
});
