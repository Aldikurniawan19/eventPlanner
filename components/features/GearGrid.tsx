// components/features/GearGrid.tsx
'use client';

import React, { useState } from 'react';
import { Radio, Sliders, Mic, Cpu, ShieldCheck, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { GearCatalogService } from '@/services/gear-catalog.service';
import { GearCategory } from '@/types/sound-system.types';

export const GearGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GearCategory | 'all'>('all');

  const categories = [
    { id: 'all', label: 'Semua Perangkat (All ARK)', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'speakers', label: 'Loudspeakers & Subs', icon: <Radio className="w-3.5 h-3.5" /> },
    { id: 'consoles', label: 'Konsol FOH & DSP', icon: <Sliders className="w-3.5 h-3.5" /> },
    { id: 'microphones', label: 'Wireless & Mics', icon: <Mic className="w-3.5 h-3.5" /> },
    { id: 'processing', label: 'Akustik & SMAART', icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const gearItems = GearCatalogService.getAllGear().filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <section id="gear" className="py-16 md:py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="PANGKALAN DATA INVENTARIS (ARK)"
          title="Katalog Spesifikasi Perangkat Standar Rider Internasional"
          description="Basis data spesifikasi peralatan audio panggung yang tersedia di gudang workshop kami, terkalibrasi berkala dan memenuhi standar rider artis global."
        />

        {/* Tab Filter Bergaya Intel ARK Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 border-b border-border pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as GearCategory | 'all')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary text-foreground-inverse shadow-xs'
                  : 'bg-background text-foreground-muted hover:text-foreground hover:bg-surface border border-border'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid Peralatan Bergaya Intel ARK Product Sheet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearItems.map((item) => (
            <div
              key={item.id}
              className="rounded-sm bg-background border border-border p-5 flex flex-col justify-between hover:border-primary transition-all shadow-xs group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                    {item.brand}
                  </span>
                  <Badge variant="neutral">{item.quantityAvailable}</Badge>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.model}
                </h3>

                {/* Spec Highlight Box */}
                <div className="p-2.5 rounded-sm bg-surface border border-border text-[11px] font-mono text-primary font-medium">
                  {item.specHighlight}
                </div>

                <p className="text-xs text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
                <span className="flex items-center gap-1 text-success">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kondisi Grade A+</span>
                </span>
                <span className="uppercase text-[10px] bg-surface px-2 py-0.5 rounded-xs border border-border">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
