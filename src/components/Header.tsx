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

      <nav className="flex gap-6 text-lg">
        <Link href="/shop" className="hover:opacity-70">Shop</Link>
        <Link href="/about" className="hover:opacity-70">About</Link>
        <Link href="/contact" className="hover:opacity-70">Contact</Link>
      </nav>
    </header>
  );
}
