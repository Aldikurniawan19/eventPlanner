// components/features/ContactInquiry.tsx
'use client';

import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Headphones,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export const ContactInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventName: '',
    eventDate: '',
    venueLocation: '',
    riderNotes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Nama penanggung jawab (PIC) wajib diisi.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setStatus('error');
      setErrorMessage('Nomor telepon aktif wajib diisi minimal 8 digit.');
      return;
    }
    if (!formData.eventName.trim()) {
      setStatus('error');
      setErrorMessage('Nama acara atau agenda panggung wajib diisi.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  return (
    <section id="kontak" className="py-20 md:py-32 bg-white border-b border-[#e2e4e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="KONSULTASI TEKNIS & PEMESANAN"
          title="Jadwalkan Konsultasi Teknis Acara Anda"
          description="Kirimkan parameter produksi panggung atau technical rider artis Anda untuk dianalisis oleh tim audio specialist kami."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulir Sisi Kiri */}
          <div className="lg:col-span-7 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] p-7 sm:p-9">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-success/10 text-success border border-success/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#171a20]">
                  Permintaan Berhasil Dikirim
                </h3>
                <p className="text-sm text-[#5c5e62] max-w-md mx-auto leading-relaxed">
                  Data rider dan kebutuhan panggung Anda telah diterima. Tim audio specialist kami akan menghubungi nomor WhatsApp Anda dalam kurun waktu 2 jam kerja.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        phone: '',
                        eventName: '',
                        eventDate: '',
                        venueLocation: '',
                        riderNotes: '',
                      });
                    }}
                  >
                    Kirim Permintaan Lain
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-sm bg-danger/10 border border-danger/20 flex items-start gap-2.5 text-xs text-danger font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                      Nama Lengkap PIC *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Budi Pratama"
                      className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] placeholder:text-[#8e9094] focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="081234567890"
                      className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] placeholder:text-[#8e9094] focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                      Nama Acara *
                    </label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      placeholder="Festival Musik Arena 2026"
                      className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] placeholder:text-[#8e9094] focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                      Tanggal Pelaksanaan
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                    Lokasi / Gedung Acara
                  </label>
                  <input
                    type="text"
                    name="venueLocation"
                    value={formData.venueLocation}
                    onChange={handleChange}
                    placeholder="Stadion Madya Senayan / Grand Ballroom"
                    className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] placeholder:text-[#8e9094] focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold block">
                    Catatan Technical Rider / Kebutuhan Saluran Audio
                  </label>
                  <textarea
                    rows={4}
                    name="riderNotes"
                    value={formData.riderNotes}
                    onChange={handleChange}
                    placeholder="Tuliskan band pengisi, kebutuhan wireless mic, atau tautan file technical rider Google Drive/Dropbox..."
                    className="w-full px-4 py-2.5 rounded-sm bg-white border border-[#e2e4e6] text-sm text-[#171a20] placeholder:text-[#8e9094] focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full"
                  >
                    {status === 'submitting' ? 'Memproses...' : 'Kirim Permintaan Jadwal Konsultasi'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sisi Kanan: Kontak Dispatch Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] p-7 space-y-5">
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-primary" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#171a20] font-bold">
                  Hotline Dispatch Langsung 24 Jam
                </h3>
              </div>
              <p className="text-xs text-[#5c5e62] leading-relaxed">
                Untuk kebutuhan mendesak panggung H-1 atau penggantian unit panggung darurat, hubungi saluran radio dispatch kami:
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/6281198726500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-white border border-[#e2e4e6] flex items-center justify-between hover:border-primary transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-success" />
                    <div>
                      <div className="text-xs font-mono text-[#171a20] font-bold">
                        WhatsApp Emergency Dispatch
                      </div>
                      <div className="text-[11px] text-[#5c5e62]">
                        +62 811 9872 6500 (Respon Instan)
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary font-semibold group-hover:underline">
                    Hubungi
                  </span>
                </a>

                <div className="p-4 rounded-sm bg-white border border-[#e2e4e6] flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-[#171a20] font-bold">
                      Pengiriman File Rider PDF
                    </div>
                    <div className="text-[11px] text-[#5c5e62]">
                      rider@resonansi-audio.id
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-white border border-[#e2e4e6] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-[#171a20] font-bold">
                      Workshop Rigging & Depo
                    </div>
                    <div className="text-[11px] text-[#5c5e62]">
                      Kawasan Industri Pulogadung C-12, Jakarta Timur
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
