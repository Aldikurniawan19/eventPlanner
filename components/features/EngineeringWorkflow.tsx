// components/features/EngineeringWorkflow.tsx
'use client';

import React from 'react';
import { Activity, ShieldAlert, Radio, Cpu, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const EngineeringWorkflow: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Prediksi Akustik & Pemodelan 3D Splay Array',
      icon: <Activity className="w-5 h-5 text-primary" />,
      description:
        'Sebelum hari pelaksanaan, tim insinyur memodelkan venue secara 3 dimensi menggunakan software Soundvision/ArrayCalc untuk menentukan ketinggian gantung, sudut antar-box, dan titik jangkauan suara merata.',
      highlight: 'Deviasi SPL antar baris < 2.5 dB',
    },
    {
      number: '02',
      title: 'Kalkulasi Beban Rigging & Standar K3 Resmi',
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
      description:
        'Seluruh titik gantung (flying point), shackle, sling baja, dan electric chain hoist dihitung beban kerjanya dengan safety factor 8:1 sesuai standar keselamatan panggung pertunjukan internasional.',
      highlight: 'Sertifikasi Operator Rigging K3',
    },
    {
      number: '03',
      title: 'Penyelarasan Fasa via Rational SMAART V9',
      icon: <Cpu className="w-5 h-5 text-primary" />,
      description:
        'Mikrofon pengukuran multi-titik diletakkan di area penonton untuk mengukur respon transfer function. Delay time antara Main Line Array, Front Fill, dan Cardioid Subwoofer diselaraskan hingga 0.1 milidetik.',
      highlight: 'Fasa Koheren & Bebas Comb Filtering',
    },
    {
      number: '04',
      title: 'Koordinasi Spektrum RF Nirkabel Zero-Drop',
      icon: <Radio className="w-5 h-5 text-primary" />,
      description:
        'Menggunakan RF spectrum analyzer untuk memindai gelombang pemancar liar di sekitar lokasi. Frekuensi mikrofon wireless dan in-ear monitor dihitung intermodulasinya agar bebas drop-out dan intervensi.',
      highlight: 'Pemetaan Spektrum Bersih Terenkripsi',
    },
  ];

  return (
    <section id="rekayasa" className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="STANDAR ARSITEKTUR & REKAYASA K3"
          title="Metodologi Presisi di Setiap Tahap Produksi"
          description="Kualitas tata suara prima bukan kebetulan, melainkan hasil perhitungan matematis, keselamatan struktur, dan kalibrasi elektro-akustik yang disiplin."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-sm bg-surface border border-border p-6 flex flex-col justify-between hover:border-primary transition-all shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-background border border-border flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-primary/30">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-xs text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border">
                <div className="flex items-center gap-1.5 text-xs font-mono text-success font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
