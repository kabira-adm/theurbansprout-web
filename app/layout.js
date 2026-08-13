import { Figtree, Young_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-young-serif",
});

const SITE_URL = "https://www.theurbansprout.in";
const SITE_NAME = "Urban Sprout";
const SITE_DESCRIPTION =
  "Practical, tested gardening guidance for apartment balconies and small Indian homes — starting with balcony gardening.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Urban Sprout | Balcony & Indoor Gardening for Indian Homes",
    template: "%s | Urban Sprout",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    title: "Urban Sprout | Balcony & Indoor Gardening for Indian Homes",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Urban Sprout | Balcony & Indoor Gardening for Indian Homes",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${figtree.variable} ${youngSerif.variable}`}>
      <body className="flex min-h-full flex-col bg-brand-cream text-brand-green-dark font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
