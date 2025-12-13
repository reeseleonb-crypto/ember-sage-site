import Image from "next/image";

export default function CoastalCleanCedarPage() {
  return (
    <main className="min-h-screen bg-linen text-cedar px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Product Image */}
        <Image
          src="/coastal-clean-cedar.jpg"
          alt="Coastal Clean Cedar Sachet"
          width={1200}
          height={800}
          className="w-full h-72 object-cover rounded shadow mb-10"
        />

        {/* Product Title */}
        <h1 className="font-playfair text-4xl mb-4">Coastal Clean Cedar</h1>

        {/* Description */}
        <p className="font-cormorant text-xl mb-6">
          Smooth cedar, subtle citrus, and a hint of coastal freshness. Coastal
          Clean Cedar delivers a clean, refined wood aroma with a bright edge Ã¢â‚¬â€
          perfect for closets, drawers, and linen spaces.
        </p>

        {/* Ingredients */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 font-cormorant text-lg">
            <li>Cedar chips</li>
            <li>Dried citrus notes</li>
            <li>Coastal herbal blend</li>
          </ul>
        </div>

        {/* Purchase Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">

          {/* 3-Pack */}
          <a
            href="/checkout?product=coastal-clean-cedar-3"
            className="block text-center bg-cedar text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            3-Pack Ã¢â‚¬â€ $14.99 (+ 2.99 Shipping)
          </a>

          {/* 6-Pack */}
          <a
            href="/checkout?product=coastal-clean-cedar-6"
            className="block text-center bg-forest text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            6-Pack Ã¢â‚¬â€ $21.99 (Free Shipping)
          </a>

        </div>

      </div>
    </main>
  );
}



