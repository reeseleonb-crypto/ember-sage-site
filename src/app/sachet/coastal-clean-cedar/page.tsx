"use client";

import Image from "next/image";

async function handleBuy(priceId: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
}

export default function CoastalCleanCedarPage() {
  return (
    <main className="min-h-screen bg-linen text-cedar px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <Image
          src="/coastal-clean-cedar.jpg"
          alt="Coastal Clean Cedar Sachet"
          width={1200}
          height={800}
          className="w-full h-72 object-cover rounded shadow mb-10"
        />

        <h1 className="font-playfair text-4xl mb-4">Coastal Clean Cedar</h1>

        <p className="font-cormorant text-xl mb-6">
          Smooth cedar, subtle citrus, and a hint of coastal freshness — perfect
          for closets, drawers, and linen spaces.
        </p>

        <div className="mb-10">
          <h2 className="font-playfair text-2xl mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 font-cormorant text-lg">
            <li>Cedar chips</li>
            <li>Dried citrus notes</li>
            <li>Coastal herbal blend</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">

          <button
            onClick={() => handleBuy("price_1SdvU18eVpOw1nOM6Udvb9WP")}
            className="block text-center bg-cedar text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            3-Pack — $14.99 + $3.99 Shipping
          </button>

          <button
            onClick={() => handleBuy("price_1SdvUR8eVpOw1nOMIolrbJf4")}
            className="block text-center bg-forest text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            6-Pack — $21.99 + $3.99 Shipping
          </button>

        </div>

      </div>
    </main>
  );
}
