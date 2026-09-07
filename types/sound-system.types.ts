// types/sound-system.types.ts
// Definisi tipe data untuk sistem tata suara dan rekayasa akustik

export type EventType = 
  | 'concert'      // Konser Musik Live
  | 'conference'   // Konferensi / Summit Korporat
  | 'wedding'      // Gala Dinner / Resepsi Ballroom
  | 'acoustic'     // Intimate Session / Cafe / Lounge
  | 'festival';    // Festival Panggung Terbuka

export type VenueType = 
  | 'indoor-dry'       // Ruang Tertutup Akustik Terkontrol (Studio/Auditorium)
  | 'ballroom-reverb'  // Ballroom Hotel Gema Tinggi
  | 'semi-outdoor'     // Tenda / Kanopi Terbuka
  | 'outdoor-open';    // Lapangan / Area Terbuka Penuh

export interface SoundCalculationInput {
  eventType: EventType;
  venueType: VenueType;
  audienceCapacity: number;
  venueLengthMeters: number;
  venueWidthMeters: number;
  includeLiveBand: boolean;
}

export interface SoundCalculationResult {
  recommendedSystemName: string;
  recommendedSpeakers: string;
  lineArrayModules: number;
  subwooferCount: number;
  totalRmsWattage: number;
  targetSplFOH: number;      // dBA Continuous at Front-of-House
  targetSplPeak: number;     // dBA Peak
  recommendedConsole: string;
  channelCount: number;
  powerRequirementKva: number; // Kebutuhan Genset / Pasokan Listrik 3-Phase
  stageMonitorCount: number;
  technicalNotes: string[];
}

export interface AudioPackage {
  id: string;
  name: string;
  tag: string;
  capacityLabel: string;
  powerRms: string;
  targetSpl: string;
  description: string;
  features: string[];
  includedGear: {
    mainPa: string;
    subs: string;
    monitors: string;
    console: string;
    microphones: string;
    engineer: string;
  };
  idealFor: string;
}

export type GearCategory = 'speakers' | 'consoles' | 'microphones' | 'processing';

export interface AudioGearItem {
  id: string;
  category: GearCategory;
  brand: string;
  model: string;
  specHighlight: string;
  description: string;
  quantityAvailable: string;
}

export interface TechnicalPortfolio {
  id: string;
  title: string;
  category: string;
  audienceCount: string;
  splDelivered: string;
  paConfig: string;
  description: string;
  location: string;
  dateYear: string;
}
