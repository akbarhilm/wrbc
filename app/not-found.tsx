import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-32">
      <span className="font-display text-sm font-medium uppercase tracking-wide text-signal">
        404
      </span>
      <h1 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-md font-body text-paper/70">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak
        tersedia.
      </p>
      <Link
        href="/"
        className="mt-8 bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-dim"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
