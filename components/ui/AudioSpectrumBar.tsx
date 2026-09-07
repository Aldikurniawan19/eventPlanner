// components/ui/AudioSpectrumBar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';
import { Activity, Radio, Volume2, ShieldCheck, ChevronRight } from 'lucide-react';

const FREQUENCY_BANDS = [
  { freq: '31Hz', base: 40 },
  { freq: '63Hz', base: 70 },
  { freq: '125Hz', base: 85 },
  { freq: '250Hz', base: 65 },
  { freq: '500Hz', base: 75 },
  { freq: '1kHz', base: 80 },
  { freq: '2kHz', base: 70 },
  { freq: '4kHz', base: 60 },
  { freq: '8kHz', base: 50 },
  { freq: '16kHz', base: 35 },
];

export const AudioSpectrumBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [splValue, setSplValue] = useState<number>(86.4);
  const [activeTab, setActiveTab] = useState<string>('ikhtisar');
  const [bandHeights, setBandHeights] = useState<number[]>(
    FREQUENCY_BANDS.map((b) => b.base)
  );

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const calculatedSpl = 84 + latest * 22 + Math.sin(latest * 30) * 1.5;
      setSplValue(Number(calculatedSpl.toFixed(1)));

      if (latest < 0.15) {
        setActiveTab('ikhtisar');
      } else if (latest < 0.35) {
        setActiveTab('kalkulator');
      } else if (latest < 0.55) {
        setActiveTab('paket');
      } else if (latest < 0.75) {
        setActiveTab('gear');
      } else if (latest < 0.9) {
        setActiveTab('rekayasa');
      } else {
        setActiveTab('kontak');
      }

      const newHeights = FREQUENCY_BANDS.map((b, index) => {
        const wave = Math.sin(latest * 15 + index * 0.8) * 22;
        const scrollImpact = latest * 30 * (index < 4 ? 1.2 : 0.8);
        return Math.min(95, Math.max(15, b.base + wave + scrollImpact * 0.35));
      });
      setBandHeights(newHeights);
    });
  }, [scrollYProgress]);

  const subNavItems = [
    { id: 'ikhtisar', label: 'Ikhtisar', href: '#' },
    { id: 'kalkulator', label: 'Konfigurator Sistem', href: '#kalkulator' },
    { id: 'paket', label: 'Paket Produksi', href: '#paket' },
    { id: 'gear', label: 'Katalog Alat ARK', href: '#gear' },
    { id: 'rekayasa', label: 'Arsitektur K3', href: '#rekayasa' },
    { id: 'portofolio', label: 'Studi Kasus', href: '#portofolio' },
  ];

  return (
    <div className="sticky top-16 z-40 w-full bg-background/98 backdrop-blur border-b border-border shadow-xs">
      {/* Intel Blue Scroll Progress Line */}
      <motion.div
        className="h-[2px] bg-primary origin-left w-full"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-11">
          {/* Left: Intel ARK Secondary Subnav Links */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            {subNavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                  activeTab === item.id
                    ? 'bg-surface text-primary font-semibold border-b-2 border-primary'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Intel Telemetry & Performance Indicator */}
          <div className="hidden md:flex items-center gap-4 shrink-0 font-mono text-xs">
            {/* SPL Readout */}
            <div className="flex items-center gap-1.5 text-foreground">
              <Volume2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground-muted text-[11px]">SPL REALTIME:</span>
              <span className="font-bold text-primary">{splValue} dBA</span>
            </div>

            <div className="h-3 w-px bg-border" />

            {/* DSP FPGA Status */}
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-success font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DANTE 96kHz LOCK</span>
            </div>

            <div className="h-3 w-px bg-border hidden lg:block" />

            {/* Electric Cyan Spectrum Bars */}
            <div className="flex items-end gap-1 h-5 px-2 py-0.5 rounded-sm bg-surface border border-border">
              {FREQUENCY_BANDS.map((band, idx) => {
                const heightPercent = bandHeights[idx] || band.base;
                return (
                  <div
                    key={band.freq}
                    className="w-1.5 h-4 bg-border rounded-xs flex items-end overflow-hidden"
                    title={`${band.freq}`}
                  >
                    <div
                      className="w-full bg-primary"
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
