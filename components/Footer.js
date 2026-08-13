import Link from "next/link";

// Dark, inverted footer, matching the design source exactly (the source's
// own footer uses --color-accent-2-900 / --color-neutral-100/200, this is
// the one other genuinely dark surface on the site besides the homepage
// newsletter card). Restructured to the source's real 4-column shape
// (brand, Guides, Tools, Elsewhere) using the site's real links, not the
// mockup's placeholder ones. Privacy Policy is kept in the Elsewhere
// column even though the mockup doesn't show a privacy page at all, since
// it's a real page on this site that still needs to stay reachable.
const GUIDE_LINKS = [
  { href: "/balcony-gardening", label: "Balcony gardening" },
  { href: "/indoor-plants", label: "Indoor plants" },
  { href: "/kitchen-gardening", label: "Kitchen gardening" },
  { href: "/terrace-gardening", label: "Terrace gardening" },
];

const TOOL_LINKS = [
  { href: "/plant-encyclopedia", label: "Plant encyclopedia" },
  { href: "/tools/watering-scheduler", label: "Watering scheduler" },
  { href: "/articles", label: "Articles" },
];

const ELSEWHERE_LINKS = [
  { href: "https://www.instagram.com/the.urbansprout.in/", label: "Instagram", external: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

function FooterLink({ href, label, external }) {
  const className = "inline-flex min-h-11 items-center text-neutral-200/85 transition-colors hover:text-neutral-100";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-accent-2-900 font-body text-neutral-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="14" fill="#2E7D4F" />
              <path d="M14 21V13C14 9.68629 16.6863 7 20 7" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 21V16C14 13.7909 12.2091 12 10 12" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-display text-lg text-neutral-100">Urban Sprout</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-200/70">
            Practical, tested gardening guidance for apartment balconies and small Indian homes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-200/55">Guides</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {GUIDE_LINKS.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-200/55">Tools</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {TOOL_LINKS.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-200/55">Elsewhere</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {ELSEWHERE_LINKS.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-100/15">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-neutral-200/60">
          © {new Date().getFullYear()} Urban Sprout. Built for balconies, kitchens, and window sills
          across India.
        </div>
      </div>
    </footer>
  );
}
