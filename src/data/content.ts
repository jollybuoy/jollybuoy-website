export const company = {
  name: 'JollyBuoy Tech',
  legal: 'Jollybuoy Technology Services Inc.',
  tagline: 'Ideas · Code · Impact',
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
  linkedin: 'https://www.linkedin.com/company/jollybuoy-tech',
  linkedinHandle: '@jollybuoy-tech',
} as const

export const navLinks = [
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
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
    kicker: 'Academy · AI Training',
    tagline: 'Think · Plan · Win.',
    summary:
      'An AI chess academy that trains the next generation of players with structured thinking, not just puzzles.',
    description:
      'RAMS Chess is our chess academy product. It combines coaching culture with modern software — board intelligence, training paths, and a brand built around Think · Plan · Win. It is how we apply AI to mastery: slow thinking, fast feedback, lasting skill.',
    url: 'https://ramschess.com',
    image: '/images/product-ramchess.png',
    featured: true,
    status: 'Live',
    highlights: [
      'Academy-grade training',
      'AI-assisted analysis',
      'Structured learning paths',
      'Think · Plan · Win culture',
    ],
    capabilities: [
      'Interactive board training',
      'Progress and ranking',
      'Coaching-first experience',
      'Modern dark academy UI',
    ],
  },
  {
    slug: 'bizsuite',
    name: 'JollyBuoy BizSuite',
    kicker: 'Studio · Operations',
    tagline: 'Modular software for running the business.',
    summary:
      'A studio suite of connected business modules — CRM, operations, and internal tooling we use and extend for clients.',
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

export const services = [
  {
    slug: 'cloud',
    name: 'Cloud architecture',
    summary:
      'AWS, Azure, and Google Cloud designed for reliability, cost, and the next five years of growth.',
    image: '/images/services-cloud.png',
    points: [
      'Architecture and migration',
      'Security and compliance baselines',
      'Cost optimization',
      'Production hardening',
    ],
  },
  {
    slug: 'microsoft',
    name: 'Email & Microsoft 365',
    summary:
      'Enterprise-grade mail, identity, and collaboration — migrated, secured, and supported.',
    image: '/images/services-support.png',
    points: [
      'Mailbox migration',
      'Full Microsoft 365 deployment',
      'Security and compliance',
      'User training',
    ],
  },
  {
    slug: 'support',
    name: '24/7 intelligent support',
    summary:
      'Round-the-clock monitoring and human experts, with AI in the loop so issues are caught early.',
    image: '/images/services-support.png',
    points: [
      'Continuous monitoring',
      'Remote diagnostics',
      'Preventive maintenance',
      'Emergency escalation',
    ],
  },
  {
    slug: 'security',
    name: 'Cybersecurity',
    summary:
      'Layered defense for modern stacks — assessments, endpoints, awareness, and compliance.',
    image: '/images/services-security.png',
    points: [
      'Vulnerability assessments',
      'Firewall and endpoint protection',
      'Security awareness training',
      'Regulatory guidance',
    ],
  },
  {
    slug: 'data',
    name: 'Data protection & recovery',
    summary:
      'Automated backups and disaster recovery so critical systems can return in hours, not weeks.',
    image: '/images/services-cloud.png',
    points: [
      'Automated backup systems',
      'Disaster recovery planning',
      'Rapid restoration',
      'Compliance reporting',
    ],
  },
  {
    slug: 'consulting',
    name: 'Strategic IT & AI consulting',
    summary:
      'Roadmaps that mix infrastructure, custom software, and AI — so technology actually moves the business.',
    image: '/images/about-studio.png',
    points: [
      'Technology assessments',
      'Digital transformation plans',
      'Vendor evaluation',
      'Custom AI and software builds',
    ],
  },
] as const

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
    a: 'Yes. We build web applications, mobile apps, SaaS platforms, and AI systems tailored to your workflows — the same discipline we use on Ticxnova and our other products.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We work across professional services, finance, education, e-commerce, manufacturing, and growing technology companies. Our stack adapts; the standard of engineering does not.',
  },
  {
    q: 'Can I try your products before purchasing?',
    a: 'Yes. Contact us for a demo of Ticxnova or a walkthrough of any live product. We will map the trial to your actual use case.',
  },
  {
    q: 'Do you provide training for your software?',
    a: 'Yes. Onboarding sessions, documentation, and ongoing support are part of how we ship — not an add-on afterthought.',
  },
  {
    q: 'What are your pricing models?',
    a: 'We offer monthly subscriptions, annual plans, and custom enterprise packages. Reach us for pricing shaped to your scope.',
  },
] as const

export const careerPerks = [
  {
    name: 'Innovation-driven culture',
    body: 'Work on live products and client systems using current AI, cloud, and interface craft.',
  },
  {
    name: 'Continuous learning',
    body: 'Training, certifications, and time to go deep on the technologies we actually ship.',
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
    body: 'Clear paths, mentorship, and the chance to own products — not tickets.',
  },
] as const

export const positions = [
  'Full Stack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Customer Success Manager',
  'Sales Representative',
  'Marketing Specialist',
  'Other',
] as const

export const contactSubjects = [
  'General Inquiry',
  'Product Information',
  'IT Services',
  'Technical Support',
  'Partnership Opportunity',
  'Request Demo',
] as const
