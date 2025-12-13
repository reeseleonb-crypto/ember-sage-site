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

export default function WinterCedarHearthPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-[#F5F0E9]">
      <h1 className="text-5xl font-serif font-bold mb-6">
        Winter Cedar Hearth
      </h1>

      <img
        src="/winter-cedar-hearth.jpg"
        alt="Winter Cedar Hearth Sachet Bag"
        className="w-full max-w-md rounded-xl shadow-lg mb-10"
      />

      <p className="text-xl mb-4">
        Cold-weather cedar, subtle fireplace smoke, and crisp winter spice.
      </p>

      <p className="text-lg mb-6">
        Winter Cedar Hearth builds on our original cedar base with a subtle
        winter twist. This scent blends cedar chips with gentle hints of
        cinnamon, dried orange, and a cool touch of eucalyptus to create a
        fresh-but-warm fragrance reminiscent of stepping indoors after cold
        air. It’s not holiday-strong — instead, it offers a clean winter
        cabin aroma that lasts for weeks.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md border mb-10">
        <h2 className="text-2xl font-serif font-semibold mb-4">
          Choose Your Pack
        </h2>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl font-semibold">3-Pack</p>
            <p className="text-gray-700 text-sm">14.99 + 3.99 shipping</p>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvVZ8eVpOw1nOM83msDIIC"); }}
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Buy 3-Pack
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">6-Pack</p>
            <p className="text-gray-700 text-sm">22.99 + 3.99 shipping</p>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvVZ8eVpOw1nOM83msDIIC"); }}
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-semibold mb-4">
        Ingredients
      </h2>
      <ul className="list-disc ml-6 text-lg space-y-1 mb-10">
        <li>Cedar chips</li>
        <li>Dried orange peel</li>
        <li>Whole cloves</li>
        <li>Cinnamon bark</li>
        <li>Winter fireplace blend</li>
      </ul>
    </main>
  );
}

