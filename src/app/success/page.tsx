export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E9] flex flex-col items-center justify-center px-6 py-20">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-xl text-center border">
        <h1 className="text-4xl font-serif font-bold mb-4">Thank You!</h1>

        <p className="text-lg text-gray-700 mb-4">
          Your order has been received and we&apos;re already getting to work.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Each sachet is handcrafted and packaged with care here in North Carolina.
        </p>

        <p className="text-base text-gray-600 mb-6">
          If you need anything at all, you can reach us anytime at:
          <br />
          <span className="font-semibold">support@sachetbags.com</span>
        </p>

        <a
          href="/shop"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Continue Shopping
        </a>
      </div>
    </main>
  );
}


