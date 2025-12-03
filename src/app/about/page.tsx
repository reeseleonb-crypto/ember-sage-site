export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-200">

        <h1
          className="text-4xl font-bold mb-6 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          About Ember & Sage
        </h1>

        <p className="mb-6 text-lg">
          <span style={{ fontFamily: "var(--font-playfair)", fontWeight: "bold" }}>
            Ember & Sage
          </span>{" "}
          is a small-batch sachet company based in Wilmington, North Carolina.
          We make modern sachet bags designed for people who want cleaner,
          fresher, better-smelling spaces. Every bag is handcrafted with real
          botanicals and clean essential oils to deliver long-lasting freshness 
          without heavy synthetic perfumes.
        </p>

        <p className="mb-6 text-lg">
          Our approach is simple: clean ingredients, modern fragrance profiles,
          and consistent small-batch quality. Whether you call them sachet bags,
          scented sachets, drawer sachets, or natural sachets—ours are made with
          care and attention to detail.
        </p>

        <p className="mb-6 text-lg">
          You can place Ember & Sage sachets in closets, drawers, cars, linen
          cabinets, suitcases, storage bins, or anywhere that needs a clean boost.
          Our essential-oil-enhanced blends are designed to stay fresh longer and
          smell cleaner than traditional sachets.
        </p>

      </div>
    </main>
  );
}
