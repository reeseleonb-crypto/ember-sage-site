// src/app/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sachetbags.com"),
  alternates: {
    canonical: "https://sachetbags.com/",
  },
  title: "Ember & Sage | Cedar Sachets for Spring Cleaning (Better Than Lavender Bags)",
  description:
    "Spring-cleaning cedar sachets made with real cedar chips, aged essential oils (4+ weeks), and natural botanicals. A longer-lasting, stronger alternative to thin lavender bags for closets, drawers, shoes, and small spaces.",
  openGraph: {
    title: "Ember & Sage | Cedar Sachets for Spring Cleaning",
    description:
      "Cedar sachets made with real cedar chips + aged essential oils + botanicals. Cleaner, fresher, better-smelling—especially after spring cleaning.",
    url: "https://sachetbags.com/",
    siteName: "Ember & Sage",
    images: [{ url: "/home-display.jpg", width: 1200, height: 630, alt: "Ember & Sage cedar sachets" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Sage | Cedar Sachets for Spring Cleaning",
    description:
      "Real cedar chips. Aged oils (4+ weeks). Natural botanicals. Built for closets, drawers, shoes, and small spaces.",
    images: ["/home-display.jpg"],
  },
};

export default function HomePage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center text-center pt-28 pb-16 px-4"
      style={{ backgroundImage: "url('/wood-bg.jpg')" }}
    >
      {/* Foggy white panel (hero) */}
      <section
        className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl px-8 md:px-10 py-8 max-w-4xl mx-auto mt-10"
        style={{ border: "1px solid rgba(255,255,255,0.4)" }}
      >
        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#1A1A1A",
            textShadow: "0 3px 6px rgba(0,0,0,0.25)",
          }}
        >
          Ember &amp; Sage Cedar Sachets
        </h1>

        <p
          className="text-lg md:text-2xl font-light max-w-3xl mx-auto"
          style={{ color: "#1A1A1A", textShadow: "0 2px 4px rgba(0,0,0,0.25)" }}
        >
          Spring cleaning is the reset. This is what your closets, drawers, and small spaces smell like after.
        </p>

        <p className="mt-5 text-base md:text-lg text-black/80 max-w-3xl mx-auto">
          We use <strong>real cedar chips</strong> (not dust), infuse with <strong>essential oils</strong>, age every batch for{" "}
          <strong>4+ weeks</strong>, then finish with <strong>natural botanicals</strong> like dried citrus and whole cloves.
          It’s a stronger, longer-lasting alternative to thin lavender bags.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/shop"
            className="px-8 py-4 bg-black text-white rounded-lg text-lg shadow-lg hover:bg-gray-800 transition"
          >
            Shop Scents
          </Link>
          <Link
            href="/spring"
            className="px-8 py-4 bg-white/70 text-black rounded-lg text-lg shadow-lg hover:bg-white/90 transition border border-black/10"
          >
            Explore Spring Collection
          </Link>
        </div>

        <div className="mt-6 text-sm text-black/70">
          Best for: closets • drawers • shoes • gym bags • linen closets • cars
        </div>
      </section>

      {/* Featured photo */}
      <section className="mt-12 w-full flex justify-center px-6">
        <img
          src="/home-display.jpg"
          alt="Ember & Sage cedar sachets for closets and drawers"
          className="w-full max-w-4xl rounded-2xl shadow-2xl"
          loading="eager"
        />
      </section>

      {/* SEO sections */}
      <section className="w-full max-w-5xl mt-14 grid gap-6 px-2">
        {/* Cedar vs Lavender */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl p-7 md:p-9 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Why Cedar Sachets Beat Lavender Bags (Especially for Spring Cleaning)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 rounded-2xl p-6 border border-black/10">
              <h3 className="text-xl font-semibold mb-3">Typical Lavender Bags</h3>
              <ul className="space-y-2 text-black/80">
                <li>• Mostly fragrance — fades fast</li>
                <li>• Thin fabric + light fill</li>
                <li>• Doesn’t handle musty “stored” smells well</li>
                <li>• One-note scent, often feels cheap</li>
              </ul>
            </div>

            <div className="bg-white/60 rounded-2xl p-6 border border-black/10">
              <h3 className="text-xl font-semibold mb-3">Ember &amp; Sage Cedar Sachets</h3>
              <ul className="space-y-2 text-black/80">
                <li>• Real cedar chips for a deeper, cleaner base</li>
                <li>• Cotton bags designed to hold scent longer</li>
                <li>• Essential oils aged 4+ weeks before finishing</li>
                <li>• Natural botanicals (citrus, clove, etc.) for premium depth</li>
                <li>• Cedar is widely used for closets and helps deter pests in storage spaces</li>
              </ul>
            </div>
          </div>

          <p className="mt-5 text-black/80">
            Spring cleaning isn’t just wiping things down — it’s resetting what your home smells like in the places you close up:
            closets, drawers, shoes, and storage bins.
          </p>
        </div>

        {/* Process */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl p-7 md:p-9 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">How We Make Them (The Part Others Skip)</h2>
          <ol className="space-y-3 text-black/80">
            <li>
              <strong>1) Cedar-first:</strong> We start with real cedar chips for a richer, longer-lasting base scent.
            </li>
            <li>
              <strong>2) Oil infusion:</strong> Essential oils are added to build a clean, premium fragrance profile.
            </li>
            <li>
              <strong>3) Aged 4+ weeks:</strong> We let it mature so the scent bonds and holds (instead of flashing off in days).
            </li>
            <li>
              <strong>4) Botanicals:</strong> Finished with natural elements like dried orange slices and whole cloves for depth and character.
            </li>
          </ol>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/shop"
              className="px-7 py-3 bg-black text-white rounded-lg text-base shadow-lg hover:bg-gray-800 transition w-fit"
            >
              Shop Bundles
            </Link>
            <Link
              href="/blog"
              className="px-7 py-3 bg-white/70 text-black rounded-lg text-base shadow-lg hover:bg-white/90 transition border border-black/10 w-fit"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Internal links / blog teasers */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl p-7 md:p-9 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Spring Cleaning Guides</h2>
          <p className="text-black/80 mb-5">
            These guides should all link back to this page and to the Spring Collection.
          </p>
          <ul className="space-y-3 text-black/85">
            <li>
              • <Link className="underline hover:opacity-80" href="/blog/cedar-sachets-vs-lavender-bags">Cedar Sachets vs Lavender Bags</Link>
            </li>
            <li>
              • <Link className="underline hover:opacity-80" href="/blog/how-to-make-closets-smell-clean-after-spring-cleaning">How to Make Closets Smell Clean After Spring Cleaning</Link>
            </li>
            <li>
              • <Link className="underline hover:opacity-80" href="/blog/get-musty-smell-out-of-drawers">How to Get Musty Smells Out of Drawers</Link>
            </li>
          </ul>
        </div>

        {/* FAQ (SEO) */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl p-7 md:p-9 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">FAQ</h2>
          <div className="space-y-5 text-black/85">
            <div>
              <h3 className="text-xl font-semibold">Do cedar sachets actually last longer than lavender bags?</h3>
              <p className="mt-1">
                Most lavender bags are mostly scent and fade quickly. Our cedar-chip base plus aged oils is designed to hold longer in closed
                spaces like closets and drawers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Where should I use them after spring cleaning?</h3>
              <p className="mt-1">
                Closets, drawers, shoes, gym bags, linen closets, storage bins, and cars — anywhere you want a clean “finished” smell that sticks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Are these only for spring?</h3>
              <p className="mt-1">
                No — spring is the seasonal reset, but cedar sachets work year-round for everyday freshness and storage spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12">
        <Link
          href="/shop"
          className="inline-block px-10 py-4 bg-black text-white rounded-lg text-xl shadow-lg hover:bg-gray-800 transition"
        >
          Shop Scents
        </Link>
        <div className="mt-3 text-sm text-black/70">Bundles available: 3-pack and 6-pack</div>
      </section>
    </main>
  );
}
