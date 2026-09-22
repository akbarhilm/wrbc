import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Code2,
  ChefHat,
  Layers,
  ShieldCheck,
  Timer,
  Wrench,
  ClipboardCheck,
  PhoneCall,
} from "lucide-react";

const services = [
  {
    id: "cctv",
    icon: Camera,
    title: "Instalasi CCTV",
    desc: "Survei lokasi, pemasangan kamera, dan konfigurasi akses monitoring jarak jauh untuk rumah, ruko, gudang, dan kantor.",
    tag: "Layanan Utama",
  },
  {
    id: "it",
    icon: Code2,
    title: "Solusi IT",
    desc: "Pembuatan website dan aplikasi, penjualan komputer serta periferal, sampai perawatan jaringan kantor.",
  },
  {
    id: "kitchen-set",
    icon: ChefHat,
    title: "Kitchen Set",
    desc: "Kitchen set custom sesuai ukuran dapur, dikerjakan bersama mitra pengrajin tepercaya kami.",
  },
  {
    id: "material",
    icon: Layers,
    title: "Material Bangunan",
    desc: "Penyediaan material bahan bangunan untuk proyek renovasi dan pembangunan, dari semen hingga rangka.",
  },
];

const stats = [
  { value: "120+", label: "Titik CCTV terpasang" },
  { value: "8", label: "Tahun melayani klien" },
  { value: "40+", label: "Klien rumah & usaha" },
  { value: "4", label: "Lini layanan terpadu" },
];

const process = [
  {
    step: "01",
    title: "Survei & Konsultasi",
    desc: "Tim kami datang langsung untuk memetakan kebutuhan titik kamera, jaringan, atau material sebelum membuat penawaran.",
  },
  {
    step: "02",
    title: "Penawaran & Perencanaan",
    desc: "Anda menerima rincian biaya, spesifikasi perangkat, dan jadwal pengerjaan sebelum pekerjaan dimulai.",
  },
  {
    step: "03",
    title: "Pemasangan",
    desc: "Teknisi memasang dan mengonfigurasi sistem sesuai jadwal, dengan rapi kabel dan pengujian di setiap titik.",
  },
  {
    step: "04",
    title: "Serah Terima & Purna Jual",
    desc: "Kami mendampingi pelatihan penggunaan sistem dan tetap siap dihubungi untuk perawatan setelah proyek selesai.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-line">
        <div className="scan-grid absolute inset-0 opacity-[0.35]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2">
          <HeroMark />
        </div>
        <div className="relative mx-auto max-w-content px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-medium uppercase tracking-wide text-signal">
              CV WRBC
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] text-balance md:text-6xl">
              Keamanan dan properti Anda, ditangani satu mitra terpercaya.
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-paper/70 md:text-lg">
              WRBC memulai dari jasa instalasi CCTV, lalu berkembang menjadi
              mitra solusi IT, kitchen set, dan material bangunan — supaya
              proyek properti Anda cukup dikerjakan satu pintu.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/kontak"
                className="bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-dim"
              >
                Konsultasi Gratis
              </Link>
              <Link
                href="/layanan"
                className="border border-paper/30 px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        </div>
        <div className="stripe-rule" />
      </section>

      {/* Stats */}
      <section className="border-b border-ink-line bg-ink-soft">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-signal md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-body text-sm text-paper/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-content px-6 py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Empat lini layanan, satu tim yang sama
          </h2>
          <p className="mt-4 font-body text-paper/70">
            Instalasi CCTV adalah fondasi kami. Dari sana, WRBC merangkap
            kebutuhan IT, dapur, dan material bangunan yang biasanya
            dikerjakan vendor berbeda-beda.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-line bg-ink-line md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Link
                href={`/layanan#${svc.id}`}
                key={svc.id}
                className="group flex flex-col bg-ink p-7 transition-colors hover:bg-ink-soft"
              >
                {svc.tag && (
                  <span className="mb-4 inline-block w-fit border border-signal/50 px-2 py-0.5 font-body text-[11px] font-medium text-signal">
                    {svc.tag}
                  </span>
                )}
                <Icon
                  className="mb-5 text-signal transition-transform group-hover:-translate-y-0.5"
                  size={28}
                  strokeWidth={1.75}
                />
                <h3 className="font-display text-lg font-semibold">
                  {svc.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-paper/60">
                  {svc.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-ink-line bg-ink-soft">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Kenapa klien bertahan dengan WRBC
            </h2>
            <p className="mt-4 max-w-md font-body text-paper/70">
              Sebagian besar klien kami mulai dari proyek CCTV, lalu kembali
              lagi untuk kebutuhan IT, dapur, atau renovasi berikutnya.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <Reason
              icon={ShieldCheck}
              title="Garansi pemasangan"
              desc="Setiap pekerjaan CCTV dan jaringan disertai garansi teknis, bukan sekadar garansi perangkat."
            />
            <Reason
              icon={Timer}
              title="Jadwal yang ditepati"
              desc="Estimasi waktu pengerjaan disampaikan di awal dan kami pegang, termasuk untuk proyek gabungan."
            />
            <Reason
              icon={Wrench}
              title="Teknisi berpengalaman"
              desc="Tim lapangan terbiasa menangani instalasi rumah tinggal hingga gedung usaha multi-lantai."
            />
            <Reason
              icon={ClipboardCheck}
              title="Satu penawaran, semua kebutuhan"
              desc="CCTV, IT, kitchen set, dan material bisa digabung dalam satu rencana dan satu penawaran harga."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-content px-6 py-24">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Alur kerja kami
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              <p className="font-display text-sm font-bold text-signal">
                {p.step}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-paper/60">
                {p.desc}
              </p>
              {i < process.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-ink-line md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="stripe-rule" />
        <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Punya rencana proyek dalam waktu dekat?
            </h2>
            <p className="mt-2 max-w-md font-body text-paper/70">
              Ceritakan kebutuhan Anda, tim kami akan menjadwalkan survei
              lokasi dan menyiapkan penawaran.
            </p>
          </div>
          <Link
            href="/kontak"
            className="flex items-center gap-2 bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-dim"
          >
            <PhoneCall size={18} />
            Hubungi Tim Kami
          </Link>
        </div>
      </section>
    </>
  );
}

function Reason({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <Icon size={24} strokeWidth={1.75} className="text-signal" />
      <h3 className="mt-3 font-display text-base font-semibold">{title}</h3>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-paper/60">
        {desc}
      </p>
    </div>
  );
}

function HeroMark() {
  return (
    <svg
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full opacity-90"
      aria-hidden="true"
    >
      <circle cx="250" cy="300" r="220" stroke="#2C2C28" strokeWidth="1" />
      <circle cx="250" cy="300" r="150" stroke="#2C2C28" strokeWidth="1" />
      <circle cx="250" cy="300" r="80" stroke="#F2B400" strokeWidth="1.5" />
      {/* simplified camera body */}
      <g transform="translate(150,250)">
        <rect x="0" y="30" width="140" height="60" rx="6" fill="#181816" stroke="#F2B400" strokeWidth="2" />
        <circle cx="140" cy="60" r="26" fill="#0E0E0D" stroke="#F2B400" strokeWidth="2" />
        <circle cx="140" cy="60" r="10" fill="#F2B400" />
        <rect x="-10" y="46" width="14" height="28" fill="#181816" stroke="#F2B400" strokeWidth="2" />
      </g>
      <line x1="60" y1="480" x2="440" y2="480" stroke="#2C2C28" strokeWidth="1" />
      <line x1="250" y1="60" x2="250" y2="540" stroke="#2C2C28" strokeWidth="1" strokeDasharray="4 6" />
    </svg>
  );
}
