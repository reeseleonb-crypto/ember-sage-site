export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
          Contact & Legal
        </h1>

        <p className="mb-6 text-lg">
          Ember & Sage is based in Wilmington, North Carolina. If you need support,
          have questions about your order, or want to request information about our
          products, you can reach us at:
        </p>

        <p className="font-semibold mb-4">
          Email: support@sachetbags.com
        </p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
          Refund Policy
        </h2>
        <p className="mb-4">
          All sales are final. If your order arrives damaged or incorrect, please
          contact us within 7 days so we can make it right.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10" style={{ fontFamily: "var(--font-playfair)" }}>
          Privacy & Data
        </h2>
        <p className="mb-4">
          We do not sell or share your personal information. Payments are processed
          securely through Stripe. We do not store your credit card information.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10" style={{ fontFamily: "var(--font-playfair)" }}>
          Terms of Use
        </h2>
        <p className="mb-2">
          By using this website, you agree not to misuse or attempt to reverse-engineer
          the site or payment systems. All content, product descriptions, and branding
          are property of Ember & Sage.
        </p>

        <p className="mt-10 text-sm text-gray-600">
          Last updated: January 2025
        </p>
      </div>
    </main>
  );
}
