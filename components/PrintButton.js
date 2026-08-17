"use client";

// Small Client Component island, not a conversion of the (server)
// app/plant-encyclopedia/[slug]/page.js: window.print() is the only bit
// of this page that needs the client, so only this button is "use client".
function PrinterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" />
      <rect x="5" y="9" width="14" height="7" rx="1.5" />
      <path d="M8 16v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

// print:hidden: the button itself has no business appearing on the
// printed page/PDF it produces. Same secondary-button style as the
// homepage's "Look up a plant" button (app/page.js), the established
// outline-pill convention for a non-primary action.
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
    >
      <PrinterIcon />
      Print this page
    </button>
  );
}
