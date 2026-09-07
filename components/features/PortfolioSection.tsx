// components/features/PortfolioSection.tsx
'use client';

import React from 'react';
import { MapPin, Calendar, Volume2, Users, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { GearCatalogService } from '@/services/gear-catalog.service';

export const PortfolioSection: React.FC = () => {
  const portfolios = GearCatalogService.getPortfolio();

  return (
    <section id="portofolio" className="py-16 md:py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="STUDI KASUS & REKAM JEJAK PRODUKSI"
          title="Bukti Performa Nyata di Berbagai Panggung Nasional"
          description="Dokumentasi teknis dan metrik akustik dari produksi berskala festival musik terbuka, konferensi kenegaraan, hingga perjamuan formal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="rounded-sm bg-background border border-border p-6 flex flex-col justify-between hover:border-primary transition-all shadow-xs group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant="primary">{item.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-foreground-subtle">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>TAHUN {item.dateYear}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-2">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-primary shrink-0 transition-colors" />
                </h3>

                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Grid Spesifikasi Teknis Hasil Produksi */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-surface border border-border text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-foreground-subtle uppercase block">Kapasitas Audiens</span>
                    <span className="font-bold text-foreground text-sm">{item.audienceCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-foreground-subtle uppercase block">Target SPL Tercapai</span>
                    <span className="font-bold text-primary text-sm">{item.splDelivered}</span>
                  </div>
                </div>

                <div className="p-3 rounded-sm bg-surface/50 border border-border text-xs font-mono">
                  <span className="text-foreground-subtle block mb-1 text-[10px] uppercase font-bold">
                    Konfigurasi PA Terpasang:
                  </span>
                  <span className="text-foreground font-medium">{item.paConfig}</span>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-border flex items-center justify-between text-xs text-foreground-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{item.location}</span>
                </span>
                <span className="text-xs font-mono text-success font-semibold">Produksi Sukses</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
