import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { checkDevelopments, type DeskChange } from "@/lib/check-desk";
import {
  DOMAINS,
  DOMAIN_LABEL,
  HORIZON_END,
  HORIZON_START,
  HULLS,
  PROGRAMMES,
  UNCREWED,
  type Confidence,
  type Domain,
  type Programme,
  type View,
} from "@/data/fleet";

const VIEWS: { id: View; label: string }[] = [
  { id: "slate", label: "2030s slate" },
  { id: "yards", label: "In the yards" },
  { id: "uncrewed", label: "Uncrewed" },
  { id: "rules", label: "How dates are made" },
];

const CONFIDENCE: Record<Confidence, string> = {
  signed: "Signed",
  reported: "Reported",
  model: "Model",
};

const STORE = "desk-check-v1";

function withChange(p: Programme, change: DeskChange | undefined): Programme {
  if (!change) return p;
  return {
    ...p,
    stage: change.stage || p.stage,
    window: change.window || p.window,
    confidence: change.confidence,
    from: change.from ?? p.from,
    to: change.to ?? p.to,
  };
}

function pct(year: number) {
  return ((year - HORIZON_START) / SPAN) * 100;
}

const SPAN = HORIZON_END - HORIZON_START;

export function Desk() {
  const [view, setView] = useState<View>("slate");
  const [domain, setDomain] = useState<Domain | "all">("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>("p75i");
  const [checking, setChecking] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [checkedAt, setCheckedAt] = useState<string | null>(null);
  const [changes, setChanges] = useState<DeskChange[]>([]);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORE);
      if (!raw) return;
      const saved = JSON.parse(raw) as { checkedAt?: string; changes?: DeskChange[] };
      if (saved.checkedAt) setCheckedAt(saved.checkedAt);
      if (Array.isArray(saved.changes)) setChanges(saved.changes);
    } catch {
      /* keep the snapshot */
    }
  }, []);

  const live = useMemo(() => {
    const byId = new Map(changes.map((c) => [c.id, c]));
    return PROGRAMMES.map((p) => withChange(p, byId.get(p.id)));
  }, [changes]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return live.filter((p) => {
      if (domain !== "all" && p.domain !== domain) return false;
      if (!q) return true;
      const change = changes.find((c) => c.id === p.id);
      return (
        p.name.toLowerCase().includes(q) ||
        p.stage.toLowerCase().includes(q) ||
        p.note.toLowerCase().includes(q) ||
        p.contingent.toLowerCase().includes(q) ||
        (change?.line.toLowerCase().includes(q) ?? false)
      );
    });
  }, [domain, query, live, changes]);

  async function onCheck() {
    if (checking) return;
    setChecking(true);
    setCheckError("");
    try {
      const result = await checkDevelopments();
      if (!result.ok) {
        setCheckError(result.error);
        return;
      }
      setCheckedAt(result.checkedAt);
      setChanges(result.changes);
      sessionStorage.setItem(
        STORE,
        JSON.stringify({ checkedAt: result.checkedAt, changes: result.changes }),
      );
    } catch {
      setCheckError("The check did not finish. The snapshot is unchanged.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <div className="desk-shell mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <header className="desk-header border-b border-line pb-5">
        <p className="desk-eyebrow text-xs font-medium tracking-widest text-brass uppercase">
          Indian Navy · programme desk
        </p>
        <h1 className="desk-title mt-3 font-serif text-4xl leading-tight text-fg sm:text-5xl">
          The 2030s, contingent.
        </h1>
        <p className="desk-intro mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A tracker of Indian Navy programmes with deliveries or decisions
          relevant to the 2030s. It follows the 23 September 2026 note, then
          adds related projects for context. Each row shows the public status
          and an estimated timeline: signed contracts, reported plans, or
          modelled projections. Snapshot: 28 September 2026. Dates can shift
          as approvals, contracts, and construction progress.
        </p>
      </header>

      <div className="desk-toolbar flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="desk-tabs flex flex-wrap" role="tablist" aria-label="Sections">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={view === v.id}
              onClick={() => setView(v.id)}
              className="desk-tab text-sm font-medium"
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="desk-actions flex flex-wrap items-center gap-3">
          <p className="desk-counts text-xs">
            {live.filter((p) => p.confidence === "signed").length} signed ·{" "}
            {live.filter((p) => p.confidence === "reported").length} reported ·{" "}
            {live.filter((p) => p.confidence === "model").length} modeled
          </p>
          <button
            type="button"
            onClick={onCheck}
            disabled={checking}
            className="desk-check min-h-11 px-4 text-sm disabled:opacity-50"
          >
            {checking ? "Checking…" : "Check open sources"}
          </button>
        </div>
      </div>

      {(checkError || checkedAt) && (
        <p className="desk-status mt-3 text-sm text-muted" role="status">
          {checkError
            ? checkError
            : changes.length === 0
              ? `Checked ${formatChecked(checkedAt)}. Nothing material since 28 Sep 2026.`
              : `Checked ${formatChecked(checkedAt)}. ${changes.length} ${changes.length === 1 ? "row" : "rows"} moved: ${changes
                  .map((c) => PROGRAMMES.find((p) => p.id === c.id)?.name ?? c.id)
                  .join(", ")}.`}
        </p>
      )}

      {view === "slate" && (
        <Slate
          shown={shown}
          changes={changes}
          domain={domain}
          setDomain={setDomain}
          query={query}
          setQuery={setQuery}
          open={open}
          setOpen={setOpen}
        />
      )}
      {view === "yards" && <Yards />}
      {view === "uncrewed" && <UncrewedBoard />}
      {view === "rules" && <Rules />}

      <footer className="mt-10 border-t border-line pt-4 text-xs leading-relaxed text-dim">
        Public reporting as of 28 September 2026. P17A is the frigate reference;
        Kalvari is the submarine reference. Projection bars are estimates, not
        commitments.
      </footer>
    </div>
  );
}

function formatChecked(iso: string | null) {
  if (!iso) return "just now";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "just now";
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Slate({
  shown,
  changes,
  domain,
  setDomain,
  query,
  setQuery,
  open,
  setOpen,
}: {
  shown: Programme[];
  changes: DeskChange[];
  domain: Domain | "all";
  setDomain: (d: Domain | "all") => void;
  query: string;
  setQuery: (q: string) => void;
  open: string | null;
  setOpen: (id: string | null) => void;
}) {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Domain">
          {DOMAINS.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={domain === d.id}
              onClick={() => setDomain(d.id)}
              className={`desk-filter min-h-11 rounded-full border px-3 text-sm transition-colors ${domain === d.id ? "border-brass text-brass-2" : "border-line text-dim hover:text-fg"}`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <label className="desk-search flex min-h-11 items-center gap-2 border border-line bg-surface px-3 text-sm text-muted">
          <Search className="size-4 shrink-0" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the slate"
            className="w-full min-w-0 bg-transparent text-fg outline-none placeholder:text-dim sm:w-56"
            aria-label="Search programmes"
          />
        </label>
      </div>

      <Horizon shown={shown} open={open} setOpen={setOpen} />

      <ol className="desk-programme-list mt-4 border-t border-line">
        {shown.length === 0 && (
          <li className="py-8 text-sm text-muted">Nothing in this cut.</li>
        )}
        {shown.map((p, i) => {
          const on = open === p.id;
          const change = changes.find((c) => c.id === p.id);
          const idx = PROGRAMMES.findIndex((x) => x.id === p.id);
          return (
            <li key={p.id} className="border-b border-line">
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setOpen(on ? null : p.id)}
                className="grid w-full gap-1 py-4 text-left sm:grid-cols-12 sm:items-baseline sm:gap-3"
              >
                <span className="text-xs text-dim sm:col-span-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl text-fg sm:col-span-3">{p.name}</span>
                <span className="text-sm text-muted sm:col-span-3">{p.stage}</span>
                <span className="text-sm text-brass-2 sm:col-span-3">{p.window}</span>
                <span className="text-xs tracking-wide text-dim uppercase sm:col-span-2 sm:text-right">
                  {CONFIDENCE[p.confidence]}
                  <span className="sr-only">, {i + 1} of {shown.length}</span>
                </span>
              </button>
              {on && (
                <div className="desk-detail mb-5 border-t border-line bg-surface px-4 py-4 sm:ml-12">
                  <p className="text-xs tracking-wide text-dim uppercase">
                    {DOMAIN_LABEL[p.domain]} · {p.count}
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg">{p.contingent}</p>
                  {change && (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brass-2">
                      Since the snapshot: {change.line}
                      {change.url ? (
                        <>
                          {" "}
                          <a
                            href={change.url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            {change.source || "Source"}
                          </a>
                        </>
                      ) : (
                        change.source && ` — ${change.source}`
                      )}
                    </p>
                  )}
                  <dl className="mt-4 max-w-3xl">
                    {p.phases.map((ph) => (
                      <div key={ph.when} className="grid gap-1 border-t border-line py-3 sm:grid-cols-12 sm:gap-3">
                        <dt className="text-xs font-medium text-brass sm:col-span-3">{ph.when}</dt>
                        <dd className="text-sm leading-relaxed text-muted sm:col-span-9">{ph.text}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-dim">{p.note}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Horizon({
  shown,
  open,
  setOpen,
}: {
  shown: Programme[];
  open: string | null;
  setOpen: (id: string) => void;
}) {
  const ticks = [2026, 2030, 2034, 2038, 2042, 2046];
  return (
    <div className="desk-horizon mt-5 border border-line bg-surface p-3 sm:p-5">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h2 className="font-serif text-lg text-fg">Horizon</h2>
        <p className="text-xs text-dim">Bar is the public window, not a Gantt from a yard.</p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[40rem]">
          <div className="relative grid grid-cols-12 border-b border-line pb-1">
            <span className="col-span-3" />
            <span className="relative col-span-9 h-6">
              {ticks.map((y) => (
                <span
                  key={y}
                  className="absolute top-0 text-xs text-dim"
                  style={{ left: `${pct(y)}%` }}
                >
                  {y}
                </span>
              ))}
            </span>
          </div>
          <ul className="mt-2">
            {shown.map((p) => {
              const left = pct(p.from);
              const width = Math.max(pct(p.to) - left, 1.2);
              const hot = open === p.id;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setOpen(p.id)}
                    className="grid w-full grid-cols-12 items-center gap-2 py-1 text-left"
                  >
                    <span
                      className={
                        hot
                          ? "col-span-3 truncate text-xs text-brass-2"
                          : "col-span-3 truncate text-xs text-muted"
                      }
                    >
                      {p.name}
                    </span>
                    <span className="relative col-span-9 h-3 bg-raised">
                      <span
                        className={
                          p.confidence === "signed"
                            ? "absolute inset-y-0 bg-brass"
                            : p.confidence === "reported"
                              ? "absolute inset-y-0 bg-brass-2 opacity-80"
                              : "absolute inset-y-0 border border-brass bg-transparent"
                        }
                        style={{ left: `${left}%`, width: `${width}%` }}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-dim">
            <span className="inline-flex items-center gap-2">
              <i className="inline-block h-2 w-6 bg-brass" /> Signed
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="inline-block h-2 w-6 bg-brass-2" /> Reported
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="inline-block h-2 w-6 border border-brass" /> Model
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Yards() {
  return (
    <div className="mt-5">
      <h2 className="font-serif text-2xl text-fg">What is already in steel</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        The 2030s list is mostly paper. These are the hulls the yards are
        actually handing over, or have just handed over. P15B and the Kalvari
        class are done. P17B does not start from an empty frigate line.
      </p>
      <div className="mt-4 overflow-x-auto border-t border-line">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-wide text-dim uppercase">
              <th className="py-3 pr-3 font-medium">Programme</th>
              <th className="py-3 pr-3 font-medium">Hull</th>
              <th className="py-3 pr-3 font-medium">Yard</th>
              <th className="py-3 pr-3 font-medium">Status</th>
              <th className="py-3 font-medium">Mark</th>
            </tr>
          </thead>
          <tbody>
            {HULLS.map((h) => (
              <tr key={h.hull} className="border-t border-line align-top">
                <td className="py-3 pr-3 text-brass-2">{h.programme}</td>
                <td className="py-3 pr-3 text-fg">{h.hull}</td>
                <td className="py-3 pr-3 text-muted">{h.yard}</td>
                <td className="py-3 pr-3 text-fg">{h.status}</td>
                <td className="py-3 text-muted">{h.mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UncrewedBoard() {
  return (
    <div className="mt-5">
      <h2 className="font-serif text-2xl text-fg">Uncrewed layer</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        Not on the thirteen, and not a substitute for them. Matangi is
        delivering. Everything else is a trial, a plate cut, or a requirement.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {UNCREWED.map((u) => (
          <article key={u.name} className="desk-card border border-line bg-surface p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-xl text-fg">{u.name}</h3>
              <span className="text-xs tracking-wide text-brass uppercase">{u.stage}</span>
            </div>
            <dl className="mt-3">
              {u.lines.map((line) => (
                <div key={line.k} className="grid grid-cols-12 gap-2 border-t border-line py-2">
                  <dt className="col-span-4 text-xs text-dim">{line.k}</dt>
                  <dd className="col-span-8 text-sm leading-relaxed text-muted">{line.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-sm leading-relaxed text-dim">{u.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Rules() {
  const rules = [
    {
      t: "Surface combatants",
      d: "About three years from RFP to first steel, then six to eight years for the lead ship. P17A is the check: contract in February 2015, Nilgiri delivered in December 2024, later ships faster than the first. P17B and P15C use this. A corvette is shorter — five to seven years from contract — so NGC does not borrow the frigate bar.",
    },
    {
      t: "P75(I)",
      d: "The contractual first boat is seven years after signature, then about one a year. Kalvari is the caution, not the schedule: twelve years to the first boat, nineteen to the sixth.",
    },
    {
      t: "Everything without a file",
      d: "SSN, S5, P76, LPD, LCU, DBMRH, C295 MRMR and UFOSS do not get a fake precision. The bar is the band in open reporting, or an explicit model, and the card says which.",
    },
    {
      t: "What moves a bar",
      d: "A signature converts a model into a contractual window. A slipped CCS note moves every modeled bar that was waiting on it. P76 in particular waits on P75(I).",
    },
    {
      t: "What this page is not",
      d: "The Navy, the yards and DRDO do not publish a machine-readable build feed. A live site in any honest sense is this desk, updated when a contract, a keel or a commissioning is actually announced.",
    },
  ];
  return (
    <div className="mt-5 max-w-3xl">
      <h2 className="font-serif text-2xl text-fg">How the dates are made</h2>
      <ul className="mt-4 border-t border-line">
        {rules.map((r) => (
          <li key={r.t} className="border-b border-line py-4">
            <h3 className="font-serif text-lg text-fg">{r.t}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{r.d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
