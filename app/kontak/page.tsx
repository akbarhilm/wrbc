import type { LucideIcon } from "lucide-react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function KontakPage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-signal">
            Kontak
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl">
            Ceritakan kebutuhan Anda, kami hubungi balik
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-paper/70">
            Isi formulir di samping atau hubungi kami langsung. Untuk
            proyek CCTV dan material, survei lokasi akan dijadwalkan
            setelah kebutuhan awal Anda kami terima.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <div className="space-y-6">
              <InfoRow
                icon={MapPin}
                label="Alamat"
                value="Kp Blok Salim RT 001/003 Desa kertajaya, Kecamatan Padalarang, Kabupaten Bandung Barat"
              />
              <InfoRow
                icon={Phone}
                label="Telepon / WhatsApp"
                value="089-7787-9437"
              />
              <InfoRow icon={Mail} label="Email" value="wrbcwarungmbacctv@gmail.com" />
              <InfoRow
                icon={Clock}
                label="Jam Operasional"
                value="Senin–Minggu, 09.00–19.00 WIB"
              />
            </div>

            <div className="mt-8 overflow-hidden border border-ink-line">
              <iframe
                title="Lokasi WRBC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.849775042628!2d107.49573717670668!3d-6.841053287780504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e38b3863d669%3A0xd571814f82062f73!2s(%20WRBC%20)%20Warung%20Mba%20CCTV!5e0!3m2!1sen!2sid!4v1790151489499!5m2!1sen!2sid"
                className="h-72 w-full grayscale invert-[0.9] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
          </div>

          <div className="border border-ink-line bg-ink-soft p-7 md:p-9">
            <h2 className="font-display text-lg font-bold">
              Kirim Kebutuhan Anda
            </h2>
            <p className="mt-1 font-body text-sm text-paper/60">
              Isi data singkat di bawah ini.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-ink-line pb-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-signal/40 text-signal">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-body text-xs uppercase tracking-wide text-paper/40">
          {label}
        </p>
        <p className="mt-1 font-body text-sm text-paper/85">{value}</p>
      </div>
    </div>
  );
}
