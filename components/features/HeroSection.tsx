// components/features/HeroSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  isDecimal?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.6,
  suffix = '',
  isDecimal = false,
}) => {
  const [displayValue, setDisplayValue] = useState<number | string>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    const start = 0;
    const end = value;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for smooth decelerating count animation
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * ease;

      if (isDecimal) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(isDecimal ? end.toFixed(1) : end);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value, duration, isDecimal]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white bg-[url('/img/bgHero.png')] bg-cover bg-right lg:bg-center bg-no-repeat pt-14 sm:pt-20 pb-20 sm:pb-28 lg:pb-36 overflow-hidden border-b border-[#e5e7eb]">
      {/* Overlay gradien halus untuk memastikan keterbacaan teks di berbagai ukuran layar */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Konten Utama Hero dengan Animasi Masuk Framer Motion */}
        <div className="max-w-2xl space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-block text-xs font-bold tracking-wider text-[#195e49] uppercase"
          >
            PARTNER PRODUKSI RESMI EVENT PLANNER
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#111827] leading-[1.12]"
          >
            Solusi Tata Suara & Perlengkapan Panggung untuk Kesuksesan Event Anda.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
            className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-xl font-normal"
          >
            Dari wedding ballroom megah, konser festival, hingga konferensi korporat. Kami sediakan sound system rider-ready, sound engineer berpengalaman, dan loading tepat waktu untuk menjamin kesempurnaan rundown event Anda.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a href="#katalog">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Jelajahi Paket Event
                </Button>
              </motion.div>
            </a>
            <a href="#cara-sewa">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-xs">
                  Alur Kerja Sama
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* 3 Checklist Items Persis Gambar Referensi dengan Staggered Spring Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#4b5563]"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Rider-ready & terkalibrasi</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.42, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Disiplin loading & setup</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Dedicated engineer standby</span>
            </motion.div>
          </motion.div>

          {/* Ringkasan Simpel: Jumlah Event yang Telah Ditangani dengan Animasi Count */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.55, duration: 0.5, ease: 'easeOut' }}
            className="pt-6 border-t border-[#e5e7eb]/80 flex flex-wrap items-center gap-6 sm:gap-10"
          >
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-[#111827] font-mono tracking-tight">
                <AnimatedCounter value={500} suffix="+" duration={1.5} />
              </div>
              <p className="text-xs text-[#6b7280] font-medium">
                Event Sukses Ditangani
              </p>
            </div>

            <div className="h-8 w-px bg-[#e5e7eb] hidden sm:block" />

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-[#111827] font-mono tracking-tight">
                <AnimatedCounter value={99.8} suffix="%" isDecimal={true} duration={1.5} />
              </div>
              <p className="text-xs text-[#6b7280] font-medium">
                On-Time Loading & Rundown
              </p>
            </div>

            <div className="h-8 w-px bg-[#e5e7eb] hidden sm:block" />

            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-[#111827] font-mono tracking-tight">
                <AnimatedCounter value={35} suffix="+" duration={1.5} />
              </div>
              <p className="text-xs text-[#6b7280] font-medium">
                Kota di Seluruh Indonesia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
