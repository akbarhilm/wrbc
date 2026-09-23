import Image from "next/image";

const projects = [
  {
    category: "CCTV",
    image: "/portofolio/cctv-4.jpeg",
    title: "Sistem keamanan toko",
    desc: "4 titik kamera atau lebih dengan akses monitoring gabungan untuk toko.",
  },
  {
    category: "CCTV",
    image: "/portofolio/cctv-sekolah.jpeg",
    title: "Pemantauan sekolah",
    desc: "Kamera area kelas, koridor dan parkiran terintegrasi dengan penyimpanan rekaman yang dapat disesuaikan.",
  },
  {
    category: "Solusi IT",
    image: "/portofolio/ecom.png",
    title: "Website katalog produk UMKM",
    desc: "Website company profile dan katalog untuk usaha anda.",
  },
  {
    category: "Solusi IT",
    image: "/portofolio/pos.png",
    title: "Aplikasi pencatatan stok toko dan kasir",
    desc: "Aplikasi web untuk mencatat keluar-masuk barang harian dan point of sale.",
  },
  {
    category: "Kitchen Set",
    image: "/portofolio/kitchenset.jpeg",
    title: "Kitchen set dapur bentuk L",
    desc: "Kabinet atas-bawah custom untuk dapur rumah tinggal.",
  },
  {
    category: "Furniture",
    image: "/portofolio/mejalemari.jpeg",
    title: "Meja dan lemari",
    desc: "Kabinet custom untuk ruang kerja dan penyimpanan rumah tinggal.",
  },
];

export default function PortofolioPage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-signal">
            Portofolio
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl">
            Contoh pekerjaan dari empat lini layanan
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-paper/70">
            Ini adalah contoh company profile, jadi proyek di bawah masih
            berupa ilustrasi kategori pekerjaan. Ganti dengan foto dan
            detail proyek Anda yang sebenarnya sebelum situs dipublikasikan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
              <article key={p.title} className="flex flex-col bg-ink">
                <div className="relative h-48 w-full overflow-hidden border-b border-ink-line bg-ink-soft">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  objectFit="contain"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit font-body text-[11px] font-medium uppercase tracking-wide text-signal">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-paper/60">
                    {p.desc}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </>
  );
}
