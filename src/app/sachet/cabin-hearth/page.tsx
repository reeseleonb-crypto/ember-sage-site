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

export default function CabinHearth() {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      <img
        src="/cabin-hearth.jpg"
        alt="Cabin Hearth"
        className="w-full h-auto rounded mb-6"
      />

      <p className="text-lg mb-4">
        Warm cabin cedar, subtle spice, and a comforting, rustic glow.
      </p>

      <p className="mb-6">
        Cabin Hearth blends clean cedarwood with gentle spice for a nostalgic,
        fireside-inspired scent. A touch of warm spice rounds the blend into a
        cozy, lived-in aroma that feels like stepping inside a mountain cabin
        on a crisp day. ItÃ¢â‚¬â„¢s deeper and cozier than Autumn Trail, making it perfect for bedrooms, dens, and spaces where you want a quietly inviting scent that lingers without ever becoming overwhelming.
      </p>

      <div className="border rounded p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose Your Pack</h2>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-semibold">3-Pack</div>
            <div className="text-sm">14.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={() => handleBuy("price_1SaQeH8eVpOw1nOM3EzqyiBC")}
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
            onClick={() => handleBuy("price_1SaQeb8eVpOw1nOMr7dzq2Pz")}
            className="bg-black text-white px-4 py-2"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        <li>Cedar chips</li>
        <li>Cinnamon stick pieces</li>
        <li>Clove pieces</li>
        <li>Cedarwood essential oil blend</li>
      </ul>

    </div>
  );
}


