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

export default function WhisperingPines() {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      <img
        src="/whispering-pines.jpg"
        alt="Whispering Pines"
        className="w-full h-auto rounded mb-6"
      />

      <p className="text-lg mb-4">
        Crisp pine needles, cool forest air, and fresh woodland cedar.
      </p>

      <p className="mb-6">
        Whispering Pines captures the clean, refreshing scent of a quiet forest
        after a cold morning breeze. Bright pine tones mix with grounding cedar
        to create a natural, uplifting aroma that feels like stepping onto a
        peaceful woodland trail.
      </p>

      <div className="border rounded p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose Your Pack</h2>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-semibold">3-Pack</div>
            <div className="text-sm">14.99 + 3.99 shipping</div>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvTX8eVpOw1nOM9r2JajW5"); }}
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
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy("price_1SdvTX8eVpOw1nOM9r2JajW5"); }}
            className="bg-black text-white px-4 py-2"
          >
            Buy 6-Pack
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        <li>Cedar wood</li>
        <li>Pine shavings or crushed pine botanical</li>
        <li>Small amount of dried citrus</li>
        <li>Essential oil blend</li>
      </ul>

    </div>
  );
}



