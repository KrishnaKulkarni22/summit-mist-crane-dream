//#region node_modules/.nitro/vite/services/ssr/assets/fleet-erY1-VMa.js
var DOMAINS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "subsurface",
		label: "Subsurface"
	},
	{
		id: "surface",
		label: "Surface"
	},
	{
		id: "air",
		label: "Air"
	},
	{
		id: "amphib",
		label: "Amphibious"
	},
	{
		id: "sensor",
		label: "Sensors"
	}
];
var DOMAIN_LABEL = {
	subsurface: "Subsurface",
	surface: "Surface",
	air: "Air",
	amphib: "Amphibious",
	sensor: "Sensors"
};
/** The 23 Sep 2026 list, in the order it was written. */
var PROGRAMMES = [
	{
		id: "p75i",
		name: "P75(I) SSK",
		domain: "subsurface",
		count: "6 boats · MDL + TKMS",
		stage: "CCS, not signed",
		confidence: "reported",
		window: "2033–38 if signed in 2026",
		from: 2033,
		to: 2038,
		contingent: "Seven-year first-boat clause. Kalvari took twelve to the first and nineteen to the sixth.",
		phases: [
			{
				when: "Closed",
				text: "Concept design 31 Aug 2025. Cost negotiation 16 Jan 2026. Finance Ministry clearance 28 May 2026. Navantia is out; TKMS is the only compliant bidder."
			},
			{
				when: "Open",
				text: "Cabinet Committee on Security has not signed. The German envoy has said “within a month” more than once. As of 28 Sep 2026 the contract is still not public."
			},
			{
				when: "+7 years",
				text: "First boat is contractual seven years after signature, then about one a year. A late-2026 signature is a 2033 boat, then 2034 through 2038. Induction can lag delivery."
			},
			{
				when: "Kalvari",
				text: "P75 was signed in Oct 2005. Kalvari commissioned Dec 2017. Vagsheer, the sixth, commissioned 15 Jan 2025. Treat seven years as a floor."
			}
		],
		note: "Fuel-cell AIP. Indigenous content stepped from roughly 45% to 60% in the reported terms. This line does not, by itself, cover the boats ageing out in the same decade."
	},
	{
		id: "p77",
		name: "SSN · Project 77",
		domain: "subsurface",
		count: "2 cleared of 6 · ~10,000 t",
		stage: "CCS, Oct 2024",
		confidence: "reported",
		window: "First boat, late 2030s",
		from: 2036,
		to: 2042,
		contingent: "Reactor, yard capacity at Vizag, and the SSBN line sharing the same campus.",
		phases: [
			{
				when: "Oct 2024",
				text: "CCS cleared the first two. The Navy’s longer requirement is six. Cost band cited around ₹40,000 crore for the pair, including the new industrial set-up; the six-boat talk is far larger."
			},
			{
				when: "Late 2020s",
				text: "Construction start is the public expectation, at the Ship Building Centre, Visakhapatnam, with L&T in the industrial picture. Design is the Navy’s, under the ATV set-up."
			},
			{
				when: "Late 2030s",
				text: "First boat in service is the repeated claim. One 2026 account puts launch near 2036 and commissioning a few years after. The bar is that band, not a contract date."
			}
		],
		note: "Displacement has been described near 10,000 tonnes, with a ~190–200 MWe reactor shared in spirit with the S5 work. Vertical tubes for conventional long-range weapons are part of the public sketch, which is why some writing calls them SSGNs. That fit is not a released Navy specification."
	},
	{
		id: "lcu",
		name: "LCU Mk V",
		domain: "amphib",
		count: "6 craft · ~1,500 t",
		stage: "RFI, Sep 2026",
		confidence: "model",
		window: "Lead, early 2030s",
		from: 2032,
		to: 2036,
		contingent: "RFI is not an RFP. A slow CNC pushes the whole class right.",
		phases: [{
			when: "Sep 2026",
			text: "RFI to Indian yards for a successor to the Mk IV. Public sketch: about 1,500 tonnes, 15 knots, 4,500 nautical miles, four tanks, four BMP-2s and 190 troops."
		}, {
			when: "Model",
			text: "No RFP and no yard. If a contract lands around 2028–29, a lead craft in the early 2030s is the working band. These are short builds compared with a frigate; the wait is the file, not the steel."
		}],
		note: "Sits under the LPD problem. A landing dock without its craft, or craft without a dock, is half an amphibious group."
	},
	{
		id: "lpd",
		name: "LPD",
		domain: "amphib",
		count: "4 ships · ~32,000 t class",
		stage: "Approved, no contract",
		confidence: "model",
		window: "Lead, mid-to-late 2030s",
		from: 2035,
		to: 2041,
		contingent: "The file has been alive since the 2021 RFI and still has no yard.",
		phases: [
			{
				when: "2021",
				text: "RFI for four through-deck landing platform docks from Indian yards. Public displacement figures cluster near 32,000 tonnes. They are not stable."
			},
			{
				when: "Still open",
				text: "Approval shows up in force-structure tables. A construction contract does not, as of this snapshot."
			},
			{
				when: "Model",
				text: "A contract before 2028 and a 6–8 year lead ship — the same band used for a first-of-class surface combatant — puts the first dock in the mid-to-late 2030s. Slip the contract and the bar moves with it."
			}
		],
		note: "This is the hull the LCU Mk V, the naval helicopters and a future carrier air group all assume somebody else has ordered."
	},
	{
		id: "p17b",
		name: "P17B",
		domain: "surface",
		count: "7 frigates · ~₹70,000 cr",
		stage: "RFP out",
		confidence: "model",
		window: "Lead 2035–37 · class ~2043",
		from: 2035,
		to: 2043,
		contingent: "First competitive major surface combatant. Contract is the gate, not the RFP.",
		phases: [
			{
				when: "16 Sep 2026",
				text: "RFP issued to Category A yards: MDL, GRSE, GSL, CSL. Seven next-generation frigates. The older “RFP in the first half of 2027” line is dead."
			},
			{
				when: "Late 2027",
				text: "Technical bids about 120 days after the RFP. A contract in late 2027 is the hope in trade reporting, not a date on a file."
			},
			{
				when: "2029–30",
				text: "First steel, using three years from RFP as the average. Design freeze and long-lead items sit in the gap."
			},
			{
				when: "2035–37",
				text: "Lead ship. P17A check: contract Feb 2015, Nilgiri delivered Dec 2024. Follow-on build time fell from about 93 months toward 80. Seven hulls at a 12–18 month drumbeat close near 2041–43."
			}
		],
		note: "Follow-on to the Nilgiri class. More cells, better signature, strike plus area air defence plus ASW, in the public description. Foreign content in weapons and sensors can still stall an Indian hull."
	},
	{
		id: "p15c",
		name: "P15C",
		domain: "surface",
		count: "4 destroyers · ~₹50,000 cr",
		stage: "Pre-RFP",
		confidence: "model",
		window: "Lead 2036–38",
		from: 2036,
		to: 2042,
		contingent: "RFP was “within a year” of July 2026. It is not out.",
		phases: [{
			when: "10 Jul 2026",
			text: "NDTV: four next-generation destroyers, RFP expected within a year, construction about three years after the RFP. Same internal-consultation pile as P17B was, except P17B has since moved."
		}, {
			when: "Model",
			text: "RFP in 2027, steel near 2030, lead ship 2036–38 on the 6–8 year rule. Four ships close in the early 2040s if the drumbeat holds."
		}],
		note: "The bridge between the Visakhapatnam class, which is complete, and P18. P18 is a mid-2040s conversation. Part of why this file exists: the Ukrainian plant that fed earlier destroyer turbines is gone."
	},
	{
		id: "rafale",
		name: "Rafale Marine",
		domain: "air",
		count: "26 · 22 single-seat, 4 trainers",
		stage: "Contract, 28 Apr 2025",
		confidence: "signed",
		window: "2028–31",
		from: 2028.5,
		to: 2031,
		contingent: "The only item on this list with a signed delivery clock. Vikrant’s air wing still depends on it arriving.",
		phases: [
			{
				when: "28 Apr 2025",
				text: "Inter-governmental agreement, about ₹64,000 crore. Weapons, training, simulator, performance-based logistics, and room to integrate Indian weapons such as Astra."
			},
			{
				when: "Contract",
				text: "Deliveries begin 37 months from signature and complete in 66 months. That is mid-2028 through early 2031. The Navy chief, in Dec 2025, put the first four by 2029 and the rest through 2030–31. Both lines are on the card; the contract is the harder one."
			},
			{
				when: "Not ordered",
				text: "Talk of 31 more, to reach the old 57-jet MRCBF number, is not a contract. It is not on the bar."
			}
		],
		note: "Ski-jump, arrestor recovery. The four twin-seaters are trainers and are not carrier-compatible. French Navy jets are the expected bridge for pilot training before Indian aircraft arrive."
	},
	{
		id: "ngc",
		name: "NGC",
		domain: "surface",
		count: "8 corvettes · GRSE 5, GSL 3",
		stage: "CNC done, CCS open",
		confidence: "model",
		window: "Lead, early 2030s",
		from: 2031,
		to: 2037,
		contingent: "Q2 FY27 was the signing window GRSE told investors. It closed without a public contract.",
		phases: [
			{
				when: "Jun 2022",
				text: "Acceptance of Necessity. GRSE emerged lowest bidder in May 2025 for five of eight. GSL takes three at the same unit price."
			},
			{
				when: "2026",
				text: "Price negotiation reported complete. Hydrodynamic model tests at NSTL reported complete. Formal signature was expected in Q2 FY27 (Jul–Sep 2026). Not public as of 28 Sep."
			},
			{
				when: "Model",
				text: "A corvette is not a P17B. Five to seven years from contract to the lead ship, not 6–8 from first steel. Revenue at GRSE was guided only from the second half of FY28. Eight hulls run through the mid-2030s."
			}
		],
		note: "About 3,500 tonnes, about 32 knots, in the public sketch, with extended-range BrahMos and VL-SRSAM. Replaces Khukri and Kora in role. Value cited anywhere from ₹25,000 crore for GRSE’s share to about ₹40,000 crore for the programme. The number moves because the contract is not signed."
	},
	{
		id: "dbmrh",
		name: "DBMRH",
		domain: "air",
		count: "Naval IMRH · no production contract",
		stage: "Development",
		confidence: "model",
		window: "Mid-2030s, if IMRH holds",
		from: 2034,
		to: 2039,
		contingent: "The helicopter has to exist before a deck variant can be ordered in numbers.",
		phases: [
			{
				when: "What it is",
				text: "Deck-Based Multi-Role Helicopter. HAL’s naval derivative of the Indian Multi-Role Helicopter. The job is the Sea King gap, and later a homegrown deck helicopter beside the imported fleet."
			},
			{
				when: "Bridge",
				text: "Twenty-four MH-60R Romeos are the actual signed naval helicopter programme and are inducting now. They are not DBMRH. They are why the Navy is not empty-handed while this file stays in development."
			},
			{
				when: "Model",
				text: "No production contract, no delivery clause. A mid-2030s induction is only plausible if the IMRH airframe stays on its own development path. The bar is that assumption."
			}
		],
		note: "Do not read a development project as a 2030s delivery the way Rafale Marine is a 2030s delivery."
	},
	{
		id: "c295",
		name: "C295 MRMR",
		domain: "air",
		count: "9 aircraft cited",
		stage: "Requirement",
		confidence: "reported",
		window: "Late 2020s – early 2030s",
		from: 2029,
		to: 2033,
		contingent: "Nine airframes are a reported plan, not a delivery schedule you can hold someone to.",
		phases: [{
			when: "Feb 2026",
			text: "Naval News, writing up other naval aviation clearances, said the Navy will receive nine medium-range maritime reconnaissance aircraft on the Airbus–Tata C295, beside six further P-8Is that themselves only had Acceptance of Necessity."
		}, {
			when: "Open",
			text: "A signed MRMR production schedule was not in that account. Coast Guard C295 multi-mission aircraft are a related but separate buy. IAF C295 transports are already in delivery and do not move this bar."
		}],
		note: "The 2030s maritime-patrol picture in public writing is P-8I plus these nine, plus SeaGuardian from 2029. Only the P-8I fleet already in service is a fact on the ramp today."
	},
	{
		id: "s5",
		name: "S5-class SSBN",
		domain: "subsurface",
		count: "4–6 planned · ~13,500 t",
		stage: "Reported in build",
		confidence: "reported",
		window: "First boats, late 2030s",
		from: 2035,
		to: 2040,
		contingent: "SSBN schedules are not published. Anything precise here is someone else’s leak.",
		phases: [{
			when: "Dec 2025",
			text: "Reporting that construction of the first two had begun at the Ship Building Centre, Visakhapatnam, and that four might commission by the late 2030s. That is a press claim, not a Navy milestone list."
		}, {
			when: "Class",
			text: "Follow-on to the Arihant line. Public displacement around 13,500 tonnes. Four to six boats is the range in open tables. The last two Arihant-class hulls were themselves still expected across 2026–27, so the yard is not empty."
		}],
		note: "The bar is the reported late-2030s commissioning band for the early boats. It will not get sharper from open sources, and it should not."
	},
	{
		id: "p76",
		name: "P76",
		domain: "subsurface",
		count: "6 indigenous SSKs · ~3,000 t",
		stage: "Design",
		confidence: "model",
		window: "First boat, mid-2030s",
		from: 2034,
		to: 2040,
		contingent: "Held behind P75(I). If the German contract slips, this one slips with it.",
		phases: [
			{
				when: "Design",
				text: "Navy Submarine Design Group with the ATV project. Six conventional boats, the first submarine class meant to be Indian-designed rather than built from a foreign drawing. A May 2026 account put design completion at 2028."
			},
			{
				when: "Order",
				text: "Naval officials have said the boats get ordered after the TKMS deal is settled. Equipment orders from about 2028 are one published hope. A first boat in service near 2034 is another. Both assume the design locks and the money is still there."
			},
			{
				when: "Model",
				text: "Six boats across the rest of the decade only if the first one really is in the water by the mid-2030s. P75’s own history says not to budget on that."
			}
		],
		note: "This is the line that makes P75(I) a bridge instead of another one-off. It is also the line most exposed to P75(I) consuming the decade’s submarine money."
	},
	{
		id: "ufoss",
		name: "UFOSS",
		domain: "sensor",
		count: "Seabed acoustic array",
		stage: "Industry partner sought",
		confidence: "reported",
		window: "Fielding into the 2030s",
		from: 2028,
		to: 2035,
		contingent: "A sensor system, not a hull. No milestone dates have been published.",
		phases: [{
			when: "Jul 2026",
			text: "DRDO began looking for an industry partner for an Underwater Fiber Optic Sensing System. Role: fixed seabed surveillance, the Indian approach to a problem other navies answered with cable arrays."
		}, {
			when: "Model",
			text: "Partner, trials, then a fielded array. Late-2020s trials and 2030s coverage is a reasonable reading and nothing more. There is no contract clock."
		}],
		note: "Pairs with the uncrewed underwater layer. A fixed array and a 15-day HEAUV are different answers to the same shortage of crewed submarines."
	},
	{
		id: "ngmv",
		name: "NGMV",
		domain: "surface",
		count: "6 missile vessels · CSL",
		stage: "Keel laid",
		confidence: "signed",
		window: "First ship Mar 2027",
		from: 2027,
		to: 2032,
		contingent: "On the yards tab already. Off the 23 September note. These are the strike ships before any P17B exists.",
		phases: [{
			when: "30 Mar 2023",
			text: "Contract with Cochin Shipyard for six ships, ₹9,805 crore. Eight BrahMos, a vertical-launch short-range surface-to-air battery, and waterjets. LM2500s are being built by HAL for the class."
		}, {
			when: "18 Sep 2026",
			text: "Keel of yard 531 laid. Steel for the second ship was cut the day before. First delivery is scheduled for March 2027. The other five follow through the turn of the decade."
		}],
		note: "Replaces the small missile-boat and old corvette role at a choke point. Not a frigate, and not a substitute for P17B."
	},
	{
		id: "ngopv",
		name: "NGOPV",
		domain: "surface",
		count: "11 patrol vessels · GSL and GRSE",
		stage: "In build",
		confidence: "signed",
		window: "Launching now · class into the early 2030s",
		from: 2026.5,
		to: 2031,
		contingent: "A signed patrol programme. It will not show up in a frigate count.",
		phases: [{
			when: "Contract",
			text: "Eleven Next Generation Offshore Patrol Vessels, about ₹9,781 crore, split between Goa Shipyard and GRSE. About 2,500 tonnes."
		}, {
			when: "Now",
			text: "Two launched, more on the slip, the rest still to be laid. These are hulls in the water and on the blocks, not a paper class."
		}],
		note: "Presence, exclusive economic zone, and wartime escort of the unglamorous kind. The 2030s combatant list is incomplete without them only if someone is counting ships rather than brochures."
	},
	{
		id: "cts",
		name: "Cadet training ships",
		domain: "surface",
		count: "3 · L&T · ~4,700 t",
		stage: "In build",
		confidence: "signed",
		window: "Late 2020s",
		from: 2027,
		to: 2030,
		contingent: "Signed and in steel. Not a combatant. Still a ship the Navy has to crew and berth.",
		phases: [{
			when: "Contract",
			text: "Cabinet approval for three cadet training ships from Larsen & Toubro, about ₹3,108 crore."
		}, {
			when: "Now",
			text: "One launched, two keels laid. Open tables call the design the Krishna class."
		}],
		note: "Training hulls. They do not move the escort count. They do occupy a yard and a commissioning calendar."
	},
	{
		id: "fss",
		name: "Fleet support ships",
		domain: "surface",
		count: "5 oilers · HSL",
		stage: "Contracted",
		confidence: "signed",
		window: "2027–31",
		from: 2027,
		to: 2031,
		contingent: "A carrier and a destroyer screen without oilers is a coastal navy with a long brochure.",
		phases: [{
			when: "Aug 2023",
			text: "Contract for five fleet support ships at Hindustan Shipyard. Deliveries are reported from 2027 through 2031."
		}],
		note: "This is the logistics the 2030s surface list assumes and does not name. P17B, P15C and Rafale Marine all depend on someone else having ordered fuel."
	},
	{
		id: "mcmv",
		name: "MCMV",
		domain: "surface",
		count: "12 minehunters · ~2,800 t",
		stage: "AoN, no RFP",
		confidence: "model",
		window: "2030–37, if the file moves",
		from: 2030,
		to: 2037,
		contingent: "The last minesweeper was paid off in 2019. Acceptance of Necessity is not a ship.",
		phases: [
			{
				when: "2019",
				text: "The Pondicherry-class minehunters are gone. The Navy has had no dedicated mine countermeasure vessel since."
			},
			{
				when: "3 Jul 2025",
				text: "Defence Acquisition Council accepted the necessity. About ₹45,000 crore is the cited band. Twelve ships, about 87 metres and 2,800 tonnes, each meant to carry unmanned surface craft, AUVs and ROVs."
			},
			{
				when: "Still open",
				text: "No request for proposal, as of mid-2026 reporting. A published hope of deliveries from 2030 to 2037 only holds if a yard is actually chosen. The bar is that hope."
			}
		],
		note: "The uncrewed mine kit on the other tab is what these ships are supposed to put in the water. Without the motherships it is a catalogue."
	},
	{
		id: "ngsv",
		name: "Next-gen survey vessels",
		domain: "surface",
		count: "6 · CSL lowest bidder",
		stage: "Bid, not signed",
		confidence: "reported",
		window: "Early 2030s, if contracted",
		from: 2031,
		to: 2036,
		contingent: "The Sandhayak class is finished. This is the follow-on, and it is still a bid.",
		phases: [
			{
				when: "15 Sep 2023",
				text: "Acceptance of Necessity. The cleared figure was about ₹3,300 crore. Bids came in higher."
			},
			{
				when: "11 Feb 2026",
				text: "Cochin Shipyard reported as lowest bidder for six ships, near ₹6,000 crore, under L&T. That is not a signed build contract."
			},
			{
				when: "Model",
				text: "A contract in the next year or two and a survey ship’s shorter build would put the class in the early 2030s. No steel until that signature."
			}
		],
		note: "Hydrography, not a combatant. Included because the previous survey class has already closed and this one has not opened."
	},
	{
		id: "p18",
		name: "Project 18",
		domain: "surface",
		count: "6 large combatants · 14–15,000 t",
		stage: "Planned",
		confidence: "model",
		window: "Service, mid-2040s",
		from: 2040,
		to: 2048,
		contingent: "This is why it was left off a 2030s list. P15C is the bridge.",
		phases: [{
			when: "Open timeline",
			text: "One public sketch puts an RFP around 2029 and first steel around 2034. Six ships, in the 14,000 to 15,000 tonne class. The same idea appears under the label 18A."
		}, {
			when: "Model",
			text: "Six to eight years from steel to a lead ship lands in the early 2040s. A class of six is a mid-2040s fleet, not a 2030s one. The bar starts at 2040 for that reason."
		}],
		note: "Do not read this as a ship the Navy will commission beside P17B. It is the ship that comes after the destroyer the Navy has not ordered yet."
	},
	{
		id: "iac2",
		name: "IAC-2",
		domain: "surface",
		count: "Second indigenous carrier · not approved",
		stage: "No nod",
		confidence: "model",
		window: "Late 2030s only if approved now",
		from: 2037,
		to: 2043,
		contingent: "Cochin’s carrier line has been idle since Vikrant. No approval, no ship.",
		phases: [{
			when: "Now",
			text: "The second indigenous aircraft carrier has no government nod. CSL has said a repeat of a Vikrant-type ship is eight to ten years of building, and that the line cannot be kept waiting forever."
		}, {
			when: "Model",
			text: "Construction starts three or four years after a nod, then eight or nine years to build. A signature in 2026 is a late-2030s carrier. A signature later is not. The bar is the optimistic case, and it is labelled as one."
		}],
		note: "Rafale Marine is the air wing for the carrier India already has. IAC-2 is a different argument, and it has not started."
	}
];
var HULLS = [
	{
		programme: "P17A",
		hull: "INS Nilgiri",
		yard: "MDL",
		status: "Commissioned",
		mark: "15 Jan 2025"
	},
	{
		programme: "P17A",
		hull: "INS Udaygiri",
		yard: "MDL",
		status: "Commissioned",
		mark: "26 Aug 2025"
	},
	{
		programme: "P17A",
		hull: "INS Himgiri",
		yard: "GRSE",
		status: "Commissioned",
		mark: "26 Aug 2025"
	},
	{
		programme: "P17A",
		hull: "INS Taragiri",
		yard: "GRSE",
		status: "Commissioned",
		mark: "3 Apr 2026"
	},
	{
		programme: "P17A",
		hull: "INS Dunagiri",
		yard: "GRSE",
		status: "Commissioned",
		mark: "21 Jun 2026"
	},
	{
		programme: "P17A",
		hull: "INS Mahendragiri",
		yard: "MDL",
		status: "Commissioned",
		mark: "11 Jul 2026 · delivered 30 Apr"
	},
	{
		programme: "P17A",
		hull: "INS Vindhyagiri",
		yard: "GRSE",
		status: "Fitting out",
		mark: "Last of class · expected late 2026"
	},
	{
		programme: "P15B",
		hull: "Visakhapatnam class, four ships",
		yard: "MDL",
		status: "Class complete",
		mark: "Surat closed the line in 2025"
	},
	{
		programme: "SVL",
		hull: "Sandhayak class, four ships",
		yard: "GRSE",
		status: "Class complete",
		mark: "Sanshodhak commissioned 21 Jun 2026"
	},
	{
		programme: "ASW-SWC",
		hull: "16 hunters, mixed",
		yard: "GRSE / L&T",
		status: "In build",
		mark: "Arnala, Anjadip, Agray and others commissioned 2025–26. Last hulls run into 2027–28."
	},
	{
		programme: "NGMV",
		hull: "Six missile vessels",
		yard: "CSL",
		status: "Keel laid",
		mark: "Contract 30 Mar 2023, ₹9,805 cr. Keel of yard 531 laid 18 Sep 2026. First delivery scheduled Mar 2027."
	},
	{
		programme: "NGOPV",
		hull: "Eleven offshore patrol vessels",
		yard: "GSL / GRSE",
		status: "In build",
		mark: "About ₹9,781 cr. Two launched, the rest on the slip or still to be laid."
	},
	{
		programme: "CTS",
		hull: "Three cadet training ships",
		yard: "L&T",
		status: "In build",
		mark: "About ₹3,108 cr and 4,700 tonnes. One launched, two keels laid."
	},
	{
		programme: "FSS",
		hull: "Five fleet support ships",
		yard: "HSL",
		status: "Contracted",
		mark: "Signed Aug 2023. Deliveries reported from 2027 through 2031."
	},
	{
		programme: "P75",
		hull: "Kalvari class, six boats",
		yard: "MDL",
		status: "Class complete",
		mark: "Vagsheer commissioned 15 Jan 2025. The reference case for P75(I)."
	}
];
var UNCREWED = [
	{
		name: "XLUUV",
		stage: "Plate cut",
		lines: [
			{
				k: "Clearance",
				v: "₹2,500 cr, Make-I, Sep 2024. Twelve units in the requirement."
			},
			{
				k: "Your figure",
				v: "20 tonnes, 30–45 days, ASW / ASuW / MCM, induction end of 2027."
			},
			{
				k: "Yard",
				v: "Jalkapi, Krishna Defence, Halol. Plate cut 10 Jun 2025."
			},
			{
				k: "Other sketch",
				v: "Trade writing still describes a much larger boat, tens of metres and up to about 100 tonnes. Not obviously the same object."
			}
		],
		note: "End-2027 fits a prototype better than an operational twelve. A strike variant is talk, not a contract."
	},
	{
		name: "HEAUV",
		stage: "Trials",
		lines: [
			{
				k: "Who",
				v: "NSTL with Cochin Shipyard. Requirement cited up to twenty."
			},
			{
				k: "Boat",
				v: "About 10 m by 1 m. 15 days at 3 knots. 8 knots max. About 300 m."
			},
			{
				k: "Job",
				v: "Forward- and side-looking sonar. Persistent track, shared to other HEAUVs and to ships."
			},
			{
				k: "Trials",
				v: "Surface run Mar 2024. Lake run Mar 2025. No production contract for the twenty."
			}
		],
		note: "Closest uncrewed underwater system to an induction decision. Still a trial, not a fleet."
	},
	{
		name: "Matangi USV",
		stage: "Delivering",
		lines: [
			{
				k: "Contract",
				v: "Twelve weaponised autonomous boats. Sagar Defence with WESEE. 8 Jan 2023."
			},
			{
				k: "Proof",
				v: "850 nautical miles, Mumbai to Tuticorin, autonomous, 2024."
			},
			{
				k: "Delivery",
				v: "First two left Pune on 30 Jan 2026 for the west coast."
			},
			{
				k: "Fit",
				v: "12.7 mm. Fitted for missiles and loitering munitions, not fitted with them."
			}
		],
		note: "The only uncrewed line on this page that has left the factory in numbers."
	},
	{
		name: "MCM set",
		stage: "Requirement",
		lines: [
			{
				k: "MCMV",
				v: "Twelve motherships. DAC nod Jul 2025. About ₹44,000 cr is the cited band. Not a yard contract."
			},
			{
				k: "Suites",
				v: "Twelve unmanned mine-countermeasure sets — CASCADE craft, an AUV, an ROV — to work from those motherships."
			},
			{
				k: "ASW craft",
				v: "A separate ask of about twenty CASCADE-type boats, 15–25 m, with a thin-line sonar and torpedo tubes."
			},
			{
				k: "CASC",
				v: "Compact Autonomous Surface Craft cleared by the DAC on 5 Aug 2025."
			}
		],
		note: "BEL and WESEE have already run an autonomy suite on an in-service fast interceptor. That is software on a crewed hull, not this class."
	}
];
var HORIZON_START = 2026;
var HORIZON_END = 2048;
//#endregion
export { HULLS as a, HORIZON_START as i, DOMAIN_LABEL as n, PROGRAMMES as o, HORIZON_END as r, UNCREWED as s, DOMAINS as t };
