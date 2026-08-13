"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icon paths are the real design source's own icon set
// (_ds/organic-.../support.js IC object), used verbatim, not redrawn.
function NavIcon({ name }) {
  const paths = {
    book: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
    drop: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />,
    sprout: (
      <>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

// Flat, matching the design source's actual nav item set (Guides / Plants /
// Watering / Articles), no dropdown. activePrefixes decides the pill
// active-state highlight: Guides lights up for the guides index, every
// pillar hub, and every article, since that is everything reached through
// it, matching the source's own also: ["balcony", "article"] behavior.
const NAV_LINKS = [
  {
    href: "/guides",
    label: "Guides",
    icon: "book",
    activePrefixes: ["/guides", "/balcony-gardening", "/indoor-plants", "/kitchen-gardening", "/terrace-gardening"],
  },
  { href: "/plant-encyclopedia", label: "Plants", icon: "leaf", activePrefixes: ["/plant-encyclopedia"] },
  { href: "/tools/watering-scheduler", label: "Watering", icon: "drop", activePrefixes: ["/tools/watering-scheduler"] },
  { href: "/articles", label: "Articles", icon: "sprout", activePrefixes: ["/articles"] },
];

function isActive(pathname, prefixes) {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M5 5L15 15M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M3 6H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 14H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/the.urbansprout.in/";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/90 font-body backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* Brand icon: never changes, in any phase. */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
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
          <span className="font-display text-xl text-ink">Urban Sprout</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.activePrefixes);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors ${
                  active ? "bg-accent-2-200 text-accent-2-900" : "text-ink hover:bg-surface"
                }`}
              >
                <NavIcon name={link.icon} />
                {link.label}
              </Link>
            );
          })}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-surface hover:text-ink"
          >
            <InstagramIcon />
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#newsletter"
            className="flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:brightness-90"
          >
            Weekly tip
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-primary/40 sm:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav-panel" className="border-t border-ink/10 bg-bg font-body sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.activePrefixes);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${
                    active ? "bg-accent-2-200 text-accent-2-900" : "text-ink hover:bg-primary/5"
                  }`}
                >
                  <NavIcon name={link.icon} />
                  {link.label}
                </Link>
              );
            })}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-ink transition-colors hover:bg-primary/5"
            >
              <InstagramIcon />
              Instagram
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
