"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

async function handleBuy(priceId: string) {
  const stripe = await stripePromise;
  if (!stripe) return;

  await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    successUrl: "/success",
    cancelUrl: "/canceled",
  });
}

export default function CabinHearthPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="mb-8">
          <img
            src="/publicproducts/cabin-hearth.jpg"
            alt="Cabin Hearth cedar sachet bags"
            className="w-full max-h-[480px] object-cover rounded-lg shadow-md"
          />
        </div>

        <h1 className="text-4xl font-serif mb-4">Cabin Hearth</h1>
        <p className="text-lg leading-relaxed mb-8">
          Cabin Hearth blends cedar chips, dried orange peel, clove, and cinnamon with a warm cabin essential oil blend for a cozy, fireside aroma that feels rustic and naturally comforting.
        </p>

        <section className="mb-10">
          <div className="rounded-xl bg-white shadow-md border border-stone-200 p-6 md:p-8">
            <h2 className="text-2xl font-serif mb-4">Choose Your Pack</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">3-Pack</p>
                  <p className="text-sm text-stone-600">14.99 + 3.99 shipping</p>
                </div>
                <button
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold"
                  onClick={() => handleBuy("price_1SaQeH8eVpOw1nOM3EzqyiBC")}
                >
                  Buy 3-Pack
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">6-Pack</p>
                  <p className="text-sm text-stone-600">22.99 + 3.99 shipping</p>
                </div>
                <button
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold"
                  onClick={() => handleBuy("price_1SaQeb8eVpOw1nOMr7dzq2Pz")}
                >
                  Buy 6-Pack
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Cedar chips</li>
            <li>Dried orange peel</li>
            <li>Whole cloves</li>
            <li>Cinnamon pieces</li>
            <li>Warm cabin essential oil blend</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
