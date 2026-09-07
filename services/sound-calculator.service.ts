// services/sound-calculator.service.ts
// Logika rekayasa akustik & estimasi spesifikasi perangkat tata suara

import {
  SoundCalculationInput,
  SoundCalculationResult,
} from '@/types/sound-system.types';

export class SoundCalculatorService {
  /**
   * Menghitung rekomendasi konfigurasi sound system berdasarkan parameter akustik venue
   */
  public static calculate(input: SoundCalculationInput): SoundCalculationResult {
    const {
      eventType,
      venueType,
      audienceCapacity,
      venueLengthMeters,
      includeLiveBand,
    } = input;

    // 1. Tentukan target SPL di FOH (Front of House)
    let targetSplFOH = 90;
    let targetSplPeak = 105;

    switch (eventType) {
      case 'concert':
      case 'festival':
        targetSplFOH = 100;
        targetSplPeak = 114;
        break;
      case 'wedding':
        targetSplFOH = 88;
        targetSplPeak = 98;
        break;
      case 'conference':
        targetSplFOH = 84;
        targetSplPeak = 92;
        break;
      case 'acoustic':
        targetSplFOH = 86;
        targetSplPeak = 95;
        break;
    }

    // Penyesuaian outdoor (kehilangan pantulan akustik ruangan / free-field attenuation)
    if (venueType === 'outdoor-open') {
      targetSplFOH += 2;
      targetSplPeak += 2;
    }

    // 2. Kalkulasi Line Array & Subwoofer
    let lineArrayModules = 4;
    let subwooferCount = 2;
    let recommendedSystemName = 'Compact Active System';
    let recommendedSpeakers = '2x Active High-Definition Point Source + 2x 15" Sub';

    if (audienceCapacity <= 250 && venueLengthMeters <= 20) {
      lineArrayModules = 4;
      subwooferCount = 2;
      recommendedSystemName = 'Point Source HD System';
      recommendedSpeakers = '2x Active Point Source 12" + 2x Single 18" Subwoofer';
    } else if (audienceCapacity <= 600 && venueLengthMeters <= 35) {
      lineArrayModules = 8;
      subwooferCount = 4;
      recommendedSystemName = 'Mid-Format Line Array System';
      recommendedSpeakers = '8x Dual 8" Active Line Array (4 L / 4 R) + 4x Ground 18" Sub';
    } else if (audienceCapacity <= 1500 && venueLengthMeters <= 50) {
      lineArrayModules = 12;
      subwooferCount = 8;
      recommendedSystemName = 'Touring Grade Line Array System';
      recommendedSpeakers = '12x Dual 10" Line Array (6 L / 6 R) + 8x Dual 18" Horn-Loaded Sub';
    } else {
      lineArrayModules = 16;
      subwooferCount = 12;
      recommendedSystemName = 'Festival Arena Line Array System';
      recommendedSpeakers = '16x Dual 12" Long-Throw Line Array (8 L / 8 R) + 12x Dual 18" Cardioid Sub';
    }

    // 3. Estimasi Total Daya RMS Watt
    // Kalkulasi berbasis watt per audiens + headroom venue
    let baseWattPerPerson = eventType === 'concert' || eventType === 'festival' ? 12 : 6;
    if (venueType === 'outdoor-open') baseWattPerPerson *= 1.4;
    if (venueType === 'ballroom-reverb') baseWattPerPerson *= 0.9; // Cegah resonansi berlebih

    const calculatedWattage = Math.round(audienceCapacity * baseWattPerPerson);
    // Standarisasi step watt (minimal 3.000W, step 1.000W)
    const totalRmsWattage = Math.max(3000, Math.ceil(calculatedWattage / 1000) * 1000);

    // 4. Kebutuhan Pasokan Daya Listrik / Genset (kVA) dengan Headroom 35%
    const totalElectricalKw = (totalRmsWattage * 1.35) / 1000;
    const powerRequirementKva = Math.max(5, Math.ceil(totalElectricalKw * 1.25));

    // 5. Rekomendasi Mixer & Channel Panggung
    let channelCount = 16;
    let recommendedConsole = 'Allen & Heath SQ-5 / Behringer X32 Compact';
    let stageMonitorCount = 4;

    if (includeLiveBand || eventType === 'concert' || eventType === 'festival') {
      if (audienceCapacity > 800) {
        channelCount = 48;
        recommendedConsole = 'DiGiCo SD9 / Allen & Heath dLive C3500';
        stageMonitorCount = 8;
      } else {
        channelCount = 32;
        recommendedConsole = 'DiGiCo S21 / Allen & Heath SQ-6 + Digital Stagebox';
        stageMonitorCount = 6;
      }
    } else if (eventType === 'conference') {
      channelCount = 16;
      recommendedConsole = 'Yamaha QL1 w/ Dugan Speech Automixer';
      stageMonitorCount = 2;
    }

    // 6. Catatan Rekayasa Akustik
    const technicalNotes: string[] = [];

    if (venueType === 'ballroom-reverb') {
      technicalNotes.push('Disarankan menggunakan Cardioid Subwoofer Array untuk mereduksi kebocoran frekuensi rendah (low rumble) ke area panggung.');
      technicalNotes.push('Pengaturan sudut modul Line Array difokuskan langsung ke audiens untuk menghindari pantulan dinding kaca/marmer.');
    } else if (venueType === 'outdoor-open') {
      technicalNotes.push('Disarankan penempatan delay tower jika kedalaman area melebihi 40 meter demi konsistensi SPL tanpa membuat baris depan kelebihan volume.');
      technicalNotes.push('Kabel daya dan power distribution wajib bersertifikasi IP65 tahan cuaca.');
    } else {
      technicalNotes.push('Penyelarasan fasa (time alignment) antara Main PA dan Subwoofer dikalibrasi menggunakan software SMAART V9.');
    }

    if (includeLiveBand) {
      technicalNotes.push('Disertakan 4-channel dedicated In-Ear Monitoring (IEM) Shure PSM900 untuk vokalis utama guna menurunkan polusi suara panggung.');
    }

    return {
      recommendedSystemName,
      recommendedSpeakers,
      lineArrayModules,
      subwooferCount,
      totalRmsWattage,
      targetSplFOH,
      targetSplPeak,
      recommendedConsole,
      channelCount,
      powerRequirementKva,
      stageMonitorCount,
      technicalNotes,
    };
  }
}
