// services/gear-catalog.service.ts
// Layanan inventaris peralatan tata suara berstandar rider panggung

import { AudioGearItem, GearCategory, TechnicalPortfolio } from '@/types/sound-system.types';

export class GearCatalogService {
  private static readonly gearItems: AudioGearItem[] = [
    // Loudspeakers & Subs
    {
      id: 'gear-k2',
      category: 'speakers',
      brand: 'L-Acoustics',
      model: 'K2 Line Source Element',
      specHighlight: 'Max SPL 147 dB | 35 Hz - 20 kHz | Panflex 70°/110°',
      description: 'Elemen line source touring 3-way quad-amplified dengan teknologi wave sculpture WST untuk jangkauan lemparan jauh konsisten.',
      quantityAvailable: '24 Unit Modular',
    },
    {
      id: 'gear-ks28',
      category: 'speakers',
      brand: 'L-Acoustics',
      model: 'KS28 Reference Subwoofer',
      specHighlight: '2x 18" Neodymium Direct-Radiating | 25 Hz - 60 Hz | 143 dB Peak',
      description: 'Subwoofer standar acuan industri musik dunia dengan laminar airflow vent untuk efisiensi bass tanpa distorsi turbulensi.',
      quantityAvailable: '12 Unit Enclosure',
    },
    {
      id: 'gear-kara',
      category: 'speakers',
      brand: 'L-Acoustics',
      model: 'Kara II Modular WST',
      specHighlight: 'Dual 8" Neodymium | 55 Hz - 20 kHz | 142 dB Max SPL',
      description: 'Line source format sedang dengan Panflex fleksibel, ideal untuk ballroom luas, teater, dan panggung konser sedang.',
      quantityAvailable: '16 Unit Modular',
    },
    {
      id: 'gear-rcf932',
      category: 'speakers',
      brand: 'RCF',
      model: 'ART 932-A Active Point Source',
      specHighlight: '2.100W Peak Class-D | 132 dB Max SPL | 3" Titanium Compression Driver',
      description: 'Speaker aktif portabel resolusi tinggi dengan teknologi FiRPHASE untuk respon fasa 0° yang jernih pada vokal.',
      quantityAvailable: '8 Unit Active',
    },

    // Consoles & FOH
    {
      id: 'gear-digico-sd9',
      category: 'consoles',
      brand: 'DiGiCo',
      model: 'SD9 Stealth Core 2 Digital Console',
      specHighlight: '96 Channels @ 96kHz | 48 Aux/Subgroups | Stealth Digital Processing',
      description: 'Konsol digital legendaris dengan Super FPGA, touch screen responsif, dan dynamic EQ di setiap saluran input.',
      quantityAvailable: '2 Unit Console FOH',
    },
    {
      id: 'gear-dlive-c3500',
      category: 'consoles',
      brand: 'Allen & Heath',
      model: 'dLive C3500 + CDM48 MixRack',
      specHighlight: '128 Channels | 96kHz XCVI Core | Dual 12" Capacitive Touchscreens',
      description: 'Arsitektur audio ultra-low latency 0.7ms dengan emulasi tube preamp dan kompresor vintage internal berkualitas tinggi.',
      quantityAvailable: '2 Unit Surface + Rack',
    },
    {
      id: 'gear-sq6',
      category: 'consoles',
      brand: 'Allen & Heath',
      model: 'SQ-6 Digital Mixer 48 Channels',
      specHighlight: '48 Input Channels | 96kHz FPGA Audio Engine | 24 Fader motorized',
      description: 'Pilihan fleksibel untuk ballroom dan konferensi korporat dengan 8 stereo FX engine dan automatic mic mixing.',
      quantityAvailable: '3 Unit',
    },
    {
      id: 'gear-yamaha-ql1',
      category: 'consoles',
      brand: 'Yamaha',
      model: 'QL1 Digital Mixing Console',
      specHighlight: '32 Mono + 8 Stereo In | Built-in Dan Dugan Automixer | Dante Network',
      description: 'Standar emas konferensi internasional dan penyiaran broadcast dengan integrasi protokol audio Dante.',
      quantityAvailable: '2 Unit',
    },

    // Microphones & RF
    {
      id: 'gear-shure-axient',
      category: 'microphones',
      brand: 'Shure',
      model: 'Axient Digital AD4Q Quad Receiver & AD2/KSM9',
      specHighlight: 'True Digital Diversity | Frequency Diversity Zero Dropouts | ShowLink',
      description: 'Sistem wireless paling stabil di dunia saat ini, kebal terhadap gangguan spektrum RF perkotaan yang padat.',
      quantityAvailable: '8 Channel Receiver + Handheld',
    },
    {
      id: 'gear-sennheiser-ewg4',
      category: 'microphones',
      brand: 'Sennheiser',
      model: 'EW 500 G4 Pro Series w/ MMD 935 Capsule',
      specHighlight: '42 MHz Bandwidth | Transmit Power Switchable 10/30/50 mW',
      description: 'Sistem mikrofon nirkabel vokal profesional dengan dynamic capsule cardioid untuk reject feedback di panggung.',
      quantityAvailable: '12 Channel Complete Set',
    },
    {
      id: 'gear-drum-pack',
      category: 'microphones',
      brand: 'Shure & Audix',
      model: 'Touring Drum & Instrument Mic Kit',
      specHighlight: 'Beta 91A, Beta 52A, SM57, Audix D6, KSM137 Overheads, Radial DIs',
      description: 'Koleksi mikrofon instrumen panggung terlengkap dengan matching impedance dan high SPL tolerance.',
      quantityAvailable: '4 Set Lengkap',
    },

    // Processing & Measurement
    {
      id: 'gear-smaart',
      category: 'processing',
      brand: 'Rational Acoustics',
      model: 'SMAART V9 System Real-Time Acoustic Analyzer',
      specHighlight: 'Dual-Channel FFT | Phase & Magnitude Alignment | Transfer Function',
      description: 'Piranti keras dan lunak analisis akustik panggung untuk kalibrasi time-delay, cross-over, dan phase alignment.',
      quantityAvailable: '2 Measurement Rigs',
    },
    {
      id: 'gear-lake-lm44',
      category: 'processing',
      brand: 'Lake Processing',
      model: 'LM 44 Digital Loudspeaker Processor',
      specHighlight: 'Mesa EQ & Linear Phase Crossovers | Dante I/O | 96kHz Conversion',
      description: 'Manajemen sistem speaker terdepan di dunia untuk routing audio distribusi, limiting speaker, dan time delay.',
      quantityAvailable: '4 Unit Rackmount',
    },
    {
      id: 'gear-shure-rf-distro',
      category: 'processing',
      brand: 'Shure',
      model: 'UA844+SWB Antenna Distribution + UA874 Active Antennas',
      specHighlight: 'Wideband RF 470-960 MHz | Amplified Active Directional Paddle',
      description: 'Distribusi antena RF multi-channel untuk menjaga stabilitas jangkauan mikrofon nirkabel di area luas.',
      quantityAvailable: '4 Rack Distribution Set',
    },
  ];

  private static readonly portfolioItems: TechnicalPortfolio[] = [
    {
      id: 'port-1',
      title: 'Nusantara Soundwave Outdoor Music Festival',
      category: 'Konser & Festival',
      audienceCount: '4.500 Hadirin',
      splDelivered: '104 dBA Cont. @ 45m FOH',
      paConfig: '16x L-Acoustics K2 + 10x KS28 Cardioid Sub Array',
      description: 'Produksi panggung utama festival 3 hari dengan 18 musisi nasional. Penyelarasan fasa presisi menghasilkan respon bass merata tanpa pembatalan akustik (comb filtering).',
      location: 'Stadion Madya, Jakarta',
      dateYear: '2025',
    },
    {
      id: 'port-2',
      title: 'ASEAN Digital Economy Summit Plenary',
      category: 'Konferensi Internasional',
      audienceCount: '1.200 Delegasi',
      splDelivered: '85 dBA (STI Speech Intelligibility 0.76)',
      paConfig: 'Column Array Voice System + 6 Delay Fills + Shure Axient Digital',
      description: 'Sistem tata suara multibahasa 4 saluran interpretasi simultan dengan automixer Dugan untuk 24 pembicara VIP negara sahabat.',
      location: 'Grand Ballroom Hotel Mulia, Jakarta',
      dateYear: '2025',
    },
    {
      id: 'port-3',
      title: 'Royal Heritage Gala Wedding Banquet',
      category: 'Pernikahan Ballroom',
      audienceCount: '900 Tamu VIP',
      splDelivered: '92 dBA Peak (Zero Stage Bleed)',
      paConfig: '8x d&b audiotechnik Line Array + Cardioid Subwoofer Setup',
      description: 'Tata suara orkestra 40 piece string ensemble dan band jazz. Pengaturan directivity tinggi mengeliminasi gema marmer ballroom hotel bintang lima.',
      location: 'The Ritz-Carlton Pacific Place',
      dateYear: '2025',
    },
    {
      id: 'port-4',
      title: 'Sunset Acoustic & Jazz Pavilion',
      category: 'Intimate Event',
      audienceCount: '350 Hadirin',
      splDelivered: '89 dBA Natural Warmth',
      paConfig: '4x Active Point Source System + Digital Stagebox 32ch',
      description: 'Penguatan audio panggung semi-outdoor dengan reproduksi vokal dan instrumen akustik yang jernih, transparan, dan tanpa feedback.',
      location: 'Plataran Dharmawangsa',
      dateYear: '2024',
    },
  ];

  public static getGearByCategory(category?: GearCategory): AudioGearItem[] {
    if (!category) return this.gearItems;
    return this.gearItems.filter((item) => item.category === category);
  }

  public static getAllGear(): AudioGearItem[] {
    return this.gearItems;
  }

  public static getPortfolio(): TechnicalPortfolio[] {
    return this.portfolioItems;
  }
}
