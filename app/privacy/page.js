export const metadata = {
  title: "Privacy Policy",
  description: "How Urban Sprout collects, uses, and protects your information.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
        Privacy Policy
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
        Your privacy
      </h1>
      <p className="mt-4 text-sm text-brand-green-dark/60">Last updated: August 2026</p>

      <div className="mt-8 space-y-8 text-brand-green-dark/80 leading-7">
        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">Information we collect</h2>
          <p className="mt-3">
            If you sign up for our newsletter, we collect the email address you provide. We don&apos;t
            require an account to read Urban Sprout, and we don&apos;t collect names, addresses, or
            payment information. We don&apos;t sell anything on this site today.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">How we use it</h2>
          <p className="mt-3">
            Your email is used only to send you gardening tips and updates from Urban Sprout. We
            don&apos;t sell, rent, or share your email address with third parties. You can
            unsubscribe at any time using the link in any email we send.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">
            Cookies and advertising
          </h2>
          <p className="mt-3">
            Urban Sprout may use cookies and similar technologies for basic site functionality and
            analytics. We may also work with third-party advertising partners, including Google
            AdSense. Google and its partners may use cookies to serve ads based on your visits to
            this and other websites. You can learn more about how Google uses this data, and opt
            out of personalized advertising, at{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Google&apos;s Advertising Policies page
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">Third-party links</h2>
          <p className="mt-3">
            Some articles include links to products on third-party sites (for example, Amazon).
            Urban Sprout may earn a small commission on purchases made through these links, at no
            extra cost to you. We only link to products we think are genuinely useful for the
            guide you&apos;re reading.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">Your rights</h2>
          <p className="mt-3">
            You can ask us what data we hold about you, or request that we delete it, at any time
            by emailing us at the address on our{" "}
            <a href="/contact" className="underline underline-offset-2">
              Contact page
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-green-dark">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy as Urban Sprout grows. Significant changes will be reflected
            with an updated date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
