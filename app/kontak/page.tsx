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
                value="Jl. Contoh Raya No. 123, Bandung, Jawa Barat"
              />
              <InfoRow
                icon={Phone}
                label="Telepon / WhatsApp"
                value="+62 812-3456-7890"
              />
              <InfoRow icon={Mail} label="Email" value="halo@wrbc.co.id" />
              <InfoRow
                icon={Clock}
                label="Jam Operasional"
                value="Senin–Sabtu, 08.00–17.00 WIB"
              />
            </div>

            <div className="mt-8 overflow-hidden border border-ink-line">
              <iframe
                title="Lokasi WRBC"
                src="https://www.google.com/maps?q=Bandung,Jawa+Barat&output=embed"
                className="h-72 w-full grayscale invert-[0.9] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 font-body text-xs text-paper/40">
              Peta contoh — ganti dengan titik lokasi kantor Anda yang
              sebenarnya.
            </p>
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
