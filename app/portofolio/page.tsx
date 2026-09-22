import { Camera, Code2, ChefHat, Layers } from "lucide-react";

const projects = [
  {
    category: "CCTV",
    icon: Camera,
    title: "Sistem keamanan ruko 3 lantai",
    desc: "12 titik kamera dengan akses monitoring gabungan untuk tiga penyewa ruko.",
  },
  {
    category: "CCTV",
    icon: Camera,
    title: "Pemantauan gudang distribusi",
    desc: "Kamera area bongkar-muat terintegrasi dengan penyimpanan rekaman 30 hari.",
  },
  {
    category: "Solusi IT",
    icon: Code2,
    title: "Website katalog produk UMKM",
    desc: "Website company profile dan katalog untuk usaha material bangunan lokal.",
  },
  {
    category: "Solusi IT",
    icon: Code2,
    title: "Aplikasi pencatatan stok toko",
    desc: "Aplikasi web sederhana untuk mencatat keluar-masuk barang harian.",
  },
  {
    category: "Kitchen Set",
    icon: ChefHat,
    title: "Kitchen set dapur bentuk L",
    desc: "Kabinet atas-bawah custom untuk dapur rumah tinggal tipe 45.",
  },
  {
    category: "Material Bangunan",
    icon: Layers,
    title: "Pasokan material renovasi ruko",
    desc: "Pengiriman bertahap material struktur dan finishing selama proyek berjalan.",
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
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="flex flex-col bg-ink">
                <div className="scan-grid relative flex h-36 items-center justify-center border-b border-ink-line bg-ink-soft">
                  <Icon size={36} strokeWidth={1.5} className="text-signal" />
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
            );
          })}
        </div>
      </section>
    </>
  );
}
