import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/balcony-gardening", label: "Balcony Gardening" },
  { href: "/terrace-gardening", label: "Terrace Gardening" },
  { href: "/plant-encyclopedia", label: "Plant Encyclopedia" },
  { href: "/tools/watering-scheduler", label: "Watering Scheduler" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="14" fill="#2E7D4F" />
            <path
              d="M14 21V13C14 9.68629 16.6863 7 20 7"
              stroke="#FBF8F1"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 21V16C14 13.7909 12.2091 12 10 12"
              stroke="#FBF8F1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-brand-green-dark">
            Urban Sprout
          </span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-green-dark/80 transition-colors hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#newsletter"
          className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
        >
          Get weekly tips
        </Link>
      </div>
    </header>
  );
}
