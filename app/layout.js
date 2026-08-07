import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Urban Sprout | Balcony & Indoor Gardening for Indian Homes",
    template: "%s | Urban Sprout",
  },
  description:
    "Practical, tested gardening guidance for apartment balconies and small Indian homes — starting with balcony gardening.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-brand-cream text-brand-green-dark font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
