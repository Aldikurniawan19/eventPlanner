// components/features/WhyRentSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyRentSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Zero-Failure Guarantee',
      desc: 'Unit cadangan (backup gear) selalu siap di lokasi untuk menjamin acara berlangsung lancar tanpa jeda.',
    },
    {
      num: '02',
      title: 'Rider-Compliant & Terkalibrasi',
      desc: 'Inventaris kelas dunia yang memenuhi spesifikasi technical rider artis dan musisi nasional.',
    },
    {
      num: '03',
      title: 'Dedicated Engineer & Crew',
      desc: 'Tim audio profesional yang sigap berkoordinasi langsung dengan Show Director dan LO acara Anda.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e7eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Kolom Kiri: Pertanyaan Retoris & Deskripsi */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-snug">
              Kenapa puluhan Event Planner mempercayakan produksinya pada kami?
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md">
              Kami memahami ketatnya jadwal rundown event dan standar tinggi klien Anda. Nol kompromi untuk kualitas tata suara panggung.
            </p>
          </motion.div>

          {/* Kolom Kanan: 3 Pilar dengan Animasi Staggered Scroll & Hover Lift */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 * idx,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -4 }}
                className="space-y-2 p-3.5 -m-3.5 rounded-xl transition-colors hover:bg-surface/70"
              >
                <span className="block text-4xl sm:text-5xl font-light text-[#9ca3af] font-mono select-none transition-colors group-hover:text-primary">
                  {pillar.num}
                </span>
                <h3 className="text-base font-bold text-[#111827]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
