import Image from "next/image";

export default function CabinHearthPage() {
  return (
    <main className="min-h-screen bg-linen text-cedar px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Product Image */}
        <Image
          src="/cabin-hearth.jpg"
          alt="Cabin Hearth Sachet"
          width={1200}
          height={800}
          className="w-full h-72 object-cover rounded shadow mb-10"
        />

        {/* Product Title */}
        <h1 className="font-playfair text-4xl mb-4">Cabin Hearth</h1>

        {/* Description */}
        <p className="font-cormorant text-xl mb-6">
          A warm, comforting blend inspired by a quiet evening by the fire.
          Cabin Hearth brings together cedar, dried orange, cinnamon, and clove
          for a cozy, wood-smoked aroma that feels like home.
        </p>

        {/* Ingredients */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 font-cormorant text-lg">
            <li>Cedar chips</li>
            <li>Dried orange peel</li>
            <li>Cinnamon</li>
            <li>Clove</li>
          </ul>
        </div>

        {/* Purchase Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">

          {/* 3-Pack */}
          <a
            href="/checkout?product=cabin-hearth-3"
            className="block text-center bg-cedar text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            3-Pack — $14.99
          </a>

          {/* 6-Pack */}
          <a
            href="/checkout?product=cabin-hearth-6"
            className="block text-center bg-forest text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            6-Pack — $21.99 (Free Shipping)
          </a>

        </div>

      </div>
    </main>
  );
}
