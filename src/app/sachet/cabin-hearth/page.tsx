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
        Warm cedar, soft fireplace embers, and a hint of citrus spice—Cabin Hearth feels like stepping into a quiet mountain lodge at dusk.
      </p>

      <p className="text-lg mb-6">
        Cabin Hearth blends clean red cedar with a gentle fireplace warmth for a cozy, grounded scent. Bright dried orange peel adds a subtle lift, while whole cloves bring a smooth, comforting spice that lingers without overpowering the space. Best used in closets, entryways, linen cabinets, mudrooms, and anywhere you want a warm, inviting atmosphere that feels calm and lived-in.
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
