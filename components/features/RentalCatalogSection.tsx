'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DestinationCard } from '@/components/ui/card-21';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface RentalItem {
  id: string;
  category: string;
  title: string;
  pricePerDay: string;
  priceNumeric: number;
  available: boolean;
  image: string;
  specs: string[];
  description: string;
  themeColor?: string;
}

export const RentalCatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState<RentalItem | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const categories = [
    'Semua',
    'Line Array & PA',
    'Mixing Console',
    'Wireless & Mic',
    'Ballroom & Wedding',
  ];

  // Data Peralatan Standar Rider untuk Event Planner
  const rentalItems: RentalItem[] = [
    {
      id: 'l-acoustics-k2',
      category: 'LINE ARRAY & PA',
      title: 'Paket Line Array 20.000W',
      pricePerDay: 'Rp 12.500.000',
      priceNumeric: 12500000,
      available: true,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
      themeColor: '160 55% 18%',
      specs: [
        '12x L-Acoustics K2 Line Source Modules',
        '8x KS28 Subwoofer Cardioid Array',
        'Ampli LA12X + Processor Lake LM44 Terintegrasi',
        'Termasuk 2x Sound Engineer & Kru Rigging Standby',
      ],
      description: 'Konfigurasi tata suara festival outdoor dan konser panggung besar kapasitas 2.000 - 5.000 penonton dengan lemparan SPL merata dan kejernihan vokal maksimal.',
    },
    {
      id: 'allen-heath-dlive',
      category: 'MIXING CONSOLE',
      title: 'Allen & Heath dLive C3500 System',
      pricePerDay: 'Rp 4.500.000',
      priceNumeric: 4500000,
      available: true,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
      themeColor: '205 60% 20%',
      specs: [
        '128 Channel XCVI FPGA 96kHz Processing Core',
        'CDM48 MixRack Stagebox Digital 48 In / 24 Out',
        'Dual 12 Inch Touchscreens & 24 Motorized Fader',
        'Dante Card 64x64 + Multi-track Live Recording USB',
      ],
      description: 'Standar FOH dan monitor mixing konsol untuk band bintang tamu, orkestra, dan konferensi MICE dengan latensi ultra-rendah 0.7ms.',
    },
    {
      id: 'shure-axient-digital',
      category: 'WIRELESS & MIC',
      title: 'Shure Axient Digital Quad Wireless',
      pricePerDay: 'Rp 2.800.000',
      priceNumeric: 2800000,
      available: true,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      themeColor: '150 60% 16%',
      specs: [
        '4-Channel AD4Q Receiver + 4x Handheld KSM9/SM58',
        'True Digital Diversity zero-dropout di area RF padat',
        'Antena Paddle Aktif Shure UA874 + Distro RF',
        'Termasuk Baterai Lithium SB900B & Stand K&M',
      ],
      description: 'Sistem mikrofon nirkabel paling andal di dunia untuk MC VIP, pembicara kenegaraan, dan artis panggung tanpa risiko interferensi frekuensi.',
    },
    {
      id: 'wedding-ballroom-5k',
      category: 'BALLROOM & WEDDING',
      title: 'Paket Akustik Ballroom 5.000W',
      pricePerDay: 'Rp 6.500.000',
      priceNumeric: 6500000,
      available: true,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      themeColor: '175 45% 18%',
      specs: [
        '4x Column Array Point Source + 4x Subwoofer Kompak',
        'Digital Mixer 32-Channel + Auto-feedback Suppressor',
        '4x Wireless Mic Shure + Mic Instrumen Wedding Band',
        'Kabel Manajemen Rapi Tersembunyi Sesuai Standar Dekorasi',
      ],
      description: 'Tata suara premium beresolusi tinggi dengan jangkauan merata untuk resepsi wedding dan gala dinner, menjamin vokal hangat tanpa merusak estetika dekor.',
    },
  ];

  const filteredItems =
    activeCategory === 'Semua'
      ? rentalItems
      : rentalItems.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const generateWhatsAppOrderUrl = (item: RentalItem) => {
    const text = encodeURIComponent(
      `Halo Rentify, saya Event Planner dan ingin konsultasi sewa ${item.title} (${item.category}) seharga ${item.pricePerDay}/hari untuk rundown acara kami. Apakah unit tersedia untuk tanggal yang kami rencanakan?`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section id="katalog" className="py-14 sm:py-16 bg-white border-b border-[#e5e7eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Cari Berdasarkan Kategori Persis Gambar Referensi */}
        <ScrollReveal direction="up" delay={0.05} className="mb-10">
          <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-4">
            Cari berdasarkan kategori peralatan
          </h2>
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar border-b border-[#e5e7eb] pb-2 text-xs sm:text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'text-primary font-bold border-b-2 border-primary -mb-[9px]'
                    : 'text-[#4b5563] hover:text-[#111827]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 2. Sub-Header: Barang Yang Sering Disewa */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
              Peralatan produksi pilihan Event Planner
            </h3>
            <p className="text-xs sm:text-sm text-[#4b5563] mt-1">
              Pilihan peralatan audio visual berstandar rider panggung profesional yang siap menyempurnakan rundown event Anda.
            </p>
          </div>
          <a
            href="#katalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>

        {/* 3. 4-Card Grid Bergaya DestinationCard (card-21) dengan Animasi Responsif (Desktop: 2 Kiri, 2 Kanan; Mobile: Zigzag) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((item, index) => {
            // Desktop (>= 1024px): 2 card kiri (0, 1) dari kiri (-90px), 2 card kanan (2, 3) dari kanan (90px)
            // Mobile (< 1024px): zigzag selang-seling (0 dari kiri, 1 dari kanan, dst)
            const isFromLeft = isDesktop ? index % 4 < 2 : index % 2 === 0;
            const distance = isDesktop ? 90 : 75;
            const initialX = isFromLeft ? -distance : distance;

            return (
              <motion.div
                key={`${item.id}-${isDesktop ? 'desktop' : 'mobile'}`}
                initial={{ opacity: 0, x: initialX, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 4) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-[430px] w-full"
              >
                <DestinationCard
                  imageUrl={item.image}
                  location={item.title}
                  badge={item.category}
                  stats={`${item.pricePerDay} / hari`}
                  themeColor={item.themeColor || '160 55% 18%'}
                  actionText="Detail Sewa"
                  onActionClick={() => setSelectedItem(item)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Detail Barang Saat Diklik */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#e5e7eb] relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-[#6b7280] hover:text-[#111827] rounded-full hover:bg-surface transition-colors cursor-pointer"
              aria-label="Tutup detail"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-20 h-20 rounded-lg object-cover border border-[#e5e7eb]"
              />
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#9ca3af] uppercase">
                  {selectedItem.category}
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  {selectedItem.title}
                </h3>
                <div className="text-base font-bold text-primary mt-0.5">
                  {selectedItem.pricePerDay}{' '}
                  <span className="text-xs font-normal text-[#6b7280]">/ hari</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              {selectedItem.description}
            </p>

            {/* Spesifikasi Item */}
            <div className="space-y-2 bg-surface p-3.5 rounded-lg border border-[#e5e7eb]">
              <span className="text-xs font-bold text-[#111827] block">
                Kelengkapan & Spesifikasi:
              </span>
              <ul className="space-y-1.5 text-xs text-[#4b5563]">
                {selectedItem.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={generateWhatsAppOrderUrl(selectedItem)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                  className="w-full font-semibold"
                >
                  Konsultasi & Reservasi via WhatsApp
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={() => setSelectedItem(null)}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
