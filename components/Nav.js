"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const guideLinks = [
  { href: "/balcony-gardening", label: "Balcony Gardening" },
  { href: "/indoor-plants", label: "Indoor Plants" },
  { href: "/kitchen-gardening", label: "Kitchen Gardening" },
  { href: "/terrace-gardening", label: "Terrace Gardening" },
  { href: "/plant-encyclopedia", label: "Plant Encyclopedia" },
];

const otherLinks = [
  { href: "/plant-encyclopedia", label: "Plants" },
  { href: "/tools/watering-scheduler", label: "Watering" },
  { href: "/articles", label: "Articles" },
];

const INSTAGRAM_URL = "https://www.instagram.com/the.urbansprout.in/";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GuidesDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex min-h-11 items-center gap-1 text-sm font-medium text-brand-green-dark/80 transition-colors hover:text-brand-green"
      >
        Guides
        <ChevronIcon open={open} />
      </button>
      {open ? (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-brand-sand bg-white p-2 shadow-lg">
          {guideLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-green-dark/80 transition-colors hover:bg-brand-green/5 hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1 border-t border-brand-sand" />
          <Link
            href="/guides"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            See all guides →
          </Link>
        </div>
      ) : null}
    </div>
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

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand bg-bg/90 font-body backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
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

        <nav className="hidden items-center gap-7 sm:flex">
          <GuidesDropdown />
          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center text-sm font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex min-h-11 min-w-11 items-center justify-center text-brand-green-dark/80 transition-colors hover:text-brand-green"
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
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-sand text-ink transition-colors hover:border-primary/40 sm:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav-panel" className="border-t border-brand-sand bg-bg font-body sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            <p className="mt-1 px-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Guides
            </p>
            {guideLinks.map((link) => (
              <Link
                key={`guide-${link.href}`}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-ink transition-colors hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              See all guides →
            </Link>

            <div className="my-2 border-t border-brand-sand" />

            {otherLinks.map((link) => (
              <Link
                key={`other-${link.href}`}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-ink transition-colors hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-brand-green-dark transition-colors hover:bg-brand-green/5"
            >
              <InstagramIcon aria-hidden="true" />
              Instagram
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
