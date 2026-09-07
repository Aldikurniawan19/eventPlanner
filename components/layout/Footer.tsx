// components/layout/Footer.tsx
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer id="tentang-kami" className="w-full bg-primary text-white/80 border-t border-primary-hover pt-16 pb-12 text-xs sm:text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Kolom 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center">
              <span className="font-bold text-xl tracking-tight text-white">
                Rentify
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-sm">
              Partner produksi sound system, lighting, dan perlengkapan panggung berstandar rider khusus untuk Event Planner & Organizer.
            </p>
          </div>

          {/* Kolom 2: Navigasi (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm">Navigasi</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-emerald-100/75 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#katalog" className="text-emerald-100/75 hover:text-white transition-colors">
                  Katalog
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-emerald-100/75 hover:text-white transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#cara-sewa" className="text-emerald-100/75 hover:text-white transition-colors">
                  Cara Sewa
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="text-emerald-100/75 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Bantuan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm">Bantuan</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#cara-sewa" className="text-emerald-100/75 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100/75 hover:text-white transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100/75 hover:text-white transition-colors">
                  Kebijakan Sewa
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-emerald-100/75 hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm">Kontak</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/85">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaInstagram className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @rentify.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href="mailto:hello@rentify.id" className="hover:text-white transition-colors">
                  hello@rentify.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas & Copyright Bawah */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/65">
          <p>© 2026 Rentify. Semua hak dilindungi.</p>

          {/* Ikon Media Sosial Kanan Bawah */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-emerald-200 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-emerald-200 hover:text-white transition-all"
              aria-label="TikTok"
            >
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-emerald-200 hover:text-white transition-all"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
