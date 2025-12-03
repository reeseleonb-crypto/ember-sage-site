import Image from "next/image";

export default function CleanLinenBreezePage() {
  return (
    <main className="min-h-screen bg-linen text-cedar px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Product Image */}
        <Image
          src="/clean-linen-breeze.jpg"
          alt="Clean Linen Breeze Sachet"
          width={1200}
          height={800}
          className="w-full h-72 object-cover rounded shadow mb-10"
        />

        {/* Product Title */}
        <h1 className="font-playfair text-4xl mb-4">Clean Linen Breeze</h1>

        {/* Description */}
        <p className="font-cormorant text-xl mb-6">
          Light, soft, and fresh. Clean Linen Breeze blends airy dried herbs with
          bright citrus notes to create a crisp, clean fragrance that feels like
          sun-dried sheets on a warm coastal morning.
        </p>

        {/* Ingredients */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 font-cormorant text-lg">
            <li>Dried lemon peel</li>
            <li>Cedar chips</li>
            <li>Herbal blend</li>
          </ul>
        </div>

        {/* Purchase Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">

          {/* 3-Pack */}
          <a
            href="/checkout?product=clean-linen-breeze-3"
            className="block text-center bg-cedar text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            3-Pack — $14.99
          </a>

          {/* 6-Pack */}
          <a
            href="/checkout?product=clean-linen-breeze-6"
            className="block text-center bg-forest text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            6-Pack — $21.99 (Free Shipping)
          </a>

        </div>

      </div>
    </main>
  );
}
