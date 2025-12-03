import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] py-20">
      <h1 className="text-center text-5xl font-bold font-playfair mb-16">Shop Scents</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        
        {/* Cedar Hearth */}
        <Link href="/sachet/cedar-hearth" className="block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
          <img src="/publicproducts/cedar-hearth.jpg" alt="Cedar Hearth Sachet" className="w-full h-64 object-cover rounded" />
          <h2 className="text-2xl font-playfair mt-4">Cedar Hearth</h2>
          <p className="text-gray-700 mt-1">A warm cedar blend with a soft fireplace glow, bright citrus, and a clean spice finish.</p>
        </Link>

        {/* Autumn Trail */}
        <Link href="/sachet/autumn-trail" className="block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
          <img 
            src="/publicproducts/autumn-trail.jpg" 
            alt="Autumn Trail Sachet" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-playfair mt-4">Autumn Trail</h2>
          <p className="text-gray-700 mt-1">Crisp cedar with a fresh, wooded trail aroma, lifted by herbal notes and bright citrus.</p>
        </Link>

        {/* Winter Cedar Hearth */}
        <Link href="/sachet/winter-cedar-hearth" className="block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
          <img 
            src="/publicproducts/winter-cedar-hearth.jpg" 
            alt="Winter Cedar Hearth Sachet" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-playfair mt-4">Winter Cedar Hearth</h2>
          <p className="text-gray-700 mt-1">A warm cedar blend with a soft fireplace glow, bright citrus, and a clean spice finish.</p>
        </Link>

      </div>
    </main>
  );
}


