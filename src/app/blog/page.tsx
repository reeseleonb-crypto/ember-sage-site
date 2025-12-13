export const metadata = {
  title: "Blog | Ember & Sage",
};

const posts = [
  { title: "The Real Benefits of Using Cedar Sachet Bags in Your Home", slug: "cedar-sachet-benefits", excerpt: "Why cedar sachet bags freshen spaces naturally without chemicals." },
  { title: "Why Natural Scents Feel Better Than Synthetic Fresheners", slug: "natural-vs-synthetic-scents", excerpt: "A simple guide to why natural home fragrances feel cleaner." },
  { title: "How Long Do Sachet Bags Last? What to Expect", slug: "how-long-do-sachets-last", excerpt: "Understanding how long sachet bags stay fresh in your home." },
  { title: "Smart Places to Use Sachet Bags That People Overlook", slug: "sachet-uses", excerpt: "Practical, overlooked places where sachet bags make a big difference." },
  { title: "What Makes Cedar the Best Filler for Long-Lasting Scented Sachets", slug: "why-cedar-filler", excerpt: "See why cedar is the top choice for holding essential oils." },
  { title: "How Essential Oils Interact With Wood for Longer Scent Life", slug: "essential-oils-and-wood", excerpt: "Learn how essential oils bind to cedar for slow scent release." },
  { title: "Natural vs. Synthetic Fragrance: What Is Better for Your Home?", slug: "natural-vs-synthetic", excerpt: "Compare natural oils to synthetic air fresheners." },
  { title: "Ways to Refresh an Old Sachet Bag Without Replacing It", slug: "refresh-old-sachets", excerpt: "Bring faded sachets back to life with simple steps." },
  { title: "The Best Scents for Creating a Cozy Home Environment", slug: "cozy-home-scents", excerpt: "Cedar blends that create warmth and nostalgia." },
  { title: "How to Keep Linen Closets Smelling Fresh All Year", slug: "fresh-linen-closet", excerpt: "Use cedar sachets to keep linens fresh for months." },
  { title: "Drawer Sachets: Why They Work Better Than Sprays or Plug-Ins", slug: "drawer-sachets", excerpt: "Why cedar sachets outperform sprays in drawer spaces." },
  { title: "The Hidden Benefits of Cedar in Wardrobes and Storage Bins", slug: "cedar-storage-benefits", excerpt: "Protect stored clothes with natural cedar." },
  { title: "Why Cedar Chips Hold Essential Oils Better Than Dried Flowers", slug: "cedar-vs-botanicals", excerpt: "See why cedar outperforms botanicals for scent longevity." },
  { title: "How to Choose the Right Scent for Different Rooms", slug: "choosing-scents", excerpt: "Match scents to each room&apos;s purpose and mood." },
  { title: "A Beginner&apos;s Guide to Using Sachet Bags", slug: "sachet-beginner-guide", excerpt: "Start using cedar sachets the easy way." },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}



