"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6281234567890"; // TODO: ganti dengan nomor WhatsApp bisnis asli

const services = [
  "Instalasi CCTV",
  "Solusi IT",
  "Kitchen Set",
  "Material Bangunan",
  "Gabungan beberapa layanan",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const waLink = () => {
    const text = [
      `Halo WRBC, saya ${name || "-"}.`,
      `Kontak: ${contact || "-"}`,
      `Tertarik dengan: ${service}`,
      message ? `Pesan: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-body text-sm text-paper/70">
          Nama
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama lengkap Anda"
          className="mt-2 w-full border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/30 focus:border-signal"
        />
      </div>

      <div>
        <label htmlFor="contact" className="font-body text-sm text-paper/70">
          Nomor WhatsApp atau Email
        </label>
        <input
          id="contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="08xx-xxxx-xxxx atau email@contoh.com"
          className="mt-2 w-full border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/30 focus:border-signal"
        />
      </div>

      <div>
        <label htmlFor="service" className="font-body text-sm text-paper/70">
          Layanan yang dibutuhkan
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-paper outline-none focus:border-signal"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-sm text-paper/70">
          Ceritakan kebutuhan Anda
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Contoh: rumah 2 lantai butuh 6 titik CCTV, lokasi di Bandung"
          className="mt-2 w-full resize-none border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/30 focus:border-signal"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-dim"
      >
        Kirim via WhatsApp
      </button>
      <p className="font-body text-xs text-paper/40">
        Tombol ini akan membuka WhatsApp dengan pesan yang sudah terisi
        otomatis dari isian di atas.
      </p>
    </form>
  );
}
