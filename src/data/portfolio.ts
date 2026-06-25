export const site = {
  name: "Usman Nasir",
  logo: "UsmanNasir.dev",
  title: "Personal Portfolio | Usman Nasir",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Salam, I am",
  name: "Usman Nasir",
  rolePrefix: "A Passionate",
  typedStrings: [
    "Full Stack Developer",
    "Web Designer",
    "Aalim-E-Deen",
    "Teacher",
  ],
  bio: "Crafting intuitive, responsive, and performance-driven applications for the web and beyond.",
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
  subtitle: "Full-Stack Developer | Creative Thinker | Problem Solver",
  description:
    "I specialize in creating seamless, scalable, and secure web experiences. My passion lies in transforming challenges into elegant solutions with clean, maintainable code.",
  image: "/images/aboutpic1.png",
  imageAlt: "Usman coding at desk",
  ctaLabel: "More About Me",
  ctaHref: "#about",
};

export const services = {
  heading: "My",
  headingAccent: "Services",
  items: [
    {
      icon: "code",
      title: "Web Development",
      description:
        "From landing pages to full-stack applications, I build digital products with performance and scalability in mind.",
    },
    {
      icon: "palette",
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces that create seamless interactions and delightful user experiences.",
    },
    {
      icon: "android",
      title: "App Development",
      description:
        "Developing responsive applications to meet today's user demands across platforms.",
    },
  ],
};

export type ProjectStatus = "live" | "demo-on-request" | "coming-soon";

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  url?: string;
  status: ProjectStatus;
  stack: string[];
  scope?: string;
  ctaLabel?: string;
}

export const projects = {
  heading: "My",
  headingAccent: "Projects",
};

export const clientProjects = {
  heading: "Featured",
  headingAccent: "Client Work",
  items: [
    {
      title: "Aegis Health — Digital Triage",
      description:
        "NHS-aligned digital triage with structured symptom questionnaires and a deterministic, rule-based decision engine. Patients are guided to self-care, pharmacy, GP, urgent care, or emergency (999) with auditable logic.",
      image: "/images/aegis-health.png",
      url: "https://nhs-triage-8i7r.vercel.app/",
      status: "live" as ProjectStatus,
      stack: ["Next.js", "Rule Engine", "Healthcare"],
      scope: "Web + 1 patient mobile app",
    },
    {
      title: "Aldar — Real Estate Website",
      description:
        "Enterprise real estate public website for Abu Dhabi residents — a high-traffic, content-rich property platform serving buyers, renters, and investors.",
      image: "/images/al-daar.png",
      url: "https://www.aldar.com/en",
      status: "live" as ProjectStatus,
      stack: ["Enterprise Web", "Real Estate"],
      scope: "Public enterprise website",
    },
    {
      title: "APEX AI Systems — LMS",
      description:
        "Full-stack Learning Management System with student, mentor, and admin flows. PostgreSQL APIs power expert-led courses and industry-recognized AI certifications.",
      image: "/images/apex-ai.png",
      url: "https://mentors-d6g6e8m3x-usmans-projects-11ea568f.vercel.app/",
      status: "demo-on-request" as ProjectStatus,
      stack: ["Next.js", "PostgreSQL", "Prisma", "JWT"],
      scope: "Full-stack LMS",
    },
    {
      title: "Crypto Market Hub",
      description:
        "The Next Gen Crypto Terminal — institutional-grade market intelligence with real prices, live trends, and a futuristic interface built for clarity.",
      image: "/images/crypto.png",
      url: "https://crypto-market-hub.onrender.com/",
      status: "live" as ProjectStatus,
      stack: ["React", "FinTech", "Live Data"],
      scope: "Real-time market terminal",
    },
    {
      title: "Fitness Suite CRM",
      description:
        "Comprehensive fitness business management: members, workouts, nutrition, appointments, challenges, and business analytics for gym operations.",
      image: "/images/fitness-crm.png",
      url: "https://phpstack-1542257-6177868.cloudwaysapps.com/login",
      status: "demo-on-request" as ProjectStatus,
      stack: ["PHP", "CRM", "Mobile"],
      scope: "Web + 2 mobile apps",
    },
    {
      title: "Homeland Union",
      description:
        "Progressive Web Application for apartment and residential complex management with role-based access control for residents and staff.",
      image: "/images/homeland-union.png",
      url: "https://myunionoffice.co/login",
      status: "demo-on-request" as ProjectStatus,
      stack: ["PWA", "RBAC", "Property Mgmt"],
      scope: "PWA + 1 mobile app",
    },
  ] satisfies ProjectItem[],
};

export const personalProjects = {
  heading: "Personal",
  headingAccent: "Projects",
  items: [
    {
      title: "X-Momentum — Fitness Suite CRM",
      description:
        "A comprehensive fitness business management system for gym operations — member management, workout planning, nutrition tracking, appointments, challenges, and analytics.",
      status: "coming-soon" as ProjectStatus,
      stack: ["Full-Stack", "CRM", "Mobile"],
      scope: "Web + 2 mobile apps (member & coach)",
    },
    {
      title: "Student Management System (SMS)",
      description:
        "Monorepo blueprint for administrative tasks, record-keeping, scheduling, and communications for schools, colleges, universities, and Madaris.",
      status: "coming-soon" as ProjectStatus,
      stack: ["Monorepo", "Education", "Admin"],
      scope: "Multi-institution platform",
    },
  ] satisfies ProjectItem[],
};

export const learningProjects = {
  heading: "Learning",
  headingAccent: "Projects",
  subtitle: "Early JavaScript projects",
  items: [
    {
      title: "BMI Calculator",
      description: "Helps assess body weight health relative to height.",
      image: "/images/1.jpg",
      url: "https://m-usman-nasir.github.io/BMI_Calculator-JS_Project/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Calculator",
      description:
        "A device for mathematical processes such as adding, subtracting, dividing and multiplying numbers.",
      image: "/images/2.png",
      url: "https://m-usman-nasir.github.io/Calculator-JS_Project/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Easy Quiz App",
      description:
        "Allows users to answer a series of questions on various topics.",
      image: "/images/3.png",
      url: "https://m-usman-nasir.github.io/Easy_Quiz_App-JS_Project/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Random Password Generator",
      description:
        "Creates strong, unique passwords by combining random letters, numbers, and special characters.",
      image: "/images/4.png",
      url: "https://m-usman-nasir.github.io/Random_Password_Generator-/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "To-Do List App",
      description:
        "Helps users organize and manage tasks by creating and tracking to-do lists.",
      image: "/images/5.png",
      url: "https://m-usman-nasir.github.io/ToDo_List_App-JS_Project/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Analog Clock",
      description:
        "A clock face with hour and minute hands rotating clockwise to show the time.",
      image: "/images/6.png",
      url: "https://m-usman-nasir.github.io/Analog_Local_Clock_App-JS_Project/",
      status: "live" as ProjectStatus,
      stack: ["JavaScript", "HTML", "CSS"],
    },
  ] satisfies ProjectItem[],
};
export const contact = {
  heading: "Get in",
  headingAccent: "Touch",
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
  copyright: "© 2025 Usman Nasir. All rights reserved.",
  backToTopHref: "#home",
};
