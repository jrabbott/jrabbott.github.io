export const projects = [
  {
    id: 'digital-assessment-service',
    title: 'Digital Assessment Service',
    href: 'https://www.gov.uk/government/collections/reception-baseline-assessment',
    serviceName: 'Reception Baseline Assessment (RBA) · Standards and Testing Agency',
    role: 'Senior Developer, later Technical Lead',
    paragraphs: [
      'I helped build the digital platform behind the Reception Baseline Assessment for the Standards and Testing Agency. I started as Senior Developer and later became Technical Lead. I worked through IVT and TPT — I wasn’t on the project for live national delivery. The RBA is an early maths and literacy assessment given in the first weeks of reception, and it’s the starting point for measuring progress through primary school.',
      'The service covers the full school journey: registering pupils, preparing devices, pairing practitioner and pupil sessions, running the assessment, and producing narrative statements. Reliability and accessibility mattered as much as features. Schools need something that works in a real classroom, not just in a demo.',
      'Scale showed up early. IVT covered about 1,502 pupils and around 9.2GB of event data. TPT involved around 300 schools — roughly ten pupils each (~3,000 pupils) over a two-week September window — and generated about 30GB for item analysis. Those phases sat ahead of live national assessment (around 800,000 pupils in September 2023). In a typical year IVT, TPT and Live run together, and the platform generates around 5.2TB of RBA data.',
      'We focused on secure Azure services, clear paths for schools and support staff, and engineering practices that could keep a national assessment moving as policy and tech changed.',
    ],
  },
  {
    id: 'education-benchmarking-and-insights',
    title: 'Education Benchmarking and Insights',
    href: 'https://github.com/DFE-Digital/education-benchmarking-and-insights',
    serviceName: 'Financial Benchmarking and Insights Tool (FBIT)',
    role: 'Principal engineer, technical lead and technical architect',
    paragraphs: [
      'I led the ground-up build of this service. I set the technical direction across data, platform, and presentation — architecture, hands-on engineering, and the coordination needed to turn a broad data product into something schools could actually use.',
      'It gives schools one place to manage and understand their financial data. Benchmarking lets them compare with similar schools. Insights help them dig into the numbers and spot better ways to plan. Practical evidence, not another spreadsheet pile.',
      'The architecture splits ingestion, processing, APIs, and presentation. A Python pipeline loads CSV and Excel into Azure SQL. .NET Azure Functions expose REST APIs. An ASP.NET Core portal uses Vue and shared React/TypeScript charts. Infrastructure, migrations, pipelines, and ops analytics sit around that.',
      'That split keeps processing repeatable, visualisations reusable, and ownership clear. School leaders, governors, and trustees get better information without having to assemble the analysis themselves.',
    ],
  },
  {
    id: 'accessing-childcare-entitlement-checker',
    title: 'Accessing Childcare Entitlement Checker',
    href: 'https://github.com/DFE-Digital/accessing-childcare-entitlement-checker',
    role: 'Principal engineer, technical lead and technical architect',
    paragraphs: [
      'I led the ground-up build of this service — architecture and delivery from early design through to something production-ready. The aim was a solid foundation teams could extend without painting themselves into a corner.',
      'It helps parents and carers in England check eligibility for childcare support, including 15 and 30 hours of funded childcare and Tax-Free Childcare. Complex policy, turned into a journey people can actually follow.',
      'We also put in automated integration and cross-browser testing, security scanning, technical docs, architecture decisions, and runbooks. That made the service easier to operate and evolve, and gave the team a shared view of the design and the risks.',
    ],
  },
  {
    id: 'dfe-checkov-policies',
    title: 'DfE Checkov Policies',
    href: 'https://github.com/DFE-Digital/dfe-checkov-policies',
    role: 'Technical lead for the infrastructure policy initiative',
    paragraphs: [
      'I led the work to shift infrastructure policy left. Compliance checks became part of delivery, not a late review. We codified expectations, wired them into CI, and gave teams feedback while they were still changing their infrastructure.',
      'The repo has custom Checkov policies, examples, and CI integrations for scanning Azure infrastructure-as-code across DfE landing zones, including CIP and ELZ. Cloud security and platform rules, turned into automated checks teams can run consistently.',
      'It gives policy rules, docs, and contribution practices a shared home. The roadmap extends that to more landing-zone rules, Bicep, and other artefacts like ARM templates, Dockerfiles, and workflow definitions.',
      'Catching gaps earlier cuts rework. It also makes standards visible and testable — and easier to improve over time.',
    ],
  },
] as const;

export type ProjectId = (typeof projects)[number]['id'];

export function projectHref(id: ProjectId): string {
  return `/projects/#${id}`;
}
