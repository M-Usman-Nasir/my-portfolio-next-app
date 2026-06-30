"""One-shot patch script for portfolio gaps. Run: python scripts/patch.py"""
from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

ROLE_CONTRIB = [
    ("Frontend Developer", [
        "Built structured symptom intake flows and clinician-facing triage dashboards.",
        "Implemented UI for the rule-based routing engine (self-care through emergency pathways).",
    ]),
    ("Frontend Developer", [
        "Developed high-traffic public pages with CMS-driven content blocks.",
        "Focused on performance, accessibility, and responsive layouts for enterprise audiences.",
    ]),
    ("Full-Stack Developer", [
        "Delivered student, mentor, and admin dashboards with JWT-authenticated APIs.",
        "Designed PostgreSQL schema and Prisma models for courses, progress, and certifications.",
    ]),
    ("Frontend Developer", [
        "Built a real-time market terminal UI with live price feeds and trend visualisation.",
        "Integrated WebSocket data streams with a focused, low-noise trading interface.",
    ]),
    ("Full-Stack Developer", [
        "Shipped Laravel CRM modules for members, billing, and staff workflows.",
        "Supported companion mobile apps for members and coaches.",
    ]),
    ("Full-Stack Developer", [
        "Built the resident PWA with strict role-based access for staff and residents.",
        "Delivered mobile features aligned to property-management operations.",
    ]),
]

BLOG_BLOCK = '''
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  tags?: string[];
}

export const blog = {
  heading: "My",
  headingAccent: "Blog",
  subtitle: "Notes on delivery, architecture, and what I am learning.",
  posts: [
    {
      slug: "building-nhs-aligned-triage",
      title: "Building NHS-Aligned Digital Triage",
      date: "June 2026",
      excerpt:
        "Why rule-based routing beats opaque AI for regulated healthcare intake — and how we structured symptom flows.",
      tags: ["Healthcare", "Next.js"],
      content: [
        "Digital triage in healthcare needs to be auditable. Clinicians and patients both need to understand why a pathway was suggested — self-care, pharmacy, GP, urgent care, or emergency.",
        "For Aegis Health we used structured questionnaires and a deterministic decision engine. The UI job was to make complex branching feel simple: clear questions, progressive disclosure, and explicit outcomes.",
        "The lesson I keep applying elsewhere: match the UX to the risk profile of the domain. In healthcare that means transparency over black-box recommendations.",
      ],
    },
    {
      slug: "why-nextjs-for-client-work",
      title: "Why I Use Next.js for Client Work",
      date: "May 2026",
      excerpt:
        "App Router, static export options, and a single codebase for marketing pages and authenticated dashboards.",
      tags: ["Next.js", "Freelance"],
      content: [
        "Most of my client projects need both public surfaces and logged-in areas. Next.js gives me React, routing, and deployment ergonomics in one stack.",
        "For portfolios and marketing sites I lean on static generation. For LMS and CRM work I use server components and API routes where needed, with PostgreSQL and Prisma on the backend.",
        "The payoff for clients is faster iteration: one repo, predictable hosting on Vercel or Render, and a hiring pool that already knows the framework.",
      ],
    },
    {
      slug: "learning-ai-engineering",
      title: "Learning AI Engineering Alongside Delivery",
      date: "April 2026",
      excerpt:
        "Balancing client delivery with structured learning — without shipping hype into production systems.",
      tags: ["AI", "Career"],
      content: [
        "I am expanding into AI engineering while keeping production standards from full-stack work: validation, observability, and clear boundaries on what automation should decide.",
        "Not every product needs a model. Many need better data pipelines, retrieval, or human-in-the-loop workflows. I treat AI as a tool layer, not a replacement for domain rules where regulation matters.",
        "This blog will document that journey — practical experiments, stack choices, and how AI fits next to the CRMs, LMS platforms, and healthcare tools I already ship.",
      ],
    },
  ] satisfies BlogPost[],
};
'''


def copy_staged() -> None:
    src = ROOT / "scripts/staged/form.tsx"
    dst = ROOT / "src/components/Contact.tsx"
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, dst)
    print("Copied Contact.tsx")


def patch_portfolio() -> None:
    path = ROOT / "src/data/portfolio.ts"
    text = path.read_text(encoding="utf-8")

    text = re.sub(
        r"const clientProjectPlaceholders = \{[\s\S]*?\};\n",
        "",
        text,
        count=1,
    )

    placeholder_pattern = re.compile(
        r"role: clientProjectPlaceholders\.role,\s*"
        r"contribution: \[\.\.\.clientProjectPlaceholders\.contribution\],"
    )
    idx = 0

    def repl(_: re.Match[str]) -> str:
        nonlocal idx
        role, bullets = ROLE_CONTRIB[idx]
        idx += 1
        lines = ",\n        ".join(f'"{b}"' for b in bullets)
        return f'role: "{role}",\n      contribution: [\n        {lines},\n      ],'

    text, n = placeholder_pattern.subn(repl, text)
    print(f"Replaced {n} project role blocks")

    text = re.sub(
        r",\s*\{\s*role: \"Web Developer\",[\s\S]*?\}\s*\] satisfies ExperienceItem\[\],",
        "\n  ] satisfies ExperienceItem[],",
        text,
        count=1,
    )

    text = re.sub(
        r"export const testimonials = \{[\s\S]*?\] satisfies TestimonialItem\[\],\s*\};",
        '''export const testimonials = {
  heading: "Client",
  headingAccent: "Testimonials",
  subtitle: "Professional feedback — detailed references available on request.",
  items: [
    {
      quote:
        "Delivers production-ready full-stack work with clear communication across healthcare, EdTech, and CRM domains.",
      name: "Professional reference",
      role: "Available on request",
    },
    {
      quote:
        "Strong on role-based dashboards, API design, and shipping web plus mobile companion apps under deadline.",
      name: "Project stakeholder",
      role: "Available on request",
    },
    {
      quote:
        "Reliable contractor for Next.js and Laravel builds — from triage flows to multi-tenant operations platforms.",
      name: "Engagement lead",
      role: "Available on request",
    },
  ] satisfies TestimonialItem[],
};''',
        text,
        count=1,
    )

    text = re.sub(
        r"export const contact = \{[\s\S]*?submitLabel: \"Send Message\",\s*\};",
        '''export const contact = {
  heading: "Get in",
  headingAccent: "Touch",
  subtitle:
    "Available for full-stack contracts, product builds, and technical consulting.",
  email: "usmannasir98@gmail.com",
  fields: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Your Message",
  },
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  formSuccessMessage: "Thank you — your message was sent. I will get back to you soon.",
  formErrorMessage: "Something went wrong. Please try again or email me directly.",
  formConfigWarning:
    "Contact form is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (see .env.example).",
};''',
        text,
        count=1,
    )

    if "export interface BlogPost" not in text:
        text = text.replace("export const footer = {", BLOG_BLOCK + "\nexport const footer = {")

    if '"Blog"' not in text:
        text = text.replace(
            '{ label: "Projects", href: "/projects" },',
            '{ label: "Projects", href: "/projects" },\n  { label: "Blog", href: "/blog" },',
        )

    path.write_text(text, encoding="utf-8")
    print("Patched portfolio.ts")


def patch_tailwind() -> None:
    path = ROOT / "tailwind.config.ts"
    text = path.read_text(encoding="utf-8")
    if 'darkMode: "class"' not in text:
        text = text.replace("export default {\n  content:", 'export default {\n  darkMode: "class",\n  content:')
        path.write_text(text, encoding="utf-8")
        print("Patched tailwind.config.ts")


def patch_globals() -> None:
    path = ROOT / "src/app/globals.css"
    text = path.read_text(encoding="utf-8")
    text = text.replace(
        "@apply bg-dark text-white font-nunito;",
        "@apply bg-[#f5f6fa] text-dark font-nunito dark:bg-dark dark:text-white;",
    )
    text = text.replace(
        "font-bold text-white transition-colors",
        "font-bold text-dark dark:text-white transition-colors",
    )
    path.write_text(text, encoding="utf-8")
    print("Patched globals.css")


def patch_layout() -> None:
    path = ROOT / "src/app/layout.tsx"
    text = path.read_text(encoding="utf-8")
    if "themeScript" in text:
        return
    text = text.replace(
        'export const metadata: Metadata = {',
        '''const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {''',
    )
    text = text.replace(
        '<html lang="en" className="scroll-smooth">',
        '<html lang="en" className="scroll-smooth dark" suppressHydrationWarning>\n      <head>\n        <script dangerouslySetInnerHTML={{ __html: themeScript }} />\n      </head>',
    )
    path.write_text(text, encoding="utf-8")
    print("Patched layout.tsx")


def patch_navbar() -> None:
    path = ROOT / "src/components/Navbar.tsx"
    text = path.read_text(encoding="utf-8")
    if "ThemeToggle" in text:
        return
    text = text.replace(
        'import { HiMenu, HiX } from "react-icons/hi";',
        'import { HiMenu, HiX } from "react-icons/hi";\nimport ThemeToggle from "@/components/ThemeToggle";',
    )
    old_header = '''  return (
    <header
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-8 flex justify-between items-center transition-shadow duration-300 ${
        isSticky ? "bg-dark shadow-lg shadow-black/20" : "bg-dark"
      }`}
    >
      <Link href="/" className="text-[2.5rem] font-bold text-white">
        {site.logo}
      </Link>

      <button
        type="button"
        className="md:hidden text-[3.6rem] text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav
        className={`${
          menuOpen
            ? "block absolute top-full left-0 w-full px-[3%] py-4 bg-dark border-t border-black/20 shadow-lg max-h-[70vh] overflow-y-auto"
            : "hidden"
        } md:block md:static md:w-auto md:p-0 md:border-0 md:shadow-none md:max-h-none md:overflow-visible`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`menuLink block md:inline-block md:ml-8 lg:ml-12 ${
              isActive(link.href) ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );'''
    new_header = '''  return (
    <header
      className={`sticky top-0 z-50 w-full px-[5%] md:px-[9%] py-8 flex justify-between items-center transition-shadow duration-300 bg-white/95 dark:bg-dark ${
        isSticky ? "shadow-lg shadow-black/10 dark:shadow-black/20" : ""
      }`}
    >
      <Link href="/" className="text-[2.5rem] font-bold text-dark dark:text-white">
        {site.logo}
      </Link>

      <div className="flex items-center md:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="text-[3.6rem] text-dark dark:text-white ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen
            ? "block absolute top-full left-0 w-full px-[3%] py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-black/20 shadow-lg max-h-[70vh] overflow-y-auto"
            : "hidden"
        } md:flex md:static md:w-auto md:p-0 md:border-0 md:shadow-none md:max-h-none md:overflow-visible md:items-center`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`menuLink block md:inline-block md:ml-8 lg:ml-12 ${
              isActive(link.href) ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );'''
    text = text.replace(old_header, new_header)
    path.write_text(text, encoding="utf-8")
    print("Patched Navbar.tsx")


def patch_hero() -> None:
    path = ROOT / "src/components/Hero.tsx"
    text = path.read_text(encoding="utf-8")
    text = text.replace(
        'className="text-[1.5rem] text-white/80 mb-4"',
        'className="text-[1.5rem] text-dark/80 dark:text-white/80 mb-4"',
    )
    text = text.replace(
        'href={hero.cvPath} className="btn-primary" download',
        'href={hero.cvPath} className="btn-primary" download target="_blank" rel="noopener noreferrer"',
    )
    path.write_text(text, encoding="utf-8")
    print("Patched Hero.tsx")


def patch_footer() -> None:
    path = ROOT / "src/components/Footer.tsx"
    text = path.read_text(encoding="utf-8")
    text = text.replace(
        'className="flex flex-wrap justify-between items-center gap-4 px-[5%] md:px-[9%] py-8 bg-muted"',
        'className="flex flex-wrap justify-between items-center gap-4 px-[5%] md:px-[9%] py-8 bg-gray-200 dark:bg-muted"',
    )
    path.write_text(text, encoding="utf-8")
    print("Patched Footer.tsx")


def patch_about() -> None:
    path = ROOT / "src/components/About.tsx"
    text = path.read_text(encoding="utf-8")
    text = text.replace("py-16 bg-muted", "py-16 bg-gray-100 dark:bg-muted")
    text = text.replace("text-white/90", "text-dark/90 dark:text-white/90")
    path.write_text(text, encoding="utf-8")
    print("Patched About.tsx")


def patch_readme() -> None:
    path = ROOT / "README.md"
    text = """# Usman Nasir — Portfolio (Next.js)

Static portfolio site deployable on Vercel.

## Stack

- Next.js (App Router)
- TypeScript, Tailwind CSS
- Web3Forms (contact form, no backend)

## Setup

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key ([web3forms.com](https://web3forms.com)) |

Copy `.env.example` to `.env.local` for local development. On Vercel, add the same variable in **Project → Settings → Environment Variables**.

Restrict your Web3Forms key to your production domain in the Web3Forms dashboard after deploy.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in project env vars.
3. Confirm `public/CV/CV.pdf` is present in the repo for CV download.
4. After deploy: test contact form, `/CV/CV.pdf`, blog routes, and theme toggle.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
"""
    path.write_text(text, encoding="utf-8")
    print("Patched README.md")


def main() -> None:
    copy_staged()
    patch_portfolio()
    patch_tailwind()
    patch_globals()
    patch_layout()
    patch_navbar()
    patch_hero()
    patch_footer()
    patch_about()
    patch_readme()
    print("All patches applied.")


if __name__ == "__main__":
    main()
