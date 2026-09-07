// components/features/TeslaEditorialSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const TeslaEditorialSection: React.FC = () => {
  return (
    <div id="performa" className="w-full bg-white text-[#171a20]">
      {/* Editorial Story 1: Ganti Tata Suara Konvensional (Replace the Grid) */}
      <section className="py-20 md:py-32 border-b border-[#e2e4e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5c5e62] font-semibold block">
                01 / EFISIENSI DAYA & GELOMBANG
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#171a20] leading-tight">
                Ganti Sistem Konvensional yang Boros Daya
              </h2>
              <p className="text-base text-[#5c5e62] leading-relaxed">
                Tumpukan speaker lawas membuang energi ke arah dinding dan memicu pantulan gema (comb filtering). Arsitektur Megasound menggabungkan modul line array bersudut presisi yang membentuk gelombang silindris koheren—menjangkau dua kali lebih jauh dengan konsumsi daya listrik 40% lebih hemat.
              </p>
              <div className="pt-2">
                <a href="#konfigurator">
                  <Button variant="outline" size="md">
                    Hitung Penghematan Daya
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-sm bg-[#171a20] p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                    AKUSTIK WAVE-FRONT PERFORMA
                  </span>
                  <span className="text-xs font-mono text-primary font-semibold">
                    DISPERSI KOHEREN
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono">
                  <div className="p-4 rounded-sm bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/50 uppercase block">Efisiensi Sudut</span>
                    <span className="text-2xl font-bold text-white mt-1 block">110° x 10°</span>
                    <span className="text-[10px] text-white/40">Fokus Tanpa Gema Samping</span>
                  </div>

                  <div className="p-4 rounded-sm bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/50 uppercase block">Reduksi SPL Jauh</span>
                    <span className="text-2xl font-bold text-accent mt-1 block">-3 dB</span>
                    <span className="text-[10px] text-white/40">Per Kelipatan Jarak (vs -6dB)</span>
                  </div>
                </div>

                <p className="text-xs font-sans text-white/60 leading-relaxed">
                  Teknologi Panflex wave sculpture menyalurkan energi akustik tepat ke telinga penonton, bukan ke langit-langit atau panggung belakang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story 2: Integrasi Siap Pakai Cepat (Turnkey Architecture) */}
      <section className="py-20 md:py-32 border-b border-[#e2e4e6] bg-[#f4f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-sm bg-white border border-[#e2e4e6] p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#e2e4e6]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#5c5e62]">
                    WAKTU SETUP & INTEGRASI
                  </span>
                  <span className="text-xs font-mono text-success font-semibold">
                    TURNKEY DEPLOYMENT
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 font-mono text-center">
                  <div className="p-3 bg-[#f4f4f6] rounded-sm border border-[#e2e4e6]">
                    <div className="text-[10px] text-[#5c5e62] uppercase">Waktu Rigging</div>
                    <div className="text-2xl font-bold text-[#171a20] mt-0.5">&lt; 3.5 jam</div>
                    <div className="text-[9px] text-[#8e9094]">Siap Soundcheck</div>
                  </div>

                  <div className="p-3 bg-[#f4f4f6] rounded-sm border border-[#e2e4e6]">
                    <div className="text-[10px] text-[#5c5e62] uppercase">Kabel Audio Snake</div>
                    <div className="text-2xl font-bold text-primary mt-0.5">1x Fiber</div>
                    <div className="text-[9px] text-[#8e9094]">Neutrik opticalCON</div>
                  </div>

                  <div className="p-3 bg-[#f4f4f6] rounded-sm border border-[#e2e4e6]">
                    <div className="text-[10px] text-[#5c5e62] uppercase">Penyelarasan Fasa</div>
                    <div className="text-2xl font-bold text-[#171a20] mt-0.5">0.1 ms</div>
                    <div className="text-[9px] text-[#8e9094]">SMAART V9 DSP</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#5c5e62]">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Seluruh rak power distro, amplifier DSP Pascal, dan switch Dante telah terintegrasi di dalam flight-case tahan guncangan.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Uji mandiri perangkat (automated pre-flight check) mendeteksi kondisi driver speaker sebelum panggung dibuka.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5c5e62] font-semibold block">
                02 / INSTALASI PLUG-AND-PLAY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#171a20] leading-tight">
                Sistem Siap Pakai. Tanpa Kerumitan Kabel.
              </h2>
              <p className="text-base text-[#5c5e62] leading-relaxed">
                Setiap sistem dikonfigurasi dan diuji menyeluruh di depo workshop sebelum loading ke lokasi. Cukup hubungkan kabel daya utama dan satu helai kabel serat optik ganda untuk menyalurkan 64 saluran audio 96kHz tanpa degradasi sinyal.
              </p>
              <div className="pt-2">
                <a href="#spesifikasi">
                  <Button variant="secondary" size="md">
                    Lihat Lembar Spesifikasi
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story 3: Keamanan Rigging & Redundansi (Safe to Operate) */}
      <section id="keamanan" className="py-20 md:py-32 border-b border-[#e2e4e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5c5e62] font-semibold block">
                03 / KEAMANAN OPERASIONAL MUTLAK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#171a20] leading-tight">
                Aman Dioperasikan. Standar Keselamatan 8:1.
              </h2>
              <p className="text-base text-[#5c5e62] leading-relaxed">
                Keselamatan panggung adalah prioritas utama. Seluruh shackle, sling baja gantung, dan motor hoist dihitung beban kerjanya dengan faktor keamanan 8:1. Konsol FOH diproteksi sistem UPS baterai ganda agar terbebas dari ancaman genset mati mendadak saat konser berlangsung.
              </p>
              <div className="pt-2">
                <a href="#kontak">
                  <Button variant="outline" size="md">
                    Minta Dokumen Keselamatan Rigging
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] space-y-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 className="text-base font-semibold text-[#171a20]">
                    Sertifikasi Rigging K3 Resmi
                  </h3>
                  <p className="text-xs text-[#5c5e62] leading-relaxed">
                    Setiap flying line array diawasi oleh rigger bersertifikat Depnaker K3 dengan perhitungan daya dukung truss atap panggung.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] space-y-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-base font-semibold text-[#171a20]">
                    Redundansi Daya Listrik UPS
                  </h3>
                  <p className="text-xs text-[#5c5e62] leading-relaxed">
                    Tegangan konsol FOH dan DSP disaring isolator transformator dan UPS online 0ms switchover untuk stabilitas tanpa interupsi.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] space-y-3">
                  <Activity className="w-6 h-6 text-primary" />
                  <h3 className="text-base font-semibold text-[#171a20]">
                    Sensor Termal & Limiter RMS
                  </h3>
                  <p className="text-xs text-[#5c5e62] leading-relaxed">
                    Transducer speaker dipantau secara real-time dari konsol teknisi untuk mencegah lonjakan panas koil (thermal burnout).
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] space-y-3">
                  <Cpu className="w-6 h-6 text-primary" />
                  <h3 className="text-base font-semibold text-[#171a20]">
                    Frekuensi RF Anti-Interferensi
                  </h3>
                  <p className="text-xs text-[#5c5e62] leading-relaxed">
                    Mikrofon Shure Axient Digital memindai spektrum RF secara berkala dan berpindah channel secara instan bila terdeteksi sinyal liar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
