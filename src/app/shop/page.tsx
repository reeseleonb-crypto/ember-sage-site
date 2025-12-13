import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] py-20">
      <h1 className="text-center text-5xl font-bold font-playfair mb-16">
        Shop Scents
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <Link
          href="/sachet/cedar-hearth"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/cedar-hearth.jpg"
            alt="Cedar Hearth"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Cedar Hearth</h2>
          <p className="text-gray-600">
            Warm, grounding cedar—simple, clean, timeless.
          </p>
        </Link>

        <Link
          href="/sachet/autumn-trail"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/autumn-trail.jpg"
            alt="Autumn Trail"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Autumn Trail</h2>
          <p className="text-gray-600">
            Cedar with dried orange, cinnamon, and clove.
          </p>
        </Link>

        <Link
          href="/sachet/winter-cedar-hearth"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/winter-cedar-hearth.jpg"
            alt="Winter Cedar Hearth"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Winter Cedar Hearth</h2>
          <p className="text-gray-600">
            Cedar with winter spice and a clean cool note.
          </p>
        </Link>

        <Link
          href="/sachet/clean-linen-breeze"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/clean-linen-breeze.jpg"
            alt="Clean Linen Breeze"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Clean Linen Breeze</h2>
          <p className="text-gray-600">
            Soft, airy, fresh-laundry inspired scent.
          </p>
        </Link>

        <Link
          href="/sachet/whispering-pines"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/whispering-pines.jpg"
            alt="Whispering Pines"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Whispering Pines</h2>
          <p className="text-gray-600">
            Fresh pine and cedar—clean, nostalgic, outdoorsy.
          </p>
        </Link>

        <Link
          href="/sachet/cabin-hearth"
          className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
        >
          <img
            src="/cabin-hearth.jpg"
            alt="Cabin Hearth"
            className="rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Cabin Hearth</h2>
          <p className="text-gray-600">
            Warm spice, cedar, and subtle citrus—cozy and inviting.
          </p>
        </Link>
      </div>
    </main>
  );
}
