export const metadata = {
  title: "Blog | Ember & Sage",
};

const posts = [
  { title: "The Real Benefits of Using Cedar Sachet Bags in Your Home", slug: "cedar-sachet-benefits", excerpt: "Why cedar sachet bags freshen spaces naturally without chemicals." },
  { title: "Why Natural Scents Feel Better Than Synthetic Fresheners", slug: "natural-vs-synthetic-scents", excerpt: "A simple guide to why natural home fragrances feel cleaner." },
  { title: "How Long Do Sachet Bags Last? What to Expect", slug: "how-long-do-sachets-last", excerpt: "Understanding how long sachet bags stay fresh in your home." },
  { title: "Smart Places to Use Sachet Bags That People Overlook", slug: "sachet-uses", excerpt: "Practical, overlooked places where sachet bags make a big difference." },
  { title: "What to Look for When Buying a Sachet Bag", slug: "buying-sachet-bags", excerpt: "How to choose a sachet bag that actually works." }
];

export default function BlogIndex() {
  return (
    <main className="py-16 bg-[#F5F0E9]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-serif mb-10">Blog</h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
              <h2 className="text-2xl font-serif mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
