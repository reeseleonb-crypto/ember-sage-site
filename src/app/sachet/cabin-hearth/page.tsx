"use client";

async function handleBuy(priceId: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = await res.json();
  window.location.href = data.url;
}

export default function CabinHearth() {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* Product Image */}
      <img
        src="/cabin-hearth.jpg"
        alt="Cabin Hearth"
        className="w-full rounded mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-serif font-bold mb-4">
        Cabin Hearth
      </h1>

      {/* Description */}
      <p className="text-lg mb-4">
        Warm spice, cedar, and subtle citrus—Cabin Hearth captures the feeling
        of a crackling fire on a quiet autumn evening.
      </p>

      <p className="text-lg mb-6">
        Cabin Hearth blends clean red cedar with a gentle fireplace warmth for
        a cozy, grounded scent. Bright dried orange peel lifts the blend, while
        whole cloves add a soft, comforting spice. Natural, balanced, and made
        without harsh chemicals.
      </p>

      {/* Choose Pack */}
      <div className="border rounded p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose Your Pack</h2>

        <div className="flex justify-between mb-4">
          <div>
            <div className="font-semibold">3-Pack</div>
            <div className="text-sm">14.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={() => handleBuy("price_1SdvSC8eVpOw1nOM5BA6EC5A")}
            className="bg-black text-white px-4 py-2"
          >
            Buy 3-Pack
          </button>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="font-semibold">6-Pack</div>
            <div className="text-sm">22.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={() => handleBuy("price_1SdvSc8eVpOw1nOMobaeGWG8")}
            className="bg-black text-white px-4 py-2"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <h2 className="text-2xl font-serif font-semibold mb-3">
        Ingredients
      </h2>

      <ul className="list-disc ml-6 text-lg space-y-1 mb-10">
        <li>Cedar chips</li>
        <li>Dried orange peel</li>
        <li>Whole cloves</li>
        <li>Fireplace essential oil blend</li>
      </ul>

    </div>
  );
}
