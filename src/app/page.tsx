export const metadata = {
  alternates: {
    canonical: "https://sachetbags.com/",
  },
};

export default function HomePage() {
  return (
    <main
  className="min-h-screen w-full bg-cover bg-center flex flex-col items-center text-center pt-32 pb-12 px-4"
  style={{ backgroundImage: "url('/wood-bg.jpg')" }}
>


      {/* Foggy white panel */}
<div
  className="backdrop-blur-md bg-white/40 rounded-3xl shadow-xl px-10 py-8 max-w-3xl mx-auto mt-12"

        style={{ border: "1px solid rgba(255,255,255,0.4)" }}
      >
        <h1
          className="text-7xl md:text-8xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#1A1A1A",
            textShadow: "0 3px 6px rgba(0,0,0,0.25)"
          }}
        >
          EMBER & SAGE
        </h1>

        <p
          className="text-2xl md:text-3xl font-light"
          style={{
            color: "#1A1A1A",
            textShadow: "0 2px 4px rgba(0,0,0,0.25)"
          }}
        >
          Cleaner, fresher, better-smelling.
        </p>
      </div>

      {/* Button under the panel */}
      <a
        href="/shop"
        className="mt-10 px-8 py-4 bg-black text-white rounded-lg text-xl shadow-lg hover:bg-gray-800 transition"
      >
        Shop Scents
      </a>

      {/* FEATURED HOME PHOTO */}
      <div className="mt-16 mb-20 w-full flex justify-center px-6">
        <img
          src="/home-display.jpg"
          alt="Featured Sachet Display"
          className="w-full max-w-3xl rounded-xl shadow-2xl"
        />
      </div>

    </main>
  );
}


