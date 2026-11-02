export type SiteVersion = {
  version: string;
  date: string;
  title: string;
  changes: string[];
  sources?: { label: string; url: string }[];
};

export const SITE_VERSIONS: SiteVersion[] = [
  {
    version: "1.4",
    date: "2 November 2026",
    title: "Corvette contract report and destroyer AoN",
    changes: [
      "Updated the NGC row with the reported MoD contract signing for eight corvettes; the reported ₹53,866.50 crore total is clearly marked as awaiting a directly linked official release.",
      "Recorded the reported AoN for a next-generation destroyer above 10,000 tonnes, while keeping the Project 18 label and delivery horizon explicitly unconfirmed or modelled.",
      "Revised the NGC horizon to show the reported 2030 first-ship target and left the full class schedule as an estimate.",
    ],
    sources: [
      {
        label: "X · Dr Ajayshree Singh Sambyal · contract report, 2 Nov 2026",
        url: "https://x.com/AjayshreeSamby3",
      },
      {
        label: "PIB · DAC approvals, 26 Oct 2026",
        url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2328486&lang=2&reg=48",
      },
      {
        label: "The Tribune · next-generation destroyer report, 26 Oct 2026",
        url: "https://www.tribuneindia.com/news/defence/army-artillery-drones-helicopters-and-more-centre-clears-rs-2-12-lakh-crore-deals-who-gets-what",
      },
      {
        label: "Indian Express · CCS approval for eight NGCs, 30 Oct 2026",
        url: "https://indianexpress.com/article/india/indian-navy-next-generation-corvettes-project-approval-10943487/",
      },
    ],
  },
  {
    version: "1.3",
    date: "19 October 2026",
    title: "Public version history and creator link",
    changes: [
      "Added this source-linked history of published tracker snapshots.",
      "Linked the ExiledSeraph credit to @ExiledSeraph6 on X.",
    ],
  },
  {
    version: "1.2",
    date: "19 October 2026",
    title: "LPD and frigate RFPs",
    changes: [
      "Updated the four-ship LPD programme to RFP issued, with bids awaited.",
      "Recorded the Navy’s confirmation that the next-generation frigate RFP is out and responses are awaited.",
      "Kept both delivery ranges labelled as projections; no contract schedule has been published.",
    ],
    sources: [
      {
        label: "Business Standard · VCNS briefing, 19 Oct 2026",
        url: "https://www.business-standard.com/amp/external-affairs-defence-security/news/naval-platforms-worth-2-41-trn-accorded-aon-rfp-out-for-four-lpds-vcns-126101900918_1.html",
      },
    ],
  },
  {
    version: "1.1",
    date: "17 October 2026",
    title: "Submarine and MPV updates",
    changes: [
      "Added the proposal for three additional Scorpene submarines, with CCS approval and delivery timing still unconfirmed.",
      "Added the two-ship Samarthak-class MPV programme: Samarthak commissioned and Utkarsh launched, with no public commissioning date for Utkarsh.",
    ],
    sources: [
      {
        label: "Hindustan Times · Scorpene proposal, 13 Oct 2026",
        url: "https://www.hindustantimes.com/india-news/indian-navy-scorpene-kalvari-class-three-more-submarines-proposal-modi-government-rs-33000-crore-indian-ocean-101791851908321.html",
      },
      {
        label: "Ministry of Defence · INS Samarthak commissioned, 16 Oct 2026",
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2324581&lang=2&reg=48",
      },
    ],
  },
  {
    version: "1.0",
    date: "28 September 2026",
    title: "First public release",
    changes: [
      "Published the initial 2030s programme slate with estimated timelines, status confidence labels, and source notes.",
      "Introduced the independent project credit for ExiledSeraph.",
    ],
  },
];
