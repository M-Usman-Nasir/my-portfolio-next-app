export const site = {
  name: "Usman Nasir",
  logo: "UsmanNasir.dev",
  title: "Usman Nasir | Full-Stack Developer",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Solve", href: "#services" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Salam, I am",
  name: "Usman Nasir",
  rolePrefix: "I'm a",
  typedStrings: [
    "Full Stack Developer",
    "Web Application Architect",
    "CRM & LMS Builder",
  ],
  bio: "Full-Stack Developer building production web and mobile systems for healthcare, education, fitness, and property management.",
  tagline:
    "I design backends, role-based dashboards, and mobile companions — from NHS-aligned triage to multi-tenant CRMs.",
  cvPath: "/CV/CV.pdf",
  image: "/images/profiledp1.png",
  imageAlt: "Usman Nasir profile photo",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/usman.nasir.1992",
    icon: "facebook",
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@usman.nasir.1992",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/usman.nasir.1992/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/usmannasir92/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/M-Usman-Nasir",
    icon: "github",
  },
];

export const about = {
  heading: "About",
  headingAccent: "Me",
  subtitle:
    "Full-Stack Developer shipping production systems for clients across the UK, UAE, and beyond.",
  description:
    "I build full-stack web applications, CRMs, learning platforms, PWAs, and mobile companions — systems that handle real users, real data, and real business operations. I focus on clean architecture, role-based access control, and scalable APIs that teams can maintain long-term. My client work spans Healthcare, EdTech, FinTech, Fitness, and PropTech.",
  highlights: [
    "6+ production systems delivered for clients across multiple industries",
    "Web + mobile delivery — dashboards, APIs, and companion apps",
    "Role-based platforms built for healthcare, education, fitness, and property",
  ],
  image: "/images/aboutpic1.png",
  imageAlt: "Usman coding at desk",
  ctaLabel: "View My Work",
  ctaHref: "#portfolio",
};

export const whatISolve = {
  heading: "What I",
  headingAccent: "Solve",
  items: [
    {
      icon: "healthcare",
      title: "Healthcare Systems",
      problem:
        "Patient triage, auditable routing, and regulated workflows without unreliable AI diagnosis.",
      relatedProject: "Aegis Health — Digital Triage",
    },
    {
      icon: "enterprise",
      title: "Enterprise Web Platforms",
      problem:
        "High-traffic public websites that serve large audiences with rich content and performance.",
      relatedProject: "Aldar — Real Estate Website",
    },
    {
      icon: "edtech",
      title: "EdTech & Multi-Role Apps",
      problem:
        "Learning platforms with separate student, mentor, and admin flows backed by real databases.",
      relatedProject: "APEX AI Systems — LMS",
    },
    {
      icon: "crm",
      title: "Operations CRM + Mobile",
      problem:
        "End-to-end business management replacing spreadsheets — web CRM plus member and staff apps.",
      relatedProject: "Fitness Suite CRM",
    },
    {
      icon: "property",
      title: "Property & RBAC Platforms",
      problem:
        "Apartment and residential management with role-based access for residents and staff.",
      relatedProject: "Homeland Union",
    },
  ],
};

export const techStack = {
  heading: "Tech",
  headingAccent: "Stack",
  intro: "Technologies I use to deliver production systems.",
  categories: [
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "PHP/Laravel", "PostgreSQL", "Prisma", "REST APIs", "JWT"],
    },
    {
      label: "Mobile & PWA",
      items: ["React Native", "PWA", "Responsive Web"],
    },
    {
      label: "Domains",
      items: ["Healthcare", "EdTech", "FinTech", "CRM", "PropTech"],
    },
  ],
};

export type ProjectStatus = "live" | "coming-soon";

export interface ProjectItem {
  title: string;
  description: string;
  problem?: string;
  outcome?: string;
  domain?: string;
  image?: string;
  url?: string;
  status: ProjectStatus;
  stack: string[];
  scope?: string;
  ctaLabel?: string;
}

export const projects = {
  heading: "Proof of",
  headingAccent: "Delivery",
};

export const clientProjects = {
  heading: "Production systems",
  headingAccent: "built for clients",
  items: [
    {
      title: "Aegis Health — Digital Triage",
      description:
        "NHS-aligned digital triage with structured symptom questionnaires and a deterministic, rule-based decision engine.",
      problem:
        "Clinics needed NHS-aligned triage without unreliable AI diagnosis.",
      outcome:
        "Shipped rule-based routing to self-care, pharmacy, GP, urgent, or 999 — web + patient app.",
      domain: "Healthcare",
      image: "/images/aegis-health.png",
      url: "https://nhs-triage-8i7r.vercel.app/",
      status: "live" as ProjectStatus,
      stack: ["Next.js", "TypeScript", "Mobile"],
      scope: "Web + 1 patient mobile app",
    },
    {
      title: "Aldar — Real Estate Website",
      description:
        "Enterprise real estate public website for Abu Dhabi residents.",
      problem:
        "A major developer needed a high-traffic public platform for buyers, renters, and investors.",
      outcome:
        "Delivered a content-rich enterprise website serving the Abu Dhabi property market.",
      domain: "Enterprise",
      image: "/images/al-daar.png",
      url: "https://www.aldar.com/en",
      status: "live" as ProjectStatus,
      stack: ["Enterprise Web", "CMS", "Performance"],
      scope: "Public enterprise website",
    },
    {
      title: "APEX AI Systems — LMS",
      description:
        "Full-stack Learning Management System with student, mentor, and admin flows.",
      problem:
        "An AI education company needed a multi-role LMS with course delivery and certifications.",
      outcome:
        "Built Next.js + PostgreSQL platform with JWT auth and role-separated dashboards.",
      domain: "EdTech",
      image: "/images/apex-ai.png",
      url: "https://mentors-d6g6e8m3x-usmans-projects-11ea568f.vercel.app/",
      status: "live" as ProjectStatus,
      stack: ["Next.js", "PostgreSQL", "Prisma", "JWT"],
      scope: "Full-stack LMS",
    },
    {
      title: "Crypto Market Hub",
      description:
        "Real-time crypto market terminal with institutional-grade intelligence.",
      problem:
        "Traders needed live market data without cluttered, noisy interfaces.",
      outcome:
        "Shipped a real-time terminal with live prices, trends, and a focused futuristic UI.",
      domain: "FinTech",
      image: "/images/crypto.png",
      url: "https://crypto-market-hub.onrender.com/",
      status: "live" as ProjectStatus,
      stack: ["React", "REST APIs", "WebSockets"],
      scope: "Real-time market terminal",
    },
    {
      title: "Fitness Suite CRM",
      description:
        "Comprehensive gym business management from members to analytics.",
      problem:
        "Gym owners needed one system to replace spreadsheets and disconnected tools.",
      outcome:
        "Delivered web CRM plus member and coach mobile apps for full operations.",
      domain: "CRM",
      image: "/images/fitness-crm.png",
      url: "https://phpstack-1542257-6177868.cloudwaysapps.com/login",
      status: "live" as ProjectStatus,
      stack: ["PHP", "Laravel", "MySQL", "Mobile"],
      scope: "Web + 2 mobile apps",
    },
    {
      title: "Homeland Union",
      description:
        "PWA for apartment and residential complex management.",
      problem:
        "Property managers needed resident portals with strict role-based access.",
      outcome:
        "Built PWA with RBAC plus a mobile app with role-specific features.",
      domain: "PropTech",
      image: "/images/homeland-union.png",
      url: "https://myunionoffice.co/login",
      status: "live" as ProjectStatus,
      stack: ["PWA", "RBAC", "React", "Mobile"],
      scope: "PWA + 1 mobile app",
    },
  ] satisfies ProjectItem[],
};

export const personalProjects = {
  heading: "In",
  headingAccent: "development",
  subtitle: "Products in development — separate from client work",
  items: [
    {
      title: "X-Momentum — Fitness Suite CRM",
      description:
        "My own fitness business management product — member management, workouts, nutrition, appointments, and analytics.",
      problem:
        "Building a proprietary fitness CRM as a standalone product offering.",
      outcome: "Web + member and coach mobile apps — launching soon.",
      domain: "CRM",
      status: "coming-soon" as ProjectStatus,
      stack: ["Next.js", "PostgreSQL", "Mobile"],
      scope: "Web + 2 mobile apps (member & coach)",
    },
    {
      title: "Student Management System (SMS)",
      description:
        "Monorepo blueprint for schools, colleges, universities, and Madaris.",
      problem:
        "Educational institutions need unified admin, records, and communications.",
      outcome: "Multi-institution platform blueprint — in progress.",
      domain: "EdTech",
      status: "coming-soon" as ProjectStatus,
      stack: ["Monorepo", "Node.js", "PostgreSQL"],
      scope: "Multi-institution platform",
    },
  ] satisfies ProjectItem[],
};

export const contact = {
  heading: "Get in",
  headingAccent: "Touch",
  subtitle:
    "Available for full-stack contracts, product builds, and technical consulting.",
  fields: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Your Message",
  },
  submitLabel: "Send Message",
};

export const footer = {
  copyright: "© 2026 Usman Nasir. All rights reserved.",
  backToTopHref: "#home",
  earlyProjectsUrl: "https://github.com/M-Usman-Nasir",
  earlyProjectsLabel: "Early JavaScript projects on GitHub",
};
