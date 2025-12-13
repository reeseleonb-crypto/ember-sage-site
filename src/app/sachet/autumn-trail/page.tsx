"use client";

async function handleBuy(priceId: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function AutumnTrailPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-[#F5F0E9]">
      <h1 className="text-5xl font-serif font-bold mb-6">Autumn Trail</h1>

      <img
        src="/autumn-trail.jpg"
        alt="Autumn Trail Sachet Bag"
        className="w-full max-w-md rounded-xl shadow-lg mb-10"
      />

      <p className="text-xl mb-4">
        Warm cedar, crisp fall air, dried leaves, and subtle spiced wood.
      </p>

      <p className="text-lg mb-6">
        Autumn Trail captures the warm, cozy feeling of walking through fall woods as leaves crackle underfoot. Cedar chips soak in natural notes of dried orange peel, cinnamon, and clove to create a rich seasonal scent that feels warm but not heavy. The citrus adds brightness while the spices soften into the wood, giving this sachet a nostalgic, comforting aroma ideal for bedrooms, entryways, and living rooms throughout the cooler months.
      </p>

      {/* Buy Options */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-10">
        <h2 className="text-2xl font-serif font-semibold mb-4">
          Choose Your Pack
        </h2>

        {/* 3 Pack */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl font-semibold">3-Pack</p>
            <p className="text-gray-700 text-sm">14.99 + 3.99 shipping</p>
          </div>
          <button
            onClick={() =>
              handleBuy("price_1Sa4lr8eVpOw1nOMONKmTtoJ")
            }
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Buy 3-Pack
          </button>
        </div>

        {/* 6 Pack */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">6-Pack</p>
            <p className="text-gray-700 text-sm">22.99 + 3.99 shipping</p>
          </div>
          <button
            onClick={() =>
              handleBuy("price_1Sa4m88eVpOw1nOM6LiM5qSn")
            }
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <h2 className="text-2xl font-serif font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc ml-6 text-lg space-y-1 mb-10">
        <li>Cedar chips</li>
        <li>Dried orange peel</li>
        <li>Whole cloves</li>
        <li>Cinnamon bark</li>
        <li>Autumn spice blend</li>
      </ul>
    </main>
  );
}


