import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Code2,
  ChefHat,
  Layers,
  Eye,
  Wifi,
  HardDrive,
  Smartphone,
  Globe,
  MonitorSmartphone,
  Cpu,
  Ruler,
  PaintBucket,
  Boxes,
  HardHat,
  Palette,
  Users,
} from "lucide-react";

export default function LayananPage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-signal">
            Layanan
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl">
            Empat layanan, satu koordinasi kerja
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-paper/70">
            Instalasi CCTV tetap menjadi inti pekerjaan kami. Tiga layanan
            lainnya dikembangkan untuk menjawab kebutuhan yang biasanya
            muncul bersamaan: jaringan dan perangkat kerja, dapur baru, dan
            material renovasi.
          </p>
        </div>
      </section>

      {/* CCTV */}
      <section id="cctv" className="scroll-mt-20 border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[auto,1fr]">
            <div className="flex items-start">
              <span className="flex h-14 w-14 items-center justify-center bg-signal text-ink">
                <Camera size={28} strokeWidth={1.75} />
              </span>
            </div>
            <div>
              <span className="inline-block border border-signal/50 px-2 py-0.5 font-body text-[11px] font-medium text-signal">
                Layanan Utama
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold">
                Instalasi CCTV
              </h2>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-paper/70">
                Pemasangan sistem CCTV untuk rumah tinggal, ruko, gudang,
                dan kantor kecil-menengah — dari pemilihan titik kamera
                sampai akses monitoring dari ponsel.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <FeatureItem
                  icon={Eye}
                  title="Survei titik kamera"
                  desc="Menentukan sudut pandang dan jumlah kamera sesuai bentuk bangunan dan area rawan."
                />
                <FeatureItem
                  icon={Wifi}
                  title="Kamera kabel & wireless"
                  desc="Pilihan sistem menyesuaikan kondisi jaringan dan akses kabel di lokasi."
                />
                <FeatureItem
                  icon={HardDrive}
                  title="Penyimpanan rekaman (DVR/NVR)"
                  desc="Konfigurasi kapasitas penyimpanan sesuai kebutuhan lama rekaman."
                />
                <FeatureItem
                  icon={Smartphone}
                  title="Monitoring dari ponsel"
                  desc="Pengaturan akses jarak jauh sehingga rekaman dapat dipantau dari luar lokasi."
                />
              </div>

              <p className="mt-8 font-body text-sm text-paper/50">
                Cocok untuk: rumah tinggal, ruko, gudang, minimarket, area
                parkir, dan kantor kecil-menengah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT */}
      <section id="it" className="scroll-mt-20 border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[auto,1fr]">
            <div className="flex items-start">
              <span className="flex h-14 w-14 items-center justify-center bg-signal text-ink">
                <Code2 size={28} strokeWidth={1.75} />
              </span>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">Solusi IT</h2>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-paper/70">
                Kebutuhan digital dan perangkat kerja, biasanya berjalan
                beriringan dengan proyek jaringan CCTV yang sedang kami
                kerjakan.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <FeatureItem
                  icon={Globe}
                  title="Pembuatan website"
                  desc="Website company profile, katalog produk, hingga sistem pemesanan sederhana."
                />
                <FeatureItem
                  icon={MonitorSmartphone}
                  title="Aplikasi web"
                  desc="Aplikasi internal seperti pencatatan stok, absensi, atau laporan operasional."
                />
                <FeatureItem
                  icon={Cpu}
                  title="Komputer & periferal"
                  desc="Penyediaan unit komputer, printer, dan perangkat pendukung kantor."
                />
                <FeatureItem
                  icon={Wifi}
                  title="Jaringan kantor"
                  desc="Penataan jaringan internet dan kabel data yang juga menunjang sistem CCTV."
                />
              </div>

              <p className="mt-8 font-body text-sm text-paper/50">
                Cocok untuk: usaha kecil-menengah yang butuh kehadiran
                online atau merapikan sistem kerja internal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen set */}
      <section id="kitchen-set" className="scroll-mt-20 border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[auto,1fr]">
            <div className="flex items-start">
              <span className="flex h-14 w-14 items-center justify-center bg-signal text-ink">
                <ChefHat size={28} strokeWidth={1.75} />
              </span>
            </div>
            <div>
              <span className="inline-block border border-paper/20 px-2 py-0.5 font-body text-[11px] font-medium text-paper/60">
                Bekerja sama dengan mitra pengrajin
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold">
                Kitchen Set
              </h2>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-paper/70">
                Kitchen set custom sesuai ukuran dan gaya dapur, dikerjakan
                bersama pengrajin mitra yang telah kami kurasi. WRBC
                menangani konsultasi dan koordinasi pemasangan.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <FeatureItem
                  icon={Ruler}
                  title="Ukur & desain sesuai ruang"
                  desc="Pengukuran langsung di lokasi untuk memastikan tata letak dapur sesuai kebutuhan."
                />
                <FeatureItem
                  icon={PaintBucket}
                  title="Pilihan material & finishing"
                  desc="Beberapa pilihan bahan dan warna finishing menyesuaikan anggaran dan selera."
                />
                <FeatureItem
                  icon={Boxes}
                  title="Kabinet atas & bawah"
                  desc="Perencanaan penyimpanan yang memaksimalkan ruang dapur yang tersedia."
                />
                <FeatureItem
                  icon={Users}
                  title="Koordinasi satu kontak"
                  desc="Komunikasi tetap melalui tim WRBC, meski pengerjaan dibantu mitra pengrajin."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material bangunan */}
      <section id="material" className="scroll-mt-20">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[auto,1fr]">
            <div className="flex items-start">
              <span className="flex h-14 w-14 items-center justify-center bg-signal text-ink">
                <Layers size={28} strokeWidth={1.75} />
              </span>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold">
                Material Bangunan
              </h2>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-paper/70">
                Penyediaan material bahan bangunan untuk mendukung proyek
                renovasi atau pembangunan yang sedang berjalan bersama
                WRBC, maupun pemesanan terpisah.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <FeatureItem
                  icon={HardHat}
                  title="Bahan struktur"
                  desc="Semen, pasir, besi, dan bata untuk kebutuhan pondasi hingga dinding."
                />
                <FeatureItem
                  icon={Palette}
                  title="Bahan finishing"
                  desc="Keramik, cat, dan material penutup lain untuk tahap akhir pengerjaan."
                />
                <FeatureItem
                  icon={Ruler}
                  title="Estimasi kebutuhan"
                  desc="Perhitungan jumlah material berdasarkan luas dan spesifikasi proyek."
                />
                <FeatureItem
                  icon={Boxes}
                  title="Pengiriman terjadwal"
                  desc="Pengiriman material disesuaikan dengan tahap pengerjaan di lokasi."
                />
              </div>

              <p className="mt-8 font-body text-sm text-paper/50">
                Cocok untuk: renovasi rumah, pembangunan ruko, dan proyek
                yang sudah berjalan bersama layanan lain WRBC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stripe-rule" />

      <section className="mx-auto max-w-content px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          Butuh lebih dari satu layanan sekaligus?
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-body text-paper/70">
          Sampaikan kebutuhan Anda dalam satu pesan, tim kami akan
          menyusun rencana dan penawaran gabungan.
        </p>
        <Link
          href="/kontak"
          className="mt-6 inline-block bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-dim"
        >
          Ajukan Kebutuhan Anda
        </Link>
      </section>
    </>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-signal" />
      <div>
        <h3 className="font-body text-sm font-semibold">{title}</h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-paper/55">
          {desc}
        </p>
      </div>
    </div>
  );
}
