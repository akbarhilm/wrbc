import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-signal font-display text-lg font-extrabold text-ink">
              W
            </span>
            <span className="font-display text-lg font-bold">WRBC</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            WRBC — mitra instalasi CCTV, solusi IT, kitchen set, dan
            material bangunan untuk rumah, ruko, dan properti usaha Anda.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-signal">
            Layanan
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li>
              <Link href="/layanan#cctv" className="hover:text-signal">
                Instalasi CCTV
              </Link>
            </li>
            <li>
              <Link href="/layanan#it" className="hover:text-signal">
                Solusi IT
              </Link>
            </li>
            <li>
              <Link href="/layanan#kitchen-set" className="hover:text-signal">
                Kitchen Set
              </Link>
            </li>
            <li>
              <Link href="/layanan#material" className="hover:text-signal">
                Material Bangunan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-signal">
            Perusahaan
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li>
              <Link href="/tentang" className="hover:text-signal">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/portofolio" className="hover:text-signal">
                Portofolio
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:text-signal">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-signal">
            Hubungi Kami
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-signal" />
              <span>Kp Blok Salim RT 001/003 Desa kertajaya, Kecamatan Padalarang, Kabupaten Bandung Barat</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-signal" />
              <span>089-7787-9437</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-signal" />
              <span>wrbcwarungmbacctv@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="shrink-0 text-signal" />
              <span>Senin–Minggu, 09.00–19.00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="stripe-rule" />

      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-paper/50 md:flex-row">
        <p>© {new Date().getFullYear()} WRBC. Seluruh hak cipta dilindungi.</p>
        <p>Contoh company profile — dibuat dengan Next.js.</p>
      </div>
    </footer>
  );
}
