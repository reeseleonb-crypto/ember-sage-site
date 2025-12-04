import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className='min-h-screen bg-[#F5F0E8] py-20'>
      <h1 className='text-center text-5xl font-bold font-playfair mb-16'>Shop Scents</h1>

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6'>

        <Link href='/sachet/cedar-hearth' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/cedar-hearth.jpg' alt='Cedar Hearth' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Cedar Hearth</h2>
          <p className='text-gray-700 mt-1'>Warm cedar with citrus peel and a soft fireplace glow.</p>
        </Link>

        <Link href='/sachet/autumn-trail' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/autumn-trail.jpg' alt='Autumn Trail' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Autumn Trail</h2>
          <p className='text-gray-700 mt-1'>Crisp outdoor cedar with herbal lift and bright citrus.</p>
        </Link>

        <Link href='/sachet/winter-cedar-hearth' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/winter-cedar-hearth.jpg' alt='Winter Cedar Hearth' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Winter Cedar Hearth</h2>
          <p className='text-gray-700 mt-1'>Warm cedar with cool winter air and holiday spice.</p>
        </Link>

        <Link href='/sachet/cabin-hearth' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/cabin-hearth.jpg' alt='Cabin Hearth' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Cabin Hearth</h2>
          <p className='text-gray-700 mt-1'>Rustic cedar, citrus peel, and comforting spice warmth.</p>
        </Link>

        <Link href='/sachet/clean-linen-breeze' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/Clean-Linen-Breeze.jpg' alt='Clean Linen Breeze' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Clean Linen Breeze</h2>
          <p className='text-gray-700 mt-1'>Fresh, airy linen with lavender, eucalyptus, and soft citrus.</p>
        </Link>

        <Link href='/sachet/whispering-pines' className='block bg-white rounded-xl shadow-md hover:shadow-lg transition p-4'>
          <img src='/publicproducts/Whispering-Pines.jpg' alt='Whispering Pines' className='w-full h-64 object-cover rounded' />
          <h2 className='text-2xl font-playfair mt-4'>Whispering Pines</h2>
          <p className='text-gray-700 mt-1'>Crisp pine forest with cedarwood depth and evergreen calm.</p>
        </Link>

      </div>
    </main>
  );
}
