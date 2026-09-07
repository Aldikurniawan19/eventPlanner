// components/features/EventBannerSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const EventBannerSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="group relative rounded-2xl overflow-hidden bg-[#111827] text-white p-8 sm:p-12 lg:p-14 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Background Image Audience / Stage Sesuai Gambar dengan subtle zoom effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop"
                alt="Event stage and seating audience"
                className="w-full h-full object-cover object-center opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/85 to-transparent" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-xl space-y-4">
              <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-white/70 font-semibold">
                KOLABORASI KHUSUS EVENT PLANNER & ORGANIZER
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Punya rundown event besar atau kebutuhan teknis khusus?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Konsultasikan denah venue, kebutuhan daya listrik, dan jadwal loading bersama tim audio engineering kami. Kami siapkan proposal paket produksi terbaik untuk klien Anda.
              </p>

              <div className="pt-2">
                <motion.a
                  href="https://wa.me/6281234567890?text=Halo%20Rentify,%20saya%20Event%20Planner%20dan%20ingin%20konsultasi%20kebutuhan%20teknis%20tata%20suara%20serta%20panggung%20untuk%20event%20mendatang."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button variant="primary" size="lg" className="font-semibold shadow-md">
                    Konsultasikan Rundown Acara
                  </Button>
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
