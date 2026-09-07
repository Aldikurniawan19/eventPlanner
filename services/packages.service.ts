// services/packages.service.ts
// Layanan repository paket tata suara terstandarisasi untuk berbagai skala acara

import { AudioPackage } from '@/types/sound-system.types';

export class PackagesService {
  private static readonly packages: AudioPackage[] = [
    {
      id: 'paket-intimate',
      name: 'Intimate & Acoustic Session',
      tag: 'Hingga 200 Audiens',
      capacityLabel: '50 - 200 Audiens',
      powerRms: '3.000 Watt RMS',
      targetSpl: '88 - 92 dBA',
      description: 'Sistem point source resolusi tinggi untuk peluncuran produk, kafe, sesi akustik, atau intimate gathering dengan kejelasan vokal optimal.',
      features: [
        'Respon frekuensi natural 45 Hz - 20 kHz',
        'Footprint ramping tidak memakan area panggung',
        'Time alignment presisi tanpa dengung',
        'Dukungan playback multitrack & audio interface',
      ],
      includedGear: {
        mainPa: '2x RCF ART 932-A (12" Active 2-Way Neodymium)',
        subs: '2x RCF SUB 708-AS MK3 (18" Active Subwoofer)',
        monitors: '2x RCF HD 10-A Active Stage Wedge',
        console: 'Allen & Heath SQ-5 (16 Mic Preamp, 96kHz FPGA)',
        microphones: '4x Shure Beta 58A / Wireless SM58 + 2x DI Box Radial ProDI',
        engineer: '1x Audio Engineer + 1x Stage Technician',
      },
      idealFor: 'Intimate Showcase, Akustik, Gathering Perusahaan, Akad Nikah',
    },
    {
      id: 'paket-ballroom',
      name: 'Grand Ballroom & Gala Dinner',
      tag: 'Paling Populer',
      capacityLabel: '300 - 800 Audiens',
      powerRms: '8.000 Watt RMS',
      targetSpl: '94 - 98 dBA',
      description: 'Konfigurasi line array terkontrol khusus ballroom hotel bergema tinggi, menghasilkan distribusi suara merata dari baris depan hingga meja VIP paling belakang.',
      features: [
        'Penyebaran suara horizontal 100° merata di seluruh ruangan',
        'Cardioid Subwoofer System mencegah gemuruh pada panggung pengantin/VIP',
        'Digital Speech Automixing untuk kejelasan pidato tanpa feedback',
        'Wireless RF Shure QLX-D dengan antena directional Shure UA874',
      ],
      includedGear: {
        mainPa: '8x d&b audiotechnik / L-Acoustics KIVA II Compact Line Array',
        subs: '4x Dual 18" Subwoofer dalam konfigurasi Cardioid Sub Array',
        monitors: '4x 12" Coaxial Active Stage Wedge',
        console: 'DiGiCo S21 + D-Rack 32 In / 16 Out (24-bit/96kHz)',
        microphones: '6x Shure QLX-D Wireless Beta 58A + Full Drum Mic Kit (Shure/Audix)',
        engineer: '1x Lead FOH Engineer + 1x System Technician + 1x RF Coordinator',
      },
      idealFor: 'Resepsi Pernikahan Ballroom, Gala Dinner Korporat, Awarding Night',
    },
    {
      id: 'paket-conference',
      name: 'Plenary Summit & Seminar',
      tag: 'Fokus Kejelasan Vokal',
      capacityLabel: '200 - 1.000 Audiens',
      powerRms: '6.000 Watt RMS',
      targetSpl: '84 - 88 dBA (Speech STI > 0.70)',
      description: 'Didesain khusus untuk konferensi internasional dan summit kenegaraan dengan indeks transmisi ucapan (STI) prima dan sistem backup audio redundan.',
      features: [
        'Dugan Speech Automixer untuk rotasi belasan pembicara tanpa noise floor',
        'Antena RF Terdistribusi untuk jangkauan wireless tanpa blind spot',
        'Dedicated Audio Out untuk Press Conference & Live Broadcast Streaming',
        'Sistem UPS daya cadangan untuk kestabilan konsol audio FOH',
      ],
      includedGear: {
        mainPa: '6x Column Array Voice-Optimized + Delay Fill Speakers',
        subs: '2x 15" Compact Subwoofer untuk video playback audio impact',
        monitors: '2x Low-Profile Podium Monitors',
        console: 'Yamaha QL1 (16+8 Faders, Dante Audio Network Built-in)',
        microphones: '8x Shure Axient Digital Wireless / Microflex Wireless Gooseneck',
        engineer: '1x FOH Conference Specialist + 1x Broadcast Feed Engineer',
      },
      idealFor: 'Konferensi Internasional, RUPS Korporasi, Summit Kenegaraan, Symposium',
    },
    {
      id: 'paket-concert',
      name: 'Touring Concert & Outdoor Festival',
      tag: 'Kekuatan Penuh & Dinamis',
      capacityLabel: '1.000 - 5.000+ Audiens',
      powerRms: '15.000 - 30.000 Watt RMS',
      targetSpl: '102 - 108 dBA Continuous @ FOH',
      description: 'Sistem tata suara berskala festival dengan headroom dinamis masif, jangkauan lemparan jauh (long-throw), dan respon transient bass presisi tanpa distorsi.',
      features: [
        'L-Acoustics K2 / d&b audiotechnik V-Series Large Format Line Array',
        'End-Fire / Gradient Subwoofer Array untuk pukulan kick bass terfokus ke penonton',
        'Penyelarasan fasa akustik real-time via software Rational Acoustics SMAART V9',
        'Jaringan Dante / MADI digital audio Snake dengan kabel fiber optik redundan',
      ],
      includedGear: {
        mainPa: '16x L-Acoustics K2 / Kara II Flying Line Array (8 L / 8 R)',
        subs: '8x L-Acoustics KS28 Dual 18" Subwoofer Enclosure',
        monitors: '8x 15" Bi-Amp Stage Monitor + 4-Way In-Ear Monitor Shure PSM1000',
        console: 'DiGiCo SD9 / Allen & Heath dLive S5000 + Waves SuperRack',
        microphones: '12x Shure Axient Digital Handheld & Wireless IEM + Touring Mic Package',
        engineer: '1x Senior FOH Engineer + 1x Monitor Engineer + 2x System Riggers',
      },
      idealFor: 'Konser Artis Nasional/Internasional, Festival Musik Terbuka, Dies Natalis',
    },
  ];

  public static getAllPackages(): AudioPackage[] {
    return this.packages;
  }

  public static getPackageById(id: string): AudioPackage | undefined {
    return this.packages.find((pkg) => pkg.id === id);
  }
}
