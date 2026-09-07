// components/features/CtaMintBanner.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const CtaMintBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-xl bg-surface-mint border border-primary/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                Siap mengeksekusi event spektakuler berikutnya?
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563]">
                Diskusikan tanggal acara, kebutuhan panggung, dan dapatkan proposal penawaran khusus mitra Event Planner hari ini.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <motion.a
                href="#katalog"
                className="w-full md:w-auto block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full md:w-auto shadow-sm"
                >
                  Konsultasi Rundown & Gear
                </Button>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
