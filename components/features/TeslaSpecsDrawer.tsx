// components/features/TeslaSpecsDrawer.tsx
'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, FileText, Download } from 'lucide-react';

interface SpecCategory {
  id: string;
  title: string;
  specs: { label: string; value: string }[];
}

export const TeslaSpecsDrawer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('akustik');

  const specCategories: SpecCategory[] = [
    {
      id: 'akustik',
      title: 'Akustik & Jangkauan SPL',
      specs: [
        { label: 'Tingkat Tekanan Suara Maksimum (Peak SPL)', value: '147 dB Peak @ 1m (L-Acoustics K2 Array)' },
        { label: 'Tekanan Suara Kontinu di FOH (45 meter)', value: '104 - 108 dBA Continuous' },
        { label: 'Respon Frekuensi Sistem (±3 dB)', value: '25 Hz - 20.000 Hz' },
        { label: 'Pola Dispersi Horizontal', value: '70° / 110° Simetris (Panflex Adjustable)' },
        { label: 'Distorsi Harmonik Total (THD)', value: '< 0.04% pada Rated Power Output' },
        { label: 'Directivity Kontrol Frekuensi Rendah', value: 'Cardioid Subwoofer Array (Rear Rejection > 15 dB)' },
      ],
    },
    {
      id: 'transducer',
      title: 'Transducer & Amplifikasi',
      specs: [
        { label: 'Komponen Low Frequency (LF)', value: '2 x 12" Neodymium Weather-Resistant Cone' },
        { label: 'Komponen Mid Frequency (MF)', value: '4 x 6.5" Neodymium Direct Radiating' },
        { label: 'Komponen High Frequency (HF)', value: '2 x 3" Diaphragm Compression Driver pada DOSC Waveguide' },
        { label: 'Topologi Amplifier', value: 'Class-D Pascal High-Efficiency Power Module' },
        { label: 'DSP Sampling & Dynamic Range', value: '96 kHz / 24-Bit, > 120 dB Dynamic Range' },
        { label: 'Penyelarasan Fasa Akustik', value: 'FiRPHASE Linear 0° Phase Response Crossover' },
      ],
    },
    {
      id: 'jaringan',
      title: 'Jaringan Digital & Latensi',
      specs: [
        { label: 'Protokol Jaringan Audio Utama', value: 'Audinate Dante Gigabit Redundant (Primary & Secondary)' },
        { label: 'Koneksi Kabel Snake Panggung', value: 'Neutrik opticalCON QUAD Dual-Fiber Armored Cable' },
        { label: 'Latensi Sistem Menyeluruh (Analog ke Analog)', value: '< 0.7 milidetik @ 96kHz' },
        { label: 'Kapasitas Saluran FOH', value: '64 Input Saluran / 32 Output Bus Fleksibel' },
        { label: 'Sistem Nirkabel Mikrofon', value: 'Shure Axient Digital Quad Diversity (470 - 636 MHz)' },
        { label: 'Software Kalibrasi Lapangan', value: 'Rational Acoustics SMAART V9 Live Multi-Mic Transfer Function' },
      ],
    },
    {
      id: 'daya',
      title: 'Daya Listrik & Rigging Mekanikal',
      specs: [
        { label: 'Kebutuhan Pasokan Listrik Utama', value: '380V 3-Phase + Neutral + Ground (CEE 32A / 63A)' },
        { label: 'Kapasitas Daya Cadangan UPS', value: 'Online Double-Conversion 6 kVA (0 ms Switchover)' },
        { label: 'Faktor Keamanan Struktur Gantung (Safety Factor)', value: '8:1 Standar Internasional BGV-C1' },
        { label: 'Beban Titik Angkat Motor Hoist', value: 'Verlinde / CM Lodestar Electric Chain Hoist 1-Ton D8+' },
        { label: 'Tingkat Proteksi Cuaca (Weatherproofing)', value: 'IP55 Bersertifikasi Tahan Debu & Hujan Deras' },
        { label: 'Temperatur Operasional', value: '-10°C hingga 50°C' },
      ],
    },
  ];

  const currentCategory = specCategories.find((c) => c.id === activeTab) || specCategories[0];

  return (
    <section id="spesifikasi" className="py-20 md:py-32 bg-black text-white border-b border-[#2a2d32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="LEMBAR SPESIFIKASI TEKNIS RESMI"
          title="Spesifikasi Lengkap Sistem Megasound"
          description="Rincian parameter akustik, transducer, protokol jaringan, dan batasan struktural panggung untuk technical rider resmi."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sisi Kiri: Tab Navigasi Kategori Spesifikasi */}
          <div className="lg:col-span-4 space-y-2">
            {specCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full text-left px-5 py-3.5 rounded-sm text-sm font-medium transition-all cursor-pointer flex items-center justify-between border ${
                  activeTab === cat.id
                    ? 'bg-white text-[#171a20] border-white font-semibold shadow-md'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat.title}</span>
                <span className="text-xs font-mono opacity-50">
                  {cat.specs.length} data
                </span>
              </button>
            ))}

            <div className="pt-6">
              <div className="p-5 rounded-sm bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-white/80 uppercase font-semibold">
                  <FileText className="w-4 h-4 text-primary" />
                  Format Dokumen Rider
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Tersedia file EASE Focus acoustic simulation 3D dan patch list saluran FOH dalam format PDF untuk tim produksi artis.
                </p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Lembar Rincian Spesifikasi Khas Tesla Megapack Specs */}
          <div className="lg:col-span-8 rounded-sm bg-[#171a20] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {currentCategory.title}
              </h3>
              <span className="text-[11px] font-mono text-primary uppercase tracking-wider font-semibold">
                TERKALIBRASI 2026
              </span>
            </div>

            {/* List Tabel Parameter */}
            <div className="divide-y divide-white/10 font-mono text-xs">
              {currentCategory.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-white/60 font-sans sm:max-w-[45%]">
                    {item.label}
                  </span>
                  <span className="text-white font-semibold sm:text-right font-mono text-xs sm:text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <div className="flex items-center gap-1.5 text-success">
                <ShieldCheck className="w-4 h-4" />
                <span>Standar K3 Rigging & Audio Engineering Society (AES)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
