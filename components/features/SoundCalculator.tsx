// components/features/SoundCalculator.tsx
'use client';

import React, { useState, useMemo } from 'react';
import {
  Sliders,
  Users,
  Maximize2,
  Zap,
  Volume2,
  CheckCircle2,
  Copy,
  Check,
  Music,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SoundCalculatorService } from '@/services/sound-calculator.service';
import {
  EventType,
  VenueType,
  SoundCalculationInput,
} from '@/types/sound-system.types';

export const SoundCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<EventType>('concert');
  const [venueType, setVenueType] = useState<VenueType>('ballroom-reverb');
  const [audienceCapacity, setAudienceCapacity] = useState<number>(850);
  const [venueLength, setVenueLength] = useState<number>(40);
  const [venueWidth, setVenueWidth] = useState<number>(25);
  const [includeLiveBand, setIncludeLiveBand] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const calculationResult = useMemo(() => {
    const input: SoundCalculationInput = {
      eventType,
      venueType,
      audienceCapacity,
      venueLengthMeters: venueLength,
      venueWidthMeters: venueWidth,
      includeLiveBand,
    };
    return SoundCalculatorService.calculate(input);
  }, [eventType, venueType, audienceCapacity, venueLength, venueWidth, includeLiveBand]);

  const handleCopySpec = () => {
    const text = `
=== KONFIGURASI MEGASOUND RESONANSI ===
Format Acara: ${eventType.toUpperCase()} | Akustik: ${venueType.toUpperCase()}
Kapasitas: ${audienceCapacity.toLocaleString()} Hadirin | Dimensi: ${venueLength}m x ${venueWidth}m
Live Band Rig: ${includeLiveBand ? 'Ya' : 'Tidak'}

HASIL SIZING SISTEM:
• Arsitektur Sistem: ${calculationResult.recommendedSystemName}
• Modul Line Array: ${calculationResult.lineArrayModules} Box
• Subwoofer Cardioid: ${calculationResult.subwooferCount} Unit Enclosure
• Total Daya Bersih: ${calculationResult.totalRmsWattage.toLocaleString()} Watt RMS
• Target SPL FOH: ${calculationResult.targetSplFOH} dBA (Peak: ${calculationResult.targetSplPeak} dBA)
• Konsol FOH: ${calculationResult.recommendedConsole} (${calculationResult.channelCount} Channel)
• Pasokan Listrik: ${calculationResult.powerRequirementKva} kVA 3-Phase

Catatan Rekayasa:
${calculationResult.technicalNotes.map((n) => `- ${n}`).join('\n')}
=======================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppUrl = () => {
    const message = encodeURIComponent(
      `Halo Tim Rekayasa Audio RESONANSI, saya ingin konfirmasi pemesanan konfigurasi Megasound untuk acara ${eventType} (${audienceCapacity} orang) dengan total daya ${calculationResult.totalRmsWattage} Watt RMS. Mohon review kesiapan tanggal acara.`
    );
    return `https://wa.me/6281198726500?text=${message}`;
  };

  return (
    <section id="konfigurator" className="py-20 md:py-32 bg-[#f4f4f6] border-b border-[#e2e4e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="KONFIGURATOR SISTEM MEGASOUND"
          title="Tentukan Skala Sistem Audio Acara Anda"
          description="Sesuaikan kapasitas hadirin dan karakteristik panggung untuk menghitung jumlah modul speaker, daya listrik, dan target decibel (SPL) secara instan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kontrol Sizing Interaktif (Kiri) */}
          <div className="lg:col-span-6 rounded-sm bg-white border border-[#e2e4e6] p-7 space-y-6 shadow-xs">
            {/* 1. Format Acara */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] block font-semibold">
                1. FORMAT PERTUNJUKAN
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'concert', label: 'Konser Musik' },
                  { id: 'wedding', label: 'Ballroom & Wedding' },
                  { id: 'conference', label: 'Summit / Seminar' },
                  { id: 'acoustic', label: 'Akustik / Showcase' },
                  { id: 'festival', label: 'Festival Arena' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id as EventType)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                      eventType === item.id
                        ? 'bg-[#171a20] text-white border-[#171a20] shadow-xs'
                        : 'bg-[#f4f4f6] text-[#171a20] border-transparent hover:border-[#e2e4e6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Karakteristik Venue */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] block font-semibold">
                2. LINGKUNGAN AKUSTIK RUANGAN
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'ballroom-reverb', label: 'Ballroom Gema Tinggi' },
                  { id: 'indoor-dry', label: 'Auditorium Akustik Kering' },
                  { id: 'semi-outdoor', label: 'Semi-Outdoor / Tenda' },
                  { id: 'outdoor-open', label: 'Lapangan Terbuka (Open Air)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVenueType(item.id as VenueType)}
                    className={`px-4 py-2.5 rounded-sm text-xs font-medium text-left transition-all cursor-pointer border ${
                      venueType === item.id
                        ? 'bg-primary/10 text-primary border-primary font-bold'
                        : 'bg-[#f4f4f6] text-[#171a20] border-transparent hover:border-[#e2e4e6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Slider Kapasitas Audiens Khas Tesla */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5c5e62] font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  KAPASITAS AUDIENS
                </span>
                <span className="text-lg font-bold text-[#171a20] font-mono">
                  {audienceCapacity.toLocaleString()} Orang
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={audienceCapacity}
                onChange={(e) => setAudienceCapacity(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-[#e2e4e6] rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8e9094]">
                <span>100 Mini</span>
                <span>1.000 Sedang</span>
                <span>5.000+ Festival</span>
              </div>
            </div>

            {/* 4. Dimensi Panggung & Coverage */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#5c5e62] block font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-primary" />
                  PANJANG AREA
                </label>
                <div className="flex items-center gap-2 bg-[#f4f4f6] px-3.5 py-2.5 rounded-sm border border-[#e2e4e6]">
                  <input
                    type="number"
                    min="10"
                    max="150"
                    value={venueLength}
                    onChange={(e) => setVenueLength(Number(e.target.value))}
                    className="w-full bg-transparent text-sm font-mono text-[#171a20] focus:outline-none"
                  />
                  <span className="text-xs font-mono text-[#5c5e62]">meter</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#5c5e62] block font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-primary" />
                  LEBAR AREA
                </label>
                <div className="flex items-center gap-2 bg-[#f4f4f6] px-3.5 py-2.5 rounded-sm border border-[#e2e4e6]">
                  <input
                    type="number"
                    min="8"
                    max="100"
                    value={venueWidth}
                    onChange={(e) => setVenueWidth(Number(e.target.value))}
                    className="w-full bg-transparent text-sm font-mono text-[#171a20] focus:outline-none"
                  />
                  <span className="text-xs font-mono text-[#5c5e62]">meter</span>
                </div>
              </div>
            </div>

            {/* 5. Live Band Rig Toggle */}
            <div className="pt-2 border-t border-[#e2e4e6]">
              <label className="flex items-center justify-between cursor-pointer p-3 rounded-sm bg-[#f4f4f6] border border-[#e2e4e6] hover:border-primary/50 transition-colors">
                <span className="text-xs font-medium text-[#171a20] flex items-center gap-2">
                  <Music className="w-4 h-4 text-primary" />
                  Termasuk Live Band Penuh (Drum Akustik, Bass, Multi-Gitar)
                </span>
                <input
                  type="checkbox"
                  checked={includeLiveBand}
                  onChange={(e) => setIncludeLiveBand(e.target.checked)}
                  className="w-4 h-4 accent-primary rounded-xs cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Sizing Output Panel (Kanan bergaya Tesla Order Summary) */}
          <div className="lg:col-span-6 rounded-sm bg-[#171a20] text-white p-7 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 block">
                  KONFIGURASI SISTEM MEGASOUND
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                  {calculationResult.recommendedSystemName}
                </h3>
              </div>
              <Badge variant="dark">SIAP DEPLOY</Badge>
            </div>

            {/* Metrik Utama Khas Tesla */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="p-3 bg-white/5 rounded-sm border border-white/10">
                <div className="text-[10px] text-white/50 uppercase">SPL Target FOH</div>
                <div className="text-xl font-bold text-white mt-1">
                  {calculationResult.targetSplFOH} <span className="text-xs font-normal text-white/60">dBA</span>
                </div>
                <div className="text-[9px] text-white/40">Peak {calculationResult.targetSplPeak} dBA</div>
              </div>

              <div className="p-3 bg-white/5 rounded-sm border border-white/10">
                <div className="text-[10px] text-white/50 uppercase">Daya Bersih</div>
                <div className="text-xl font-bold text-primary mt-1">
                  {calculationResult.totalRmsWattage.toLocaleString()} <span className="text-xs">W</span>
                </div>
                <div className="text-[9px] text-white/40">RMS Headroom</div>
              </div>

              <div className="p-3 bg-white/5 rounded-sm border border-white/10">
                <div className="text-[10px] text-white/50 uppercase">Pasokan Genset</div>
                <div className="text-xl font-bold text-white mt-1">
                  {calculationResult.powerRequirementKva} <span className="text-xs font-normal text-white/60">kVA</span>
                </div>
                <div className="text-[9px] text-white/40">3-Phase 380V</div>
              </div>
            </div>

            {/* Rincian Alokasi Perangkat */}
            <div className="space-y-2 font-mono text-xs">
              <div className="text-white/50 text-[10px] uppercase tracking-wider font-bold">
                SPESIFIKASI ALOKASI MODULAR:
              </div>
              <div className="divide-y divide-white/10 border border-white/10 rounded-sm">
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-white/60">Modul Line Array:</span>
                  <span className="font-bold text-white text-right">
                    {calculationResult.lineArrayModules} Box ({calculationResult.recommendedSpeakers})
                  </span>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-white/60">Subwoofer Cardioid:</span>
                  <span className="font-bold text-white text-right">
                    {calculationResult.subwooferCount} Unit Enclosure Dual 18"
                  </span>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-white/60">Konsol FOH:</span>
                  <span className="font-bold text-white text-right">
                    {calculationResult.recommendedConsole}
                  </span>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-white/60">Saluran & Monitor:</span>
                  <span className="font-bold text-white text-right">
                    {calculationResult.channelCount} Channel / {calculationResult.stageMonitorCount} Mixes
                  </span>
                </div>
              </div>
            </div>

            {/* Catatan Rekayasa */}
            <div className="space-y-1.5 text-xs text-white/70 font-sans">
              {calculationResult.technicalNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            {/* Tombol Aksi Kapsul Tesla */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="white-pill"
                size="md"
                onClick={handleCopySpec}
                icon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {copied ? 'Konfigurasi Disalin' : 'Salin Konfigurasi'}
              </Button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full"
                >
                  Pesan Sistem Ini
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
