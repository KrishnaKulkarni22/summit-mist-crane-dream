import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as HULLS, i as HORIZON_START, n as DOMAIN_LABEL, o as PROGRAMMES, r as HORIZON_END, s as UNCREWED, t as DOMAINS } from "./fleet-erY1-VMa.mjs";
import { n as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D71J2kMd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var checkDevelopments = createServerFn({ method: "POST" }).handler(createSsrRpc("8945e192947ac98202aca0b0cfbd44936bb4236d03cf59db384d6b9b94bde7bd"));
var VIEWS = [
	{
		id: "slate",
		label: "2030s slate"
	},
	{
		id: "yards",
		label: "In the yards"
	},
	{
		id: "uncrewed",
		label: "Uncrewed"
	},
	{
		id: "rules",
		label: "How dates are made"
	}
];
var CONFIDENCE = {
	signed: "Signed",
	reported: "Reported",
	model: "Model"
};
var STORE = "desk-check-v1";
function withChange(p, change) {
	if (!change) return p;
	return {
		...p,
		stage: change.stage || p.stage,
		window: change.window || p.window,
		confidence: change.confidence,
		from: change.from ?? p.from,
		to: change.to ?? p.to
	};
}
function pct(year) {
	return (year - HORIZON_START) / SPAN * 100;
}
var SPAN = HORIZON_END - HORIZON_START;
function Desk() {
	const [view, setView] = (0, import_react.useState)("slate");
	const [domain, setDomain] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)("p75i");
	const [checking, setChecking] = (0, import_react.useState)(false);
	const [checkError, setCheckError] = (0, import_react.useState)("");
	const [checkedAt, setCheckedAt] = (0, import_react.useState)(null);
	const [changes, setChanges] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = sessionStorage.getItem(STORE);
			if (!raw) return;
			const saved = JSON.parse(raw);
			if (saved.checkedAt) setCheckedAt(saved.checkedAt);
			if (Array.isArray(saved.changes)) setChanges(saved.changes);
		} catch {}
	}, []);
	const live = (0, import_react.useMemo)(() => {
		const byId = new Map(changes.map((c) => [c.id, c]));
		return PROGRAMMES.map((p) => withChange(p, byId.get(p.id)));
	}, [changes]);
	const shown = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return live.filter((p) => {
			if (domain !== "all" && p.domain !== domain) return false;
			if (!q) return true;
			const change = changes.find((c) => c.id === p.id);
			return p.name.toLowerCase().includes(q) || p.stage.toLowerCase().includes(q) || p.note.toLowerCase().includes(q) || p.contingent.toLowerCase().includes(q) || (change?.line.toLowerCase().includes(q) ?? false);
		});
	}, [
		domain,
		query,
		live,
		changes
	]);
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
			sessionStorage.setItem(STORE, JSON.stringify({
				checkedAt: result.checkedAt,
				changes: result.changes
			}));
		} catch {
			setCheckError("The check did not finish. The snapshot is unchanged.");
		} finally {
			setChecking(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-brass uppercase",
						children: "Indian Navy · programme desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-serif text-3xl leading-tight text-fg sm:text-4xl",
						children: "The 2030s, contingent."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base",
						children: "The thirteen lines from the 23 September 2026 note come first, in that order. Under them are the ships that were off that list: four already in steel or on contract, the minehunter and survey gaps, and Project 18 and the second carrier, which are not 2030s deliveries. The page opens on the 28 September snapshot. Check open sources when you want a pass for a contract, an RFP, a keel, or a commissioning since then."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Sections",
					children: VIEWS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": view === v.id,
						onClick: () => setView(v.id),
						className: view === v.id ? "min-h-11 rounded-full bg-brass px-4 text-sm font-medium text-ink" : "min-h-11 rounded-full border border-line px-4 text-sm text-muted hover:text-fg",
						children: v.label
					}, v.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-dim",
						children: [
							live.filter((p) => p.confidence === "signed").length,
							" signed ·",
							" ",
							live.filter((p) => p.confidence === "reported").length,
							" reported ·",
							" ",
							live.filter((p) => p.confidence === "model").length,
							" modeled"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCheck,
						disabled: checking,
						className: "min-h-11 border border-brass px-4 text-sm text-brass-2 disabled:opacity-50",
						children: checking ? "Checking…" : "Check open sources"
					})]
				})]
			}),
			(checkError || checkedAt) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				role: "status",
				children: checkError ? checkError : changes.length === 0 ? `Checked ${formatChecked(checkedAt)}. Nothing material since 28 Sep 2026.` : `Checked ${formatChecked(checkedAt)}. ${changes.length} ${changes.length === 1 ? "row" : "rows"} moved: ${changes.map((c) => PROGRAMMES.find((p) => p.id === c.id)?.name ?? c.id).join(", ")}.`
			}),
			view === "slate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slate, {
				shown,
				changes,
				domain,
				setDomain,
				query,
				setQuery,
				open,
				setOpen
			}),
			view === "yards" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yards, {}),
			view === "uncrewed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncrewedBoard, {}),
			view === "rules" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rules, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-10 border-t border-line pt-4 text-xs leading-relaxed text-dim",
				children: "Public reporting as of 28 September 2026. The first thirteen are the note posted that week. The ships under the break were off that list. P17A is the frigate reference. Kalvari is the submarine reference. Projection bars are not commitments."
			})
		]
	});
}
function formatChecked(iso) {
	if (!iso) return "just now";
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return "just now";
	return date.toLocaleString("en-GB", {
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function Slate({ shown, changes, domain, setDomain, query, setQuery, open, setOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Domain",
					children: DOMAINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDomain(d.id),
						className: domain === d.id ? "min-h-11 rounded-full border border-brass px-3 text-sm text-brass-2" : "min-h-11 rounded-full border border-line px-3 text-sm text-dim hover:text-fg",
						children: d.label
					}, d.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-2 border border-line bg-surface px-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "size-4 shrink-0",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search the slate",
						className: "w-full min-w-0 bg-transparent text-fg outline-none placeholder:text-dim sm:w-56",
						"aria-label": "Search programmes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Horizon, {
				shown,
				open,
				setOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 border-t border-line",
				children: [shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-8 text-sm text-muted",
					children: "Nothing in this cut."
				}), shown.map((p, i) => {
					const on = open === p.id;
					const change = changes.find((c) => c.id === p.id);
					const idx = PROGRAMMES.findIndex((x) => x.id === p.id);
					const prev = i > 0 ? PROGRAMMES.findIndex((x) => x.id === shown[i - 1].id) : -1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line",
						children: [
							idx >= 13 && (i === 0 || prev < 13) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border-b border-line py-3 text-xs tracking-widest text-brass uppercase",
								children: "Off the 23 September note"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": on,
								onClick: () => setOpen(on ? null : p.id),
								className: "grid w-full gap-1 py-4 text-left sm:grid-cols-12 sm:items-baseline sm:gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-dim sm:col-span-1",
										children: String(idx + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-xl text-fg sm:col-span-3",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted sm:col-span-3",
										children: p.stage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-brass-2 sm:col-span-3",
										children: p.window
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tracking-wide text-dim uppercase sm:col-span-2 sm:text-right",
										children: [CONFIDENCE[p.confidence], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "sr-only",
											children: [
												", ",
												i + 1,
												" of ",
												shown.length
											]
										})]
									})
								]
							}),
							on && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 border-t border-line bg-surface px-4 py-4 sm:ml-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs tracking-wide text-dim uppercase",
										children: [
											DOMAIN_LABEL[p.domain],
											" · ",
											p.count
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl text-sm leading-relaxed text-fg",
										children: p.contingent
									}),
									change && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 max-w-3xl text-sm leading-relaxed text-brass-2",
										children: [
											"Since the snapshot: ",
											change.line,
											change.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: change.url,
												target: "_blank",
												rel: "noreferrer",
												className: "underline",
												children: change.source || "Source"
											})] }) : change.source && ` — ${change.source}`
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "mt-4 max-w-3xl",
										children: p.phases.map((ph) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-1 border-t border-line py-3 sm:grid-cols-12 sm:gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-xs font-medium text-brass sm:col-span-3",
												children: ph.when
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-sm leading-relaxed text-muted sm:col-span-9",
												children: ph.text
											})]
										}, ph.when))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-3xl text-sm leading-relaxed text-dim",
										children: p.note
									})
								]
							})
						]
					}, p.id);
				})]
			})
		]
	});
}
function Horizon({ shown, open, setOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 border border-line bg-surface p-3 sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg text-fg",
				children: "Horizon"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-dim",
				children: "Bar is the public window, not a Gantt from a yard."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-[40rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid grid-cols-12 border-b border-line pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "col-span-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative col-span-9 h-6",
							children: [
								2026,
								2030,
								2034,
								2038,
								2042,
								2046
							].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-0 text-xs text-dim",
								style: { left: `${pct(y)}%` },
								children: y
							}, y))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2",
						children: shown.map((p) => {
							const left = pct(p.from);
							const width = Math.max(pct(p.to) - left, 1.2);
							const hot = open === p.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(p.id),
								className: "grid w-full grid-cols-12 items-center gap-2 py-1 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: hot ? "col-span-3 truncate text-xs text-brass-2" : "col-span-3 truncate text-xs text-muted",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative col-span-9 h-3 bg-raised",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: p.confidence === "signed" ? "absolute inset-y-0 bg-brass" : p.confidence === "reported" ? "absolute inset-y-0 bg-brass-2 opacity-80" : "absolute inset-y-0 border border-brass bg-transparent",
										style: {
											left: `${left}%`,
											width: `${width}%`
										}
									})
								})]
							}) }, p.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-4 text-xs text-dim",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "inline-block h-2 w-6 bg-brass" }), " Signed"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "inline-block h-2 w-6 bg-brass-2" }), " Reported"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "inline-block h-2 w-6 border border-brass" }), " Model"]
							})
						]
					})
				]
			})
		})]
	});
}
function Yards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-fg",
				children: "What is already in steel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
				children: "The 2030s list is mostly paper. These are the hulls the yards are actually handing over, or have just handed over. P15B and the Kalvari class are done. P17B does not start from an empty frigate line."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-xs tracking-wide text-dim uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-3 font-medium",
								children: "Programme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-3 font-medium",
								children: "Hull"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-3 font-medium",
								children: "Yard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-3 font-medium",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 font-medium",
								children: "Mark"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: HULLS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 text-brass-2",
								children: h.programme
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 text-fg",
								children: h.hull
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 text-muted",
								children: h.yard
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 text-fg",
								children: h.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 text-muted",
								children: h.mark
							})
						]
					}, h.hull)) })]
				})
			})
		]
	});
}
function UncrewedBoard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-fg",
				children: "Uncrewed layer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
				children: "Not on the thirteen, and not a substitute for them. Matangi is delivering. Everything else is a trial, a plate cut, or a requirement."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: UNCREWED.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl text-fg",
								children: u.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wide text-brass uppercase",
								children: u.stage
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-3",
							children: u.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-2 border-t border-line py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "col-span-4 text-xs text-dim",
									children: line.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "col-span-8 text-sm leading-relaxed text-muted",
									children: line.v
								})]
							}, line.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-dim",
							children: u.note
						})
					]
				}, u.name))
			})
		]
	});
}
function Rules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-2xl text-fg",
			children: "How the dates are made"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 border-t border-line",
			children: [
				{
					t: "Surface combatants",
					d: "About three years from RFP to first steel, then six to eight years for the lead ship. P17A is the check: contract in February 2015, Nilgiri delivered in December 2024, later ships faster than the first. P17B and P15C use this. A corvette is shorter — five to seven years from contract — so NGC does not borrow the frigate bar."
				},
				{
					t: "P75(I)",
					d: "The contractual first boat is seven years after signature, then about one a year. Kalvari is the caution, not the schedule: twelve years to the first boat, nineteen to the sixth."
				},
				{
					t: "Everything without a file",
					d: "SSN, S5, P76, LPD, LCU, DBMRH, C295 MRMR and UFOSS do not get a fake precision. The bar is the band in open reporting, or an explicit model, and the card says which."
				},
				{
					t: "What moves a bar",
					d: "A signature converts a model into a contractual window. A slipped CCS note moves every modeled bar that was waiting on it. P76 in particular waits on P75(I)."
				},
				{
					t: "What this page is not",
					d: "The Navy, the yards and DRDO do not publish a machine-readable build feed. A live site in any honest sense is this desk, updated when a contract, a keel or a commissioning is actually announced."
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-b border-line py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-fg",
					children: r.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: r.d
				})]
			}, r.t))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, {}) });
}
//#endregion
export { Home as component };
