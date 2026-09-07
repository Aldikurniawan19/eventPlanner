// components/features/TestimonialSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const TestimonialSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote:
        'Koordinasi tim lapangan Rentify sangat taktis. Line array L-Acoustics terpasang tepat waktu dan rider 6 band nasional terpenuhi tanpa kendala sama sekali.',
      author: 'Dimas Setiawan',
      role: 'Project Director — Prisma Festival Production',
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    },
    {
      quote:
        'Untuk wedding ballroom hotel bintang 5, kerapian kabel dan kejernihan vokal adalah segalanya. Rentify memastikan akustik sempurna tanpa merusak estetika dekorasi.',
      author: 'Clarissa Anggraeni',
      role: 'Lead Wedding Planner — Vow & Co. Weddings',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    },
    {
      quote:
        'Sistem mic delegate dan audio broadcast Dante untuk KTT Internasional bekerja flawless selama 3 hari penuh. Rekomendasi mutlak bagi rekan-rekan EO dan Event Planner.',
      author: 'Farhan Ramadhan',
      role: 'Senior Event Manager — Nexus MICE Organizer',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // Otomatis berpindah slide setiap 4.5 detik, jeda saat kursor di-hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const current = testimonials[activeSlide];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="rounded-2xl bg-surface border border-[#e5e7eb] p-6 sm:p-10 shadow-xs relative transition-all duration-300 hover:shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[260px]">
              {/* Foto Kiri Sesuai Gambar dengan AnimatePresence */}
              <div className="md:col-span-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#e5e7eb] border border-[#e5e7eb] relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.author}
                      src={current.image}
                      alt={current.author}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover will-change-transform transform-gpu"
                      loading="lazy"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Testimoni Kanan Sesuai Gambar */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4 will-change-transform transform-gpu"
                  >
                    <Quote className="w-8 h-8 text-primary/40 rotate-180" />

                    <blockquote className="text-base sm:text-lg font-semibold text-[#111827] leading-relaxed">
                      "{current.quote}"
                    </blockquote>

                    <div className="pt-2">
                      <div className="font-bold text-sm text-[#111827]">
                        {current.author}
                      </div>
                      <div className="text-xs text-[#6b7280]">
                        {current.role}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Kontrol Navigasi & Dots Pagination Indicator */}
                <div className="flex items-center justify-between pt-6 border-t border-[#e5e7eb]/60 mt-4">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.9 }}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          activeSlide === idx
                            ? 'w-7 bg-primary'
                            : 'w-2 bg-[#d1d5db] hover:bg-[#9ca3af]'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Tombol Panah Prev / Next */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setActiveSlide((prev) =>
                          prev === 0 ? testimonials.length - 1 : prev - 1
                        )
                      }
                      className="p-1.5 rounded-full hover:bg-black/5 text-[#6b7280] hover:text-[#111827] transition-colors cursor-pointer"
                      aria-label="Testimoni sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveSlide((prev) => (prev + 1) % testimonials.length)
                      }
                      className="p-1.5 rounded-full hover:bg-black/5 text-[#6b7280] hover:text-[#111827] transition-colors cursor-pointer"
                      aria-label="Testimoni berikutnya"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
