export default function CedarHearthPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-[#F5F0E9]">
      <h1 className="text-5xl font-serif font-bold mb-6">Cedar Hearth</h1>

      <img
        src="/publicproducts/cedar-hearth.jpg"
        alt="Cedar Hearth Sachet Bag"
        className="w-full max-w-md rounded-xl shadow-lg mb-10"
      />

      <p className="text-xl mb-4">
        Warm cedar, subtle fireplace, bright citrus, and a clean spice finish.
      </p>

      <p className="text-lg mb-6">
        Cedar Hearth blends clean red cedar aroma with a soft, ember-like warmth for a modern, balanced scent. A touch of fireplace essential oil deepens the wood-smoke character, while bright dried orange peel lifts the blend with natural citrus. Whole cloves add a warm, comforting spice finish. Clean, natural, and made without harsh chemicals.
      </p>

      {/* Buy Options */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-10">
        <h2 className="text-2xl font-serif font-semibold mb-4">Choose Your Pack</h2>

        {/* 3 Pack */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl font-semibold">3-Pack</p>
            <p className="text-gray-700 text-sm">14.99 + 3.99 shipping</p>
          </div>
          <button
            onClick={() => handleBuy("price_1SXqId8eVpOw1nOMioqaK9Nx")}
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
            onClick={() => handleBuy("price_1SXqId8eVpOw1nOMioqaK9Nx")}
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
        <li>Fireplace essential oil blend</li>
      </ul>
          <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={() => handleBuy("price_1SXqId8eVpOw1nOMioqaK9Nx")}
          className="bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg text-lg"
        >
          Buy Cedar Hearth – 3 Pack (.99 + .99 shipping)
        </button>

        <button
          onClick={() => handleBuy("price_1SXqKO8eVpOw1nOMuKfaixrU")}
          className="bg-amber-900 hover:bg-amber-950 text-white py-3 rounded-lg text-lg"
        >
          Buy Cedar Hearth – 6 Pack (.99 + .99 shipping)
        </button>
      </div>
    </main>
  );
}










