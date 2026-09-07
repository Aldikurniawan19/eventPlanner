// app/page.tsx
import React from 'react';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/features/HeroSection';
import { RentalCatalogSection } from '@/components/features/RentalCatalogSection';
import { BentoGallerySection } from '@/components/features/BentoGallerySection';
import { WhyRentSection } from '@/components/features/WhyRentSection';
import { EventBannerSection } from '@/components/features/EventBannerSection';
import { HowItWorksSection } from '@/components/features/HowItWorksSection';
import { TestimonialSection } from '@/components/features/TestimonialSection';
import { CtaMintBanner } from '@/components/features/CtaMintBanner';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-primary selection:text-white relative">
      {/* Indikator Progres Scroll Halaman */}
      <ScrollProgressBar />

      {/* 1. Navbar Rentify */}
      <Navbar />

      {/* Konten Halaman Sesuai Gambar Referensi */}
      <main className="flex-1 w-full flex flex-col">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Cari Berdasarkan Kategori & Barang Yang Sering Disewa (4 Card Grid) */}
        <RentalCatalogSection />

        {/* 4. Galeri Interaktif Bento Portofolio & Event */}
        <BentoGallerySection />

        {/* 5. Kenapa Harus Membeli Kalau Hanya Digunakan Sesekali? (01, 02, 03) */}
        <WhyRentSection />

        {/* 5. Butuh Perlengkapan Untuk Event? (Event Dark Callout Banner) */}
        <EventBannerSection />

        {/* 6. Semudah 3 Langkah (01, 02, 03) */}
        <HowItWorksSection />

        {/* 7. Testimoni Pelanggan (Rizky Pratama) */}
        <TestimonialSection />

        {/* 8. Siap Menyewa Barang Yang Kamu Butuhkan? (Mint Green CTA Banner) */}
        <CtaMintBanner />
      </main>

      {/* 9. Footer Rentify 4-Kolom */}
      <Footer />
    </div>
  );
}
