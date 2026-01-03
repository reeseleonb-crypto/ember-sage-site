export const metadata = {
  title: "About Ember & Sage",
  description:
    "Handmade cedar sachet bags crafted with real botanicals and essential oils. Small-batch, natural, and designed for everyday spaces.",
  alternates: {
    canonical: "https://sachetbags.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-8">About Ember & Sage</h1>

        <p className="text-lg leading-relaxed mb-6">
          Ember & Sage was created with a simple purpose: to keep everyday
          spaces smelling clean, warm, and natural without artificial perfumes
          or harsh chemicals. Each sachet is handmade in small batches using
          real cedar chips, dried botanicals, and carefully blended essential
          oils designed for drawers, closets, cars, and storage spaces.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          We focus on rustic simplicity. No fillers, no mass production, and
          no overpowering scents. Every blend starts with real ingredients
          like cedar, orange peel, rosemary, and clove, paired with essential
          oils that enhance, not mask, their natural aroma.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Each sachet is made to feel personal and last. Inspired by cabin
          fires, clean linens, and quiet pine forests, they are meant to bring
          subtle comfort to the spaces you open every day.
        </p>

        <p className="text-lg leading-relaxed">
          Thank you for supporting handmade goods, small-batch craftsmanship,
          and simple, natural living.
        </p>
      </div>
    </main>
  );
}
