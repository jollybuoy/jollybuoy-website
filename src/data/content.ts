export const company = {
  name: 'JollyBuoy Tech',
  legal: 'Jollybuoy Technology Services Inc.',
  tagline: 'Ideas · Solutions · Growth · Impact',
  line: 'IT Solutions · Digital Marketing · Software · Automation',
  email: {
    info: 'info@jollybuoy.com',
    sales: 'sales@jollybuoy.com',
    careers: 'careers@jollybuoy.com',
    privacy: 'privacy@jollybuoy.com',
    legal: 'legal@jollybuoy.com',
  },
  address: {
    line1: '32 Forest Manor Road',
    line2: 'North York, ON M2J 0H2',
    country: 'Canada',
  },
  location: 'Toronto · serving Canada and remote',
  linkedin: 'https://www.linkedin.com/company/jollybuoy-tech',
  linkedinHandle: '@jollybuoy-tech',
} as const

export const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
] as const

export type Product = {
  slug: string
  name: string
  kicker: string
  tagline: string
  summary: string
  description: string
  url: string
  image: string
  featured: boolean
  status: 'Live' | 'Studio'
  highlights: string[]
  capabilities: string[]
}

export const products: Product[] = [
  {
    slug: 'ticxnova',
    name: 'Ticxnova',
    kicker: 'Flagship · AI Support OS',
    tagline: 'Support that thinks with you.',
    summary:
      'An AI-native customer support and ticket intelligence platform for teams that need speed, context, and control.',
    description:
      'Ticxnova is our flagship product — an intelligent operations layer for customer support. It unifies tickets, conversations, and automation so growing teams can resolve work faster without drowning in queues. Built for MSPs, SaaS teams, and internal IT, it brings omnichannel intake, workflow engines, and AI assistance into one system you can actually run a business on.',
    url: 'https://ticxnova.com',
    image: '/images/product-ticxnova.png',
    featured: true,
    status: 'Live',
    highlights: [
      'Omnichannel ticket intake',
      'AI triage and suggested replies',
      'Custom workflows for your team',
      'Enterprise-ready, startup-priced',
    ],
    capabilities: [
      'Intelligent automation engine',
      'Role-based workspaces',
      'SLA and escalation logic',
      'Analytics for volume, speed, and quality',
    ],
  },
  {
    slug: 'cedar',
    name: 'Cedar Trade',
    kicker: 'Markets · Analytics Desk',
    tagline: 'Canadian markets, in motion.',
    summary:
      'A CDR analytics desk with live quotes, portfolio tracking, and paper trading — built for serious market work.',
    description:
      'Cedar Trade is our markets product: a Canadian CDR analytics desk that brings live quotes, portfolio context, and paper trading into one cinematic workspace. It is the public face of the trading systems we have been building inside JollyBuoy — research-grade tools with the feel of a modern terminal.',
    url: 'https://trade-cedar.com',
    image: '/images/product-cedar.png',
    featured: true,
    status: 'Live',
    highlights: [
      'Live quote intelligence',
      'Portfolio tracking',
      'Paper trading desk',
      'Canadian CDR focus',
    ],
    capabilities: [
      'Market analytics workspace',
      'Watchlists and positions',
      'Research-grade charting',
      'Desk-style decision support',
    ],
  },
  {
    slug: 'ramchess',
    name: 'RAMS Chess',
    kicker: 'App · Chess',
    tagline: 'Think · Plan · Win.',
    summary:
      'A digital chess app with AI analysis, training paths, and a board built for serious play — not just puzzles.',
    description:
      'RAMS Chess is our chess app: a digital product for playing, analyzing, and improving. It brings board intelligence, progress tracking, and Think · Plan · Win into one modern interface you can use on the web.',
    url: 'https://ramschess.com',
    image: '/images/product-ramchess.png',
    featured: true,
    status: 'Live',
    highlights: [
      'Play and train on one board',
      'AI-assisted analysis',
      'Structured learning paths',
      'Think · Plan · Win',
    ],
    capabilities: [
      'Interactive chessboard',
      'Progress and ranking',
      'AI game review',
      'Modern dark app UI',
    ],
  },
  {
    slug: 'bizsuite',
    name: 'JollyBuoy BizSuite',
    kicker: 'Operations · Software',
    tagline: 'Modular software for running the business.',
    summary:
      'A suite of connected business modules — CRM, operations, and internal tooling we use and extend for clients.',
    description:
      'BizSuite is our internal-grade operations stack, evolved into a product direction. It is modular by design: CRM, billing-adjacent workflows, and day-to-day operations software that we shape for real companies. Not every module is public yet — the suite is how we ship practical software alongside our flagship products.',
    url: '/contact',
    image: '/images/product-bizsuite.png',
    featured: false,
    status: 'Studio',
    highlights: [
      'Modular business apps',
      'CRM and operations',
      'Built for real workflows',
      'Available as custom deployment',
    ],
    capabilities: [
      'Connected work modules',
      'Client-ready customization',
      'Secure cloud hosting',
      'JollyBuoy support included',
    ],
  },
]

export type Service = {
  slug: string
  name: string
  kicker: string
  summary: string
  description: string
  image: string
  featured: boolean
  points: string[]
}

export const services: Service[] = [
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing & Advertising',
    kicker: 'Growth · Highlighted',
    summary:
      'Campaigns, ads, and brand systems that turn attention into pipeline — measured, not guessed.',
    description:
      'Digital marketing is a core JollyBuoy line, not an add-on. We plan, launch, and optimize advertising and growth programs the same way we ship software: with systems, tracking, and a team that stays on the account. From paid media to SEO and content, we build the engine that makes your product visible.',
    image: '/images/service-marketing.png',
    featured: true,
    points: [
      'Google, Meta, and LinkedIn advertising',
      'SEO, content, and landing pages',
      'Social campaigns and brand systems',
      'Analytics, conversion tracking, and reporting',
    ],
  },
  {
    slug: 'infrastructure',
    name: 'IT Infrastructure & Technology Services',
    kicker: 'Cloud · Support · Security',
    summary:
      'Cloud, Microsoft 365, cybersecurity, backups, and 24/7 support — the stack companies actually run on.',
    description:
      'We design, migrate, and operate infrastructure across AWS, Azure, and Google Cloud. Email and Microsoft 365, layered security, data protection, and round-the-clock support sit in the same practice — so your systems stay available, compliant, and affordable.',
    image: '/images/services-cloud.png',
    featured: false,
    points: [
      'Cloud architecture, migration, and cost control',
      'Email and Microsoft 365 deployment',
      'Cybersecurity, endpoints, and compliance',
      '24/7 monitoring, backups, and recovery',
    ],
  },
  {
    slug: 'web-mobile',
    name: 'Website & Mobile App Development',
    kicker: 'Web · iOS · Android',
    summary:
      'Sites and apps that look current, load fast, and are built to grow with the business.',
    description:
      'We design and ship websites, web applications, and mobile apps for iOS and Android. The same product standard we use on Ticxnova and RAMS Chess — modern interfaces, solid engineering, and hosting that does not fall over.',
    image: '/images/service-webapp.png',
    featured: false,
    points: [
      'Marketing sites and web applications',
      'iOS and Android apps',
      'UX, performance, and accessibility',
      'Hosting, launch, and ongoing support',
    ],
  },
  {
    slug: 'ai-automation',
    name: 'AI Solutions & Automation',
    kicker: 'AI · Workflows',
    summary:
      'Models, agents, and automations in production — where they cut work, not where they make a slide.',
    description:
      'We put AI into the work: ticket intelligence, document flow, operations, and custom agents. Automation is designed around your process, then monitored like any other production system.',
    image: '/images/service-ai.png',
    featured: false,
    points: [
      'AI assistants and workflow agents',
      'Process automation and integrations',
      'Support, ops, and knowledge systems',
      'Governance, evaluation, and rollout',
    ],
  },
  {
    slug: 'custom-software',
    name: 'Custom Software Development',
    kicker: 'Build · Ship · Own',
    summary:
      'SaaS platforms, internal tools, and product engineering — built to your workflow, not a template.',
    description:
      'When off-the-shelf is not enough, we design and build custom software. CRM-adjacent tools, portals, APIs, and full products — with the same craft we use on software we own.',
    image: '/images/service-software.png',
    featured: false,
    points: [
      'SaaS and internal platforms',
      'APIs, integrations, and data layers',
      'Product design with engineering',
      'Maintenance, scaling, and handoff',
    ],
  },
]

export const values = [
  {
    name: 'Excellence',
    body: 'We ship work we would run ourselves. Craft is not a slogan — it is the standard.',
  },
  {
    name: 'Collaboration',
    body: 'We work as partners, not vendors. Shared goals, clear communication, no theater.',
  },
  {
    name: 'Innovation',
    body: 'We build with the current generation of AI and design for the one after it.',
  },
  {
    name: 'Integrity',
    body: 'Transparent pricing, honest timelines, and systems we can stand behind.',
  },
] as const

export const faqs = [
  {
    q: 'How quickly can you respond to support requests?',
    a: 'We provide 24/7 remote support with typical response times of 2–4 hours for standard requests. Enterprise clients receive emergency support with response times under 1 hour for critical issues.',
  },
  {
    q: 'Do you offer custom software development?',
    a: 'Yes. We build websites, mobile apps, SaaS platforms, and AI systems tailored to your workflows — the same discipline we use on Ticxnova and our other products.',
  },
  {
    q: 'Do you run digital marketing and advertising?',
    a: 'Yes. Digital marketing is a core service: paid ads, SEO, content, social, and conversion tracking. We treat campaigns like products — measured, iterated, and owned.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We work across professional services, finance, education, e-commerce, manufacturing, and growing technology companies. Our stack adapts; the standard of work does not.',
  },
  {
    q: 'Can I try your products before purchasing?',
    a: 'Yes. Contact us for a demo of Ticxnova or a walkthrough of any live product. We will map the trial to your actual use case.',
  },
  {
    q: 'What are your pricing models?',
    a: 'We offer monthly subscriptions, campaign retainers, annual plans, and custom enterprise packages. Reach us for pricing shaped to your scope.',
  },
] as const

export const careerPerks = [
  {
    name: 'Innovation-driven culture',
    body: 'Work on live products, campaigns, and client systems using current AI, cloud, and growth craft.',
  },
  {
    name: 'Continuous learning',
    body: 'Training, certifications, and time to go deep on the technologies and channels we actually ship.',
  },
  {
    name: 'Work-life balance',
    body: 'Flexible hours, remote options, and a team that respects focus.',
  },
  {
    name: 'Collaborative team',
    body: 'Small, senior-minded, and serious about building things that last.',
  },
  {
    name: 'Competitive benefits',
    body: 'Competitive pay, health coverage, retirement plans, and performance bonuses.',
  },
  {
    name: 'Career growth',
    body: 'Clear paths, mentorship, and the chance to own products and accounts — not tickets.',
  },
] as const

export const positions = [
  'Full Stack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Digital Marketing Specialist',
  'Growth / Advertising',
  'Customer Success Manager',
  'Sales Representative',
  'Other',
] as const

export const contactSubjects = [
  'Campaign review',
  'Digital Marketing & Advertising',
  'General Inquiry',
  'IT Infrastructure',
  'Website or Mobile App',
  'AI & Automation',
  'Custom Software',
  'Product Information',
  'Technical Support',
  'Partnership Opportunity',
  'Request Demo',
] as const

export const subjectAliases: Record<string, string> = {
  'campaign-review': 'Campaign review',
  'digital-marketing': 'Digital Marketing & Advertising',
  marketing: 'Digital Marketing & Advertising',
}

export type WorkItem = {
  slug: string
  name: string
  kind: string
  summary: string
  story: string
  image: string
  href: string
  live?: string
}

export const work: WorkItem[] = [
  {
    slug: 'ticxnova',
    name: 'Ticxnova',
    kind: 'Product we own · live',
    summary:
      'AI-native support OS we designed, built, and operate. The flagship of the company — not a case-study mockup.',
    story:
      'Ticxnova is the product we stand behind in production: omnichannel tickets, AI triage, and workflows for teams that cannot wait on a queue. We ship it, host it, and keep it running.',
    image: '/images/product-ticxnova.png',
    href: '/products/ticxnova',
    live: 'https://ticxnova.com',
  },
  {
    slug: 'cedar',
    name: 'Cedar Trade',
    kind: 'Product we own · live',
    summary:
      'A Canadian CDR analytics desk with live quotes, portfolios, and paper trading — a real markets product, not a landing-page demo.',
    story:
      'Cedar Trade is the public face of trading systems we have been building inside JollyBuoy. It is live for operators who need a cinematic desk, not a spreadsheet with a skin.',
    image: '/images/product-cedar.png',
    href: '/products/cedar',
    live: 'https://trade-cedar.com',
  },
  {
    slug: 'ramchess',
    name: 'RAMS Chess',
    kind: 'Product we own · live',
    summary:
      'A chess app for play, analysis, and training. Digital product — not an academy, not a brochure.',
    story:
      'RAMS Chess is a board, AI review, and Think · Plan · Win in one interface. We built it as a product people can actually use, then put it on the public web.',
    image: '/images/product-ramchess.png',
    href: '/products/ramchess',
    live: 'https://ramschess.com',
  },
]

export const packages = [
  {
    name: 'Launch',
    cadence: 'Project',
    featured: false,
    summary: 'Stand up tracking, offer, and a first campaign so the channel is real — not a slide.',
    points: [
      'Site, analytics, and conversion audit',
      'Offer and landing structure',
      'Paid plus organic 30-day plan',
      'Creative and channel setup',
    ],
  },
  {
    name: 'Grow',
    cadence: 'Monthly retainer',
    featured: true,
    summary: 'Ongoing ads, SEO, and creative with reporting you can run a business on.',
    points: [
      'Google, Meta, and LinkedIn media',
      'SEO, content, and landing iteration',
      'Creative production and tests',
      'Weekly notes, monthly numbers',
    ],
  },
  {
    name: 'Media',
    cadence: 'Ads-led',
    featured: false,
    summary: 'You already have the stack. We run the ads and the measurement.',
    points: [
      'Account and pixel hygiene',
      'Campaign build and optimization',
      'Budget pacing and creative rotation',
      'Attribution you can explain',
    ],
  },
] as const

export const marqueeItems = [
  'Digital marketing',
  'Paid advertising',
  'IT infrastructure',
  'Web & mobile apps',
  'AI automation',
  'Custom software',
  'Cloud & Microsoft 365',
  'Cybersecurity',
] as const
