import Image from "next/image";

export default function MixedPackPage() {
  return (
    <main className="min-h-screen bg-linen text-cedar px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Product Image */}
        <Image
          src="/mixed-pack.jpg"
          alt="Mixed 3-Pack Sachets"
          width={1200}
          height={800}
          className="w-full h-72 object-cover rounded shadow mb-10"
        />

        {/* Product Title */}
        <h1 className="font-playfair text-4xl mb-4">Mixed 3-Pack</h1>

        {/* Description */}
        <p className="font-cormorant text-xl mb-6">
          One of each of our signature scents â€” Cabin Hearth, Clean Linen Breeze,
          and Coastal Clean Cedar. A perfect sampler or gift set for anyone who
          loves natural, handcrafted sachet bags.
        </p>

        {/* Ingredients */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl mb-2">Included Scents</h2>
          <ul className="list-disc pl-6 font-cormorant text-lg">
            <li>Cabin Hearth</li>
            <li>Clean Linen Breeze</li>
            <li>Coastal Clean Cedar</li>
          </ul>
        </div>

        {/* Purchase Options */}
        <div className="max-w-sm">

          {/* 3-Pack Only */}
          <a
            href="/checkout?product=mixed-pack-3"
            className="block text-center bg-cedar text-linen py-4 rounded shadow hover:bg-charcoal transition text-lg"
          >
            Mixed 3-Pack â€” $14.99 (+ 2.99 Shipping)
          </a>

        </div>

      </div>
    </main>
  );
}


