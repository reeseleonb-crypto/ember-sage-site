"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-[#f5f2ec] border-b border-gray-300 py-4 px-6 flex justify-between items-center">
      <Link
        href="/"
        className="text-3xl font-bold"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        EMBER & SAGE
      </Link>

      <nav className="flex gap-6 text-lg items-center">
        <Link href="/shop" className="hover:opacity-70">Shop</Link>

        {/* Spring Scents with NEW badge */}
        <Link href="/spring" className="relative hover:opacity-80">
          <span>Spring Scents</span>
          <span
            className="absolute -top-2 -right-5 text-[10px] px-1.5 py-0.5 bg-green-600 text-white font-bold rotate-12 rounded shadow"
          >
            NEW
          </span>
        </Link>

        <Link href="/about" className="hover:opacity-70">About</Link>
        <Link href="/contact" className="hover:opacity-70">Contact</Link>
      </nav>
    </header>
  );
}
