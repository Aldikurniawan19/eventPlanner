// components/features/PackagesSection.tsx
'use client';

import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PackagesService } from '@/services/packages.service';

export const PackagesSection: React.FC = () => {
  const packages = PackagesService.getAllPackages();

  return (
    <section id="paket" className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="KLASIFIKASI SISTEM & TIER PRODUKSI"
          title="Paket Sistem Tata Suara Terstandarisasi"
          description="Konfigurasi sistem terintegrasi yang telah teruji untuk berbagai skala panggung pertunjukan dan ruang perjamuan di Indonesia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-sm bg-background border border-border flex flex-col justify-between hover:border-primary transition-all shadow-xs hover:shadow-md relative overflow-hidden"
            >
              {/* Intel Blue Accent Top Border */}
              <div className="h-1 bg-primary w-full" />

              <div className="p-6 sm:p-7 space-y-6">
                {/* Header Paket */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant={pkg.id === 'paket-ballroom' ? 'primary' : 'neutral'}>
                      {pkg.tag}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-lg font-bold text-primary">{pkg.powerRms}</div>
                    <div className="text-xs text-foreground-muted">{pkg.targetSpl}</div>
                  </div>
                </div>

                <p className="text-sm text-foreground-muted leading-relaxed">
                  {pkg.description}
                </p>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-surface border border-border font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-foreground-subtle uppercase block">Cakupan Audiens</span>
                    <span className="font-bold text-foreground">{pkg.capacityLabel}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-foreground-subtle uppercase block">Target SPL Lapangan</span>
                    <span className="font-bold text-primary">{pkg.targetSpl}</span>
                  </div>
                </div>

                {/* Perangkat yang Disertakan */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                    Konfigurasi Perangkat Keras:
                  </div>
                  <div className="space-y-1.5 text-xs font-mono divide-y divide-border-subtle">
                    <div className="pt-1.5 flex items-start justify-between gap-3 text-foreground-muted">
                      <span className="text-foreground-subtle shrink-0">Loudspeaker PA:</span>
                      <span className="text-foreground font-medium text-right">{pkg.includedGear.mainPa}</span>
                    </div>
                    <div className="pt-1.5 flex items-start justify-between gap-3 text-foreground-muted">
                      <span className="text-foreground-subtle shrink-0">Subwoofer:</span>
                      <span className="text-foreground font-medium text-right">{pkg.includedGear.subs}</span>
                    </div>
                    <div className="pt-1.5 flex items-start justify-between gap-3 text-foreground-muted">
                      <span className="text-foreground-subtle shrink-0">Konsol FOH:</span>
                      <span className="text-foreground font-medium text-right">{pkg.includedGear.console}</span>
                    </div>
                    <div className="pt-1.5 flex items-start justify-between gap-3 text-foreground-muted">
                      <span className="text-foreground-subtle shrink-0">Wireless & Mics:</span>
                      <span className="text-foreground font-medium text-right">{pkg.includedGear.microphones}</span>
                    </div>
                    <div className="pt-1.5 flex items-start justify-between gap-3 text-foreground-muted">
                      <span className="text-foreground-subtle shrink-0">Teknisi & Engineer:</span>
                      <span className="text-foreground font-medium text-right">{pkg.includedGear.engineer}</span>
                    </div>
                  </div>
                </div>

                {/* Fitur Utama */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="grid grid-cols-1 gap-1.5">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground-muted font-sans">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Paket */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-4 border-t border-border mt-6">
                <div className="text-xs text-foreground-subtle font-mono truncate">
                  Ideal: {pkg.idealFor}
                </div>
                <a href="#kontak" className="shrink-0">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Konsultasi Rider
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
