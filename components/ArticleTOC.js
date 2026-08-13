"use client";

import { useEffect, useState } from "react";

function slugify(text) {
  return (text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const MIN_HEADINGS = 3;

// Reads h2 headings directly from the rendered article body in the DOM
// rather than from a prop, so none of the 31 existing article page.js
// files need editing to wire this up. Assigns each h2 an id if it does
// not already have one, so click-to-scroll and the active-section
// highlight both have something stable to target.
export default function ArticleTOC() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const container = document.querySelector('[data-article-body="true"]');
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll("h2"));
    const used = new Set();
    const items = nodes.map((node) => {
      let id = node.id;
      if (!id) {
        const base = slugify(node.textContent) || "section";
        let candidate = base;
        let i = 2;
        while (used.has(candidate)) {
          candidate = `${base}-${i}`;
          i += 1;
        }
        id = candidate;
        node.id = id;
      }
      used.add(id);
      return { id, text: node.textContent };
    });

    // This is a genuine case for setState-in-effect, not the pattern the
    // lint rule usually catches. The heading list only exists once the
    // article body has painted to the DOM, it cannot be computed during
    // render or from a lazy useState initializer without the server and
    // first client render disagreeing (server has no DOM, so it would
    // render nothing, while a lazy initializer reading the DOM on the
    // client would find real headings), which is a hydration mismatch,
    // not a lint nitpick. Rendering nothing until this effect runs, then
    // updating, is the correct fix for that, not a bug to avoid.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(items);

    if (items.length < MIN_HEADINGS) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (headings.length < MIN_HEADINGS) return null;

  function handleClick(event, id) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">On this page</p>
      <ul className="mt-3 space-y-1 border-l border-brand-sand">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(event) => handleClick(event, heading.id)}
              className={`-ml-px flex min-h-11 items-center border-l-2 pl-3 text-sm leading-tight transition-colors ${
                activeId === heading.id
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-ink/60 hover:text-ink"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
