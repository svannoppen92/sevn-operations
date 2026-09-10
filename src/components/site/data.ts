export type ResultGroup = {
  id: string;
  title: string;
  items: string[];
};
 
export const resultGroups: ResultGroup[] = [
  {
    id: "revenue",
    title: "Revenue & Growth",
    items: [
      "Drove ~$100K in monthly savings through workforce and expense optimization.",
      "Cut contractor spend 90% — from $17K/month to $1.7K/month.",
      "Automated monthly QuickBooks P&L reviews using AI — data is pulled automatically at month's close, summarized into a standing template, and emailed to leadership with trends flagged — cutting review time from a full day to 5 minutes.",
      "Built yearly financial forecasting and planning processes from scratch, giving leadership teams real-time budget visibility for the first time.",
      "Owned a $2M P&L end-to-end — budgeting, forecasting, and capital allocation, with a specific focus on people and subscription costs.",
      "Stood up and operationalized a partnerships and sponsorships program, converting an informal, consultant-run process into a systematized one — generating $273K in 2024 and laying the foundation for a projected $357K in 2025.",
      "Designed and launched a podcast sponsorship program from scratch, signing 8 sponsors and generating $80K in revenue.",
    ],
  },
  {
    id: "infrastructure",
    title: "Strategic Infrastructure & Execution",
    items: [
      "Architected the company's yearly roadmap planning and communication process, aligning leadership vision with team execution.",
      "Redesigned the company-wide OKR program, driving completion rates from the mid-40s to 85%+, sustained across four consecutive quarters.",
      "Installed a weekly executive reporting cadence and KPI tracking system, improving leadership's ability to catch problems early — like social engagement dips — before they became bigger issues.",
      "Planned, funded, and executed quarterly All Hands and department events for 1,000+ in-person and remote employees, improving company-wide alignment and morale.",
    ],
  },
  {
    id: "risk",
    title: "Risk & Compliance",
    items: [
      "Brought two early-stage organizations — a startup and a nonprofit — into full compliance with employment law, vendor contracts, and contractor classifications, each for the first time.",
      "Implemented a contract management system centralizing employee contracts, 50+ vendor contracts, and 100+ contractor agreements.",
      "Designed and simplified a complex quarterly reimbursement process with a non-profit partner, retroactively accounting for up to $1MM in expenses and rolling out a new expense process for the team going forward.",
      "Established compliant contract execution and storage protocols, partnering with legal counsel on drafting, negotiation, and renewals.",
      "Led the company's conversion from LLC to Inc. to enable equity compensation.",
      "Migrated the company's HRIS from Gusto to JustWorks to enable a PEO model.",
      "Directed the implementation of Remote for an international workforce of 39 employees and contractors across 9 countries.",
    ],
  },
  {
    id: "org",
    title: "Organizational Design & Talent Systems",
    items: [
      "Scaled the organization from 2 to 13 full-time employees, building end-to-end recruiting infrastructure that delivered a 92% offer acceptance rate (11 of 12 offers accepted).",
      "Created and institutionalized onboarding, performance review, and leveling frameworks — achieving 100% retention across 13 hires over 2 years and 90%+ employee engagement scores.",
      "Transitioned the company to a PEO and selected its 401(k) vendor, formalizing its benefits architecture, saving $1,500/month for the employer and $200+/employee/month, and removing compliance risk.",
    ],
  },
  {
    id: "programs",
    title: "Cross-Functional Program & Project Management",
    items: [
      "Developed and launched two high-visibility external platforms — a redesign of tesla.com/supercharger and the Host a Supercharger program — expanding its public Supercharger infrastructure and partner ecosystem.",
      "Spearheaded the end-to-end launch of four products, generating 8,308 new subscriptions and ~$100K in incremental annual revenue.",
      "Ran weekly priority-setting sessions, owned cross-stakeholder communications, and drove ambiguous, high-priority initiatives to completion, like supporting engineers during high-stakes manufacturing launches.",
    ],
  },
  {
    id: "special",
    title: "Special Projects",
    items: [
      "Managed end-to-end delivery of a weekly newsletter to 250,000 subscribers — staging, proofing, contractor management, and automated send scheduling — maintaining 99–100% delivery accuracy quarter over quarter.",
      "Grew organic social presence to 500,000 followers, up 100,000 year-over-year.",
    ],
  },
];
 
export type ProcessStage = {
  number: string;
  title: string;
  description: string;
};
 
export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discovery",
    description: "I learn your business and find what's really in the way.",
  },
  {
    number: "02",
    title: "Analysis",
    description: "I dig into what I found to pinpoint the real opportunity.",
  },
  {
    number: "03",
    title: "Strategy",
    description: "I map a clear plan for you — what to do, who owns it, and when.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "I put the plan into motion, with regular check-ins along the way.",
  },
  {
    number: "05",
    title: "Review",
    description: "I measure the results and hand off what you need to keep it going.",
  },
];
 
export const toolCategories = [
  { label: "Project management", tools: ["Notion", "Monday"] },
  { label: "PEO / EOR", tools: ["Gusto", "JustWorks", "Remote", "Rippling", "Deel"] },
  { label: "Finance", tools: ["QuickBooks"] },
  { label: "AI tools", tools: ["Claude", "ChatGPT", "Gemini"] },
];
 
export const reviews = [
  {
    quote:
      "She walked into a company where nothing was written down and left us with systems the whole team actually uses. Our leadership meetings finally have a spine.",
    name: "Placeholder Review",
    role: "CEO, Series A startup",
  },
  {
    quote:
      "The compliance cleanup alone paid for itself twice over. Calm, fast, and completely unbothered by the mess.",
    name: "Placeholder Review",
    role: "Executive Director, Nonprofit",
  },
  {
    quote:
      "Our OKR completion rate went from a joke to something we plan around. That change stuck long after the engagement ended.",
    name: "Placeholder Review",
    role: "VP Operations",
  },
  {
    quote:
      "Give her the messiest corner of the business and it comes back as a documented, repeatable process.",
    name: "Placeholder Review",
    role: "Chief of Staff",
  },
];
