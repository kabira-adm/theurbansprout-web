import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-sand bg-brand-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="14" fill="#2E7D4F" />
                <path d="M14 21V13C14 9.68629 16.6863 7 20 7" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 21V16C14 13.7909 12.2091 12 10 12" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-base font-semibold text-brand-green-dark">Urban Sprout</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-brand-green-dark/70">
              Practical, tested gardening guidance for apartment balconies and small Indian homes.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-green-dark">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-green-dark/70">
              <li><Link href="/balcony-gardening" className="hover:text-brand-green">Balcony Gardening</Link></li>
              <li><Link href="/about" className="hover:text-brand-green">About Urban Sprout</Link></li>
              <li><Link href="/indoor-plants" className="hover:text-brand-green">Indoor Plants</Link></li>
              <li><Link href="/kitchen-gardening" className="hover:text-brand-green">Kitchen Gardening</Link></li>
              <li><Link href="/plant-encyclopedia" className="hover:text-brand-green">Plant Encyclopedia</Link></li>
              <li><Link href="/tools/watering-scheduler" className="hover:text-brand-green">Watering Scheduler</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-green-dark">Stay in touch</p>
            <p className="mt-3 text-sm text-brand-green-dark/70">
              One useful gardening tip a week, written for Indian balconies. No spam.
            </p>
            <Link
              href="#newsletter"
              className="mt-3 inline-block text-sm font-semibold text-brand-green hover:text-brand-green-dark"
            >
              Sign up on the homepage →
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-brand-sand pt-6 text-xs text-brand-green-dark/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Urban Sprout. All rights reserved.</p>
          <p>Built for balconies, kitchens, and window sills across India.</p>
        </div>
      </div>
    </footer>
  );
}
