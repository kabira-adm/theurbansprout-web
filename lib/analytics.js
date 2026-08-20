// Thin wrapper around window.gtag so components can fire events without
// worrying about GA not being loaded (dev environments, ad blockers, or
// NEXT_PUBLIC_GA_MEASUREMENT_ID simply not being set). Never throws.
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
