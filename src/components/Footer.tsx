"use client";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E9] text-center py-10 border-t border-gray-300 mt-20">
      <h2 className="text-2xl font-serif tracking-wide mb-2">EMBER & SAGE</h2>
      <p className="text-gray-700 mb-2">Handcrafted in Wilmington, NC</p>

      <p className="text-gray-700 mb-6">
        © 2025 Ember & Sage. All rights reserved.
      </p>

      {/* Blog Link */}
      <a
        href="/blog"
        className="text-gray-700 underline hover:text-black text-sm"
      >
        Blog
      </a>
    </footer>
  );
}
