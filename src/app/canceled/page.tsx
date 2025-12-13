export const metadata = {
  title: "Order Canceled | Ember & Sage",
};

export default function CanceledPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
          Order Canceled
        </h1>
        <p className="text-gray-700 mb-8">
          Your checkout was canceled. No charges were made.
        </p>
        <a
          href="/sachet"
          className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Return to Shop
        </a>
      </div>
    </main>
  );
}
