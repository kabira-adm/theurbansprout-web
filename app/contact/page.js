export const metadata = {
  title: "Contact",
  description: "Get in touch with Urban Sprout.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
        Contact
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
        Get in touch
      </h1>
      <div className="mt-8 space-y-6 text-brand-green-dark/80 leading-7">
        <p>
          Have a question about a guide, a plant that&apos;s not behaving the way an article said
          it would, or a topic you&apos;d like us to cover? We&apos;d like to hear it.
        </p>
        <p>
          Email us at{" "}
          <a href="mailto:hello@theurbansprout.in" className="font-semibold text-brand-green-dark underline underline-offset-2">
            hello@theurbansprout.in
          </a>{" "}
          — we read every message, even if it takes us a few days to reply.
        </p>
      </div>
    </div>
  );
}
