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

      <img src="/cabin-hearth.jpg" alt="Cabin Hearth" className="w-full rounded mb-6" />

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
            onClick={() => handleBuy("price_1SdvSC8eVpOw1nOM5BA6EC5A")}
            className="bg-black text-white px-4 py-2"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>
    </div>
  );
}

