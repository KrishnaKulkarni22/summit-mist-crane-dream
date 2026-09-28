import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { o as PROGRAMMES } from "./fleet-erY1-VMa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/check-desk-Bmn2UVNN.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var CONF = [
	"signed",
	"reported",
	"model"
];
function clip(value, max) {
	if (typeof value !== "string") return "";
	return value.replace(/\s+/g, " ").trim().slice(0, max);
}
function httpUrl(value) {
	const raw = clip(value, 300);
	try {
		const url = new URL(raw);
		if (url.protocol !== "https:" && url.protocol !== "http:") return "";
		return url.toString();
	} catch {
		return "";
	}
}
function year(value) {
	const n = typeof value === "number" ? value : Number(value);
	if (!Number.isFinite(n) || n < 2026 || n > 2046) return void 0;
	return n;
}
function parseChanges(text) {
	const start = text.indexOf("{");
	const end = text.lastIndexOf("}");
	if (start < 0 || end <= start) return [];
	const parsed = JSON.parse(text.slice(start, end + 1));
	if (!Array.isArray(parsed.changes)) return [];
	const known = new Set(PROGRAMMES.map((p) => p.id));
	const out = [];
	for (const item of parsed.changes) {
		if (!item || typeof item !== "object") continue;
		const row = item;
		const id = clip(row.id, 40);
		if (!known.has(id)) continue;
		const confidence = CONF.includes(row.confidence) ? row.confidence : "reported";
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
			...from !== void 0 && to !== void 0 && from < to ? {
				from,
				to
			} : {}
		});
	}
	return out;
}
function lastAnswer(payload) {
	const messages = (payload.output ?? []).filter((item) => item.type === "message");
	return (messages[messages.length - 1]?.content ?? []).filter((part) => part.type === "output_text" && part.text).map((part) => part.text).join("\n");
}
var checkDevelopments_createServerFn_handler = createServerRpc({
	id: "8945e192947ac98202aca0b0cfbd44936bb4236d03cf59db384d6b9b94bde7bd",
	name: "checkDevelopments",
	filename: "src/lib/check-desk.ts"
}, (opts) => checkDevelopments.__executeServer(opts));
var checkDevelopments = createServerFn({ method: "POST" }).handler(checkDevelopments_createServerFn_handler, async () => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "A live check is not available in this environment."
	};
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
				Authorization: `Bearer ${apiKey}`
			},
			signal: AbortSignal.timeout(9e4),
			body: JSON.stringify({
				model: "grok-4.5",
				input: [{
					role: "user",
					content: prompt
				}],
				max_output_tokens: 700,
				max_tool_calls: 4,
				reasoning: { effort: "low" },
				tools: [{ type: "web_search" }]
			})
		});
		if (!res.ok) return {
			ok: false,
			error: `The check failed (${res.status}). The snapshot is unchanged.`
		};
		const changes = parseChanges(lastAnswer(await res.json())).filter((c) => c.line && c.stage);
		return {
			ok: true,
			checkedAt: (/* @__PURE__ */ new Date()).toISOString(),
			changes
		};
	} catch {
		return {
			ok: false,
			error: "The check did not finish. The snapshot is unchanged."
		};
	}
});
//#endregion
export { checkDevelopments_createServerFn_handler };
