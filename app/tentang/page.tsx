import { Target, Compass, Users, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Kerja sesuai penawaran",
    desc: "Spesifikasi dan biaya yang disepakati di awal adalah yang dikerjakan di lapangan, tanpa biaya siluman.",
  },
  {
    icon: Compass,
    title: "Transparan soal proses",
    desc: "Klien tahu tahap pekerjaan yang sedang berjalan, termasuk kendala teknis bila ada.",
  },
  {
    icon: Users,
    title: "Tim yang sama, dari survei sampai purna jual",
    desc: "Teknisi yang datang survei adalah yang bertanggung jawab hingga proyek selesai.",
  },
  {
    icon: HeartHandshake,
    title: "Mitra jangka panjang",
    desc: "Kami merawat hubungan dengan klien untuk kebutuhan lanjutan, bukan proyek sekali jalan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-signal">
            Tentang Kami
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl">
            Dari satu titik kamera, menjadi mitra properti terpadu
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-paper/70">
            CV WRBC berawal dari jasa instalasi CCTV untuk rumah dan usaha
            kecil di sekitar Bandung. Seiring waktu, klien mulai bertanya
            soal kebutuhan lain — jaringan kantor, dapur baru, hingga
            material renovasi. Dari sana kami membangun tim dan kerja sama
            yang memungkinkan keempatnya ditangani dalam satu koordinasi.
          </p>
        </div>
      </section>

      <section className="stripe-rule" />

      {/* Vision & mission */}
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="border border-ink-line p-8">
            <h2 className="font-display text-xl font-bold text-signal">
              Visi
            </h2>
            <p className="mt-4 font-body leading-relaxed text-paper/75">
              Menjadi mitra properti terpadu yang paling diandalkan untuk
              rumah tinggal dan usaha kecil-menengah, dimulai dari keamanan
              lewat CCTV.
            </p>
          </div>
          <div className="border border-ink-line p-8">
            <h2 className="font-display text-xl font-bold text-signal">
              Misi
            </h2>
            <ul className="mt-4 space-y-3 font-body leading-relaxed text-paper/75">
              <li>
                Menyediakan instalasi CCTV yang rapi, terdokumentasi, dan
                mudah dirawat.
              </li>
              <li>
                Memperluas layanan IT, kitchen set, dan material bangunan
                dengan standar kerja yang sama.
              </li>
              <li>
                Menjaga hubungan jangka panjang lewat purna jual yang
                responsif.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-content px-6 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Cara kami bekerja
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4">
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    className="mt-1 shrink-0 text-signal"
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-paper/60">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership note re: kitchen set */}
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="border border-signal/40 p-8 md:p-10">
          <h2 className="font-display text-xl font-bold">
            Tentang layanan kitchen set
          </h2>
          <p className="mt-3 max-w-2xl font-body leading-relaxed text-paper/70">
            Kitchen set dikerjakan melalui kerja sama dengan pengrajin mitra
            yang sudah kami kurasi. WRBC menangani konsultasi ukuran,
            koordinasi jadwal, dan pengawasan pemasangan, sehingga klien
            tetap berurusan dengan satu kontak.
          </p>
        </div>
      </section>
    </>
  );
}
