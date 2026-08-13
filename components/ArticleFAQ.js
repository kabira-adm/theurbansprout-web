"use client";

import { usePathname } from "next/navigation";
import { faqData } from "@/lib/faq-data";
import FAQBlock from "./FAQBlock";

// Looks up the current article's slug from the URL rather than a prop, so
// none of the 31 existing article page.js files need editing to wire this
// up. Renders nothing unless the slug has a faqData entry.
export default function ArticleFAQ() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop();
  const items = faqData[slug];

  if (!items) return null;

  return <FAQBlock items={items} />;
}
