// components/features/HowItWorksSection.tsx
'use client';

import React, { useRef } from 'react';
import { FileText, Sliders, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants, type MotionValue } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCircleWithLoadingRing = ({
  icon,
  pathLength,
}: {
  icon: React.ReactNode;
  pathLength: MotionValue<number>;
}) => {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      {/* SVG Circular Loading Line yang Mengikuti Scroll Halaman */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        viewBox="0 0 56 56"
      >
        {/* Lingkaran latar belakang track keliling */}
        <circle
          cx="28"
          cy="28"
          r="23"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-primary/15"
        />
        {/* Garis animasi loading keliling icon yang reaktif terhadap scroll */}
        <motion.circle
          cx="28"
          cy="28"
          r="23"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="text-primary"
          style={{
            pathLength,
          }}
        />
      </svg>

      {/* Bulatan Ikon Hijau Lembut */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="w-11 h-11 rounded-full bg-surface-mint flex items-center justify-center text-primary shadow-xs z-10 border border-primary/20 cursor-default"
      >
        {icon}
      </motion.div>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Pantau progres scroll halaman saat melewati seksi ini
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 35%'],
  });

  // Nilai progress garis loading keliling icon untuk masing-masing step
  const pathLength1 = useTransform(scrollYProgress, [0.05, 0.40], [0, 1], { clamp: true });
  const pathLength2 = useTransform(scrollYProgress, [0.35, 0.70], [0, 1], { clamp: true });
  const pathLength3 = useTransform(scrollYProgress, [0.65, 0.95], [0, 1], { clamp: true });

  const pathLengths = [pathLength1, pathLength2, pathLength3];

  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Kirimkan Rider & Venue',
      description: 'Bagikan technical rider artis, layout denah ruangan, dan target kapasitas audiens acara Anda.',
      icon: <FileText className="w-5 h-5 text-primary" />,
    },
    {
      number: '02',
      title: 'Simulasi Akustik & Proposal',
      description: 'Tim engineer kami menyusun simulasi SPL, daftar alat presisi, dan penawaran transparan.',
      icon: <Sliders className="w-5 h-5 text-primary" />,
    },
    {
      number: '03',
      title: 'Loading, Rehearsal & Live Run',
      description: 'Kru kami tiba tepat waktu, melakukan sound check tuntas, dan mendampingi hingga acara selesai.',
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const stepItemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} id="cara-sewa" className="py-16 sm:py-20 bg-white border-b border-[#e5e7eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111827] mb-12">
            Alur kerja sama rapi untuk Event Planner
          </h2>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={stepItemVariants}
              className="flex items-start gap-4 relative group"
            >
              {/* Bulatan Ikon dengan Animasi Line Loading Keliling Berbasis Scroll */}
              <StepCircleWithLoadingRing
                icon={step.icon}
                pathLength={pathLengths[idx]}
              />

              <div className="space-y-1 pr-6 pt-1">
                <span className="text-xs font-mono text-primary font-bold block">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Panah Halus Antar Langkah Sesuai Gambar (hanya untuk step 1 dan 2) */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0.6, x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden md:flex absolute right-0 top-7 -translate-y-1/2 text-[#9ca3af]"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
