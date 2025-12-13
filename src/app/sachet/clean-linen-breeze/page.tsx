"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

async function handleBuy(priceId: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = await res.json();
  window.location.href = data.url;
}

export default function CleanLinenBreeze() {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      <img
        src="/clean-linen-breeze.jpg"
        alt="Clean Linen Breeze"
        className="w-full h-auto rounded mb-6"
      />

      <p className="text-lg mb-4">
        Fresh linen, airy citrus, and a soft coastal breeze.
      </p>

      <p className="mb-6">
        Clean Linen Breeze blends crisp citrus with airy, sun-dried freshness
        for a light, clean scent that brightens any drawer or closet. Soft,
        breathable notes balance with cedar for a long-lasting, naturally
        refreshing aroma. This sachet works especially well in linen closets, bathroom cabinets, and clothing drawers where you want a natural, continuously fresh aroma that complements your fabrics instead of masking them.
      </p>

      <div className="border rounded p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose Your Pack</h2>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-semibold">3-Pack</div>
            <div className="text-sm">14.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvU18eVpOw1nOM6Udvb9WP"); }}
            className="bg-black text-white px-4 py-2"
          >
            Buy 3-Pack
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold">6-Pack</div>
            <div className="text-sm">22.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvU18eVpOw1nOM6Udvb9WP"); }}
            className="bg-black text-white px-4 py-2"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        <li>Cedar wood</li>
        <li>Dried lemon peel or dried orange slice</li>
        <li>Rosemary or lemongrass botanicals</li>
        <li>Essential oil blend</li>
      </ul>

    </div>
  );
}



