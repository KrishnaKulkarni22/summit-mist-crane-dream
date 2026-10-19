export type SiteVersion = {
  version: string;
  date: string;
  title: string;
  changes: string[];
  sources?: { label: string; url: string }[];
};

export const SITE_VERSIONS: SiteVersion[] = [
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
