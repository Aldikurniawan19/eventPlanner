// components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beranda');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: Deteksi seksi mana yang sedang dilihat
      const sectionIds = ['katalog', 'galeri', 'cara-sewa', 'tentang-kami'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(sectionIds[i]);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveTab('beranda');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#' },
    { id: 'katalog', label: 'Katalog', href: '#katalog' },
    { id: 'galeri', label: 'Galeri', href: '#galeri' },
    { id: 'cara-sewa', label: 'Cara Sewa', href: '#cara-sewa' },
    { id: 'tentang-kami', label: 'Tentang Kami', href: '#tentang-kami' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { id: string; href: string }
  ) => {
    e.preventDefault();
    setActiveTab(link.id);
    setMobileMenuOpen(false);

    if (link.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = link.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 50);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-x border-[#e5e7eb] rounded-bl-[40px] rounded-br-[40px] sm:rounded-bl-[52px] sm:rounded-br-[52px] lg:rounded-bl-[64px] lg:rounded-br-[64px] shadow-sm'
          : 'bg-white border-b border-[#e5e7eb] border-x-transparent rounded-none shadow-none'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled ? 'px-6 sm:px-10 lg:px-14' : 'px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo Rentify: Wordmark */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, { id: 'beranda', href: '#' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center focus-visible:outline-2 focus-visible:outline-primary rounded-lg cursor-pointer"
          >
            <span className="font-bold text-xl tracking-tight text-[#111827]">
              Rentify
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative text-sm font-medium transition-colors flex items-center h-full px-1 ${
                  activeTab === link.id
                    ? 'text-[#111827] font-semibold'
                    : 'text-[#4b5563] hover:text-[#111827]'
                }`}
              >
                {link.label}
                {/* Active Indicator Line dengan Framer Motion layoutId */}
                {activeTab === link.id && (
                  <motion.span
                    layoutId="navbar-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#katalog"
              onClick={(e) => handleNavClick(e, { id: 'katalog', href: '#katalog' })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button variant="primary" size="md">
                Konsultasi Event
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#111827] hover:bg-surface focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown dengan Animasi */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`md:hidden border-t border-[#e5e7eb] bg-white px-4 py-5 space-y-3 shadow-lg overflow-hidden ${
              isScrolled ? 'rounded-bl-[40px] rounded-br-[40px] sm:rounded-bl-[52px] sm:rounded-br-[52px]' : ''
            }`}
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-base font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === link.id
                      ? 'bg-surface-mint text-primary font-semibold'
                      : 'text-[#4b5563] hover:bg-surface'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#e5e7eb]">
              <a
                href="#katalog"
                onClick={(e) => handleNavClick(e, { id: 'katalog', href: '#katalog' })}
                className="w-full block"
              >
                <Button variant="primary" size="lg" className="w-full">
                  Konsultasi Event
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
