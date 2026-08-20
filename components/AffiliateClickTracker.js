"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Mounted once in the root layout. Articles and buying guides link out to
// Amazon with plain <a> tags (42+ article files, plus every article the
// automation pipeline generates going forward), so a single delegated
// listener here catches every affiliate click site-wide instead of having
// to wrap or edit each link individually.
export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a[href*="amazon.in"], a[href*="amzn.to"]');
      if (!link) return;

      trackEvent("affiliate_click", {
        link_url: link.href,
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
