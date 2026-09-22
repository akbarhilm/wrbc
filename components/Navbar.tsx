"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center bg-signal font-display text-lg font-extrabold text-ink">
            W
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            WRBC
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-paper/80 transition-colors hover:text-signal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="border border-signal px-4 py-2 font-body text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-ink"
          >
            Minta Penawaran
          </Link>
        </nav>

        <button
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-paper md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-ink-line bg-ink px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-line py-3 font-body text-sm text-paper/80 last:border-b-0 hover:text-signal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            onClick={() => setOpen(false)}
            className="mt-4 border border-signal px-4 py-2 text-center font-body text-sm font-medium text-signal hover:bg-signal hover:text-ink"
          >
            Minta Penawaran
          </Link>
        </nav>
      )}
    </header>
  );
}
