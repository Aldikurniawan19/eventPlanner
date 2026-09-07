// components/features/BentoGallerySection.tsx
'use client';

import React from 'react';
import InteractiveImageBentoGallery, { ImageItem } from '@/components/ui/bento-gallery';

const eventGalleryItems: ImageItem[] = [
  // Kolom 1: Kartu Besar Penuh (Row 1 & Row 2)
  {
    id: 1,
    title: 'Festival Musik & Konser Outdoor',
    desc: 'Rigging line array 40.000W dan moving heads untuk festival musik 5.000 penonton.',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    span: 'row-span-2',
  },

  // Kolom 2: Dua Kartu Bertumpuk (Atas & Bawah)
  {
    id: 2,
    title: 'Ballroom Wedding & Gala Dinner',
    desc: 'Distribusi akustik merata tanpa feedback, berpadu elegan dengan estetika dekorasi floral.',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },
  {
    id: 3,
    title: 'FOH Digital Mixing & Multi-track',
    desc: 'Sound engineer bersertifikasi standby mengawal setiap pergantian artis di rundown.',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },

  // Kolom 3: Kartu Besar Penuh (Row 1 & Row 2)
  {
    id: 4,
    title: 'Plenary Hall & Konferensi MICE',
    desc: 'Mikrofon delegate sistem Dante dengan integrasi proyektor laser 4K dan siaran live streaming.',
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-2',
  },

  // Kolom 4: Dua Kartu Bertumpuk (Atas & Bawah)
  {
    id: 5,
    title: 'Multi-Camera Live Broadcast',
    desc: 'Switcher video live broadcast dan kamera sinematik untuk liputan event paripurna.',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },
  {
    id: 6,
    title: 'Pameran & Exhibition Roder',
    desc: 'Struktur kokoh tahan cuaca dengan sound system terdistribusi untuk kenyamanan pengunjung bazar.',
    url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop',
    span: 'row-span-1',
  },

  // Kolom 5: Kartu Besar Penuh (Row 1 & Row 2)
  {
    id: 7,
    title: 'Electronic Music & DJ Stage',
    desc: 'Konsol Pioneer CDJ standar internasional dengan subwoofer 18 inch berdaya dentum bertenaga.',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-2',
  },

  // Kolom 6: Dua Kartu Bertumpuk (Atas & Bawah)
  {
    id: 8,
    title: 'Tata Mikrofon Drum & Live Band',
    desc: 'Mikrofon instrumen dinamis dan kondensor Shure & Sennheiser untuk akustik panggung prima.',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },
  {
    id: 9,
    title: 'Live Podcast & Virtual Event',
    desc: 'Setup broadcast studio Shure SM7B, boom arm, dan monitoring latensi nol.',
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },

  // Kolom 7: Kartu Besar Penuh (Row 1 & Row 2)
  {
    id: 10,
    title: 'Lighting Truss & Laser Show',
    desc: 'Tata cahaya moving beam, par LED, dan haze machine untuk kemegahan visual panggung.',
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
    span: 'row-span-2',
  },

  // Kolom 8: Dua Kartu Bertumpuk (Atas & Bawah)
  {
    id: 11,
    title: 'In-Ear Monitoring (IEM) Musisi',
    desc: 'Transmitter nirkabel latensi rendah untuk kenyamanan musisi dan penampil panggung.',
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop',
    span: 'row-span-1',
  },
  {
    id: 12,
    title: 'Audio Stadium & Delay Towers',
    desc: 'Sistem tata suara ribuan hadirin dengan delay towers terdistribusi untuk SPL presisi.',
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop',
    span: 'row-span-1',
  },
];

export const BentoGallerySection: React.FC = () => {
  return (
    <div id="galeri" className="w-full">
      <InteractiveImageBentoGallery
        imageItems={eventGalleryItems}
        title="Portofolio Produksi Panggung & Event"
        description="Dokumentasi instalasi sound system, lighting, dan panggung hasil kolaborasi bersama Event Planner di berbagai festival, wedding, dan konferensi."
      />
    </div>
  );
};
