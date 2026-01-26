export interface ChildData {
  age: number; // in months
  weight: number; // in kg
  height: number; // in cm
  gender: 'male' | 'female';
}

export interface NutritionResult {
  bmi: number;
  status: 'Gizi Buruk' | 'Gizi Kurang' | 'Gizi Baik' | 'Gizi Lebih';
  statusCode: 'severe-underweight' | 'underweight' | 'normal' | 'overweight';
  color: 'danger' | 'warning' | 'success' | 'info';
  emoji: string;
  description: string;
  recommendations: string[];
}

export interface StuntingResult {
  heightPercentile: number;
  normalHeight: number;
  status: 'Sangat Pendek' | 'Pendek' | 'Normal' | 'Tinggi';
  statusCode: 'severely-stunted' | 'stunted' | 'normal' | 'tall';
  color: 'danger' | 'warning' | 'success' | 'info';
  emoji: string;
  description: string;
  recommendations: string[];
}

// Reference data for height and weight by age (WHO/CDC standards)
// Simplified for age groups (in months)
const referenceData: {
  [key: string]: { [key: string]: { height: number; weight: number } };
} = {
  male: {
    '6': { height: 67, weight: 7.5 },
    '12': { height: 75, weight: 9.5 },
    '18': { height: 81, weight: 11.0 },
    '24': { height: 87, weight: 12.5 },
    '36': { height: 94, weight: 14.5 },
    '48': { height: 102, weight: 16.5 },
    '60': { height: 109, weight: 19.0 },
  },
  female: {
    '6': { height: 65, weight: 7.0 },
    '12': { height: 73, weight: 9.0 },
    '18': { height: 79, weight: 10.5 },
    '24': { height: 85, weight: 12.0 },
    '36': { height: 92, weight: 14.0 },
    '48': { height: 100, weight: 16.0 },
    '60': { height: 107, weight: 18.0 },
  },
};

// Food recommendations based on nutrition status
const foodRecommendations: {
  [key: string]: string[];
} = {
  'Gizi Buruk': [
    'Telur ayam 2-3x/minggu',
    'Hati ayam atau sapi 2x/minggu',
    'Ikan atau daging merah 3-4x/minggu',
    'Kacang-kacangan & tahu setiap hari',
    'Susu atau produk dairy 2x/hari',
    'Buah berwarna 2x/hari (jeruk, pepaya, mangga)',
    'Sayuran hijau 1x/hari (bayam, brokoli)',
    'Nasi atau biji-bijian di setiap makan',
  ],
  'Gizi Kurang': [
    'Telur ayam 2x/minggu',
    'Ikan atau daging 3x/minggu',
    'Kacang-kacangan & tahu 4-5x/minggu',
    'Susu atau produk dairy 1x/hari',
    'Buah berwarna 1x/hari',
    'Sayuran hijau 4-5x/minggu',
    'Pastikan porsi karbohidrat cukup',
  ],
  'Gizi Baik': [
    'Pertahankan pola makan seimbang',
    'Protein hewani 2-3x/minggu',
    'Sayuran dan buah-buahan setiap hari',
    'Tetap aktif dan bermain',
    'Pemeriksaan rutin ke posyandu',
  ],
  'Gizi Lebih': [
    'Kurangi makanan berlemak dan bergula',
    'Tingkatkan aktivitas fisik & bermain',
    'Porsi karbohidrat normal dengan serat tinggi',
    'Susu rendah lemak jika memungkinkan',
    'Konsultasi ke ahli gizi',
    'Hindari jajanan manis dan minuman bersoda',
  ],
};

function getClosestAgeReference(
  age: number
): { ageGroup: string; data: { height: number; weight: number } } {
  const ageGroups = Object.keys(referenceData.male).map(Number).sort((a, b) => a - b);
  let closest = ageGroups[0];

  for (const group of ageGroups) {
    if (Math.abs(group - age) < Math.abs(closest - age)) {
      closest = group;
    }
  }

  return {
    ageGroup: closest.toString(),
    data: referenceData.male[closest.toString()],
  };
}

export function calculateNutritionStatus(data: ChildData): NutritionResult {
  const bmi = data.weight / ((data.height / 100) ** 2);
  const ageRef = getClosestAgeReference(data.age);
  const referenceHeight = ageRef.data.height;
  const heightPercentage = (data.height / referenceHeight) * 100;

  let status: NutritionResult['status'];
  let statusCode: NutritionResult['statusCode'];
  let color: NutritionResult['color'];
  let emoji: string;
  let description: string;

  // Simplified classification based on BMI for age
  if (bmi < 14) {
    status = 'Gizi Buruk';
    statusCode = 'severe-underweight';
    color = 'danger';
    emoji = '😢';
    description = 'Kondisi bahaya - Segera konsultasi ke ahli gizi atau dokter';
  } else if (bmi < 16.5) {
    status = 'Gizi Kurang';
    statusCode = 'underweight';
    color = 'warning';
    emoji = '😐';
    description = 'Kondisi peringatan - Perbaiki asupan nutrisi';
  } else if (bmi < 20) {
    status = 'Gizi Baik';
    statusCode = 'normal';
    color = 'success';
    emoji = '😊';
    description = 'Kondisi aman - Pertahankan pola makan sehat';
  } else {
    status = 'Gizi Lebih';
    statusCode = 'overweight';
    color = 'info';
    emoji = '🤔';
    description = 'Kondisi gemuk - Perlu aktivitas lebih dan pola makan teratur';
  }

  return {
    bmi: Math.round(bmi * 10) / 10,
    status,
    statusCode,
    color,
    emoji,
    description,
    recommendations: foodRecommendations[status],
  };
}

export function calculateStuntingStatus(data: ChildData): StuntingResult {
  const ageRef = getClosestAgeReference(data.age);
  const referenceHeight = ageRef.data.height;
  const heightPercentile = (data.height / referenceHeight) * 100;

  let status: StuntingResult['status'];
  let statusCode: StuntingResult['statusCode'];
  let color: StuntingResult['color'];
  let emoji: string;
  let description: string;

  if (heightPercentile < 85) {
    status = 'Sangat Pendek';
    statusCode = 'severely-stunted';
    color = 'danger';
    emoji = '⚠️';
    description = 'Kondisi bahaya - Segera konsultasi ke dokter atau ahli gizi';
  } else if (heightPercentile < 95) {
    status = 'Pendek';
    statusCode = 'stunted';
    color = 'warning';
    emoji = '⚠️';
    description = 'Kondisi peringatan - Perhatikan asupan nutrisi dan kesehatan';
  } else if (heightPercentile < 110) {
    status = 'Normal';
    statusCode = 'normal';
    color = 'success';
    emoji = '✓';
    description = 'Kondisi aman - Pertumbuhan tinggi anak normal';
  } else {
    status = 'Tinggi';
    statusCode = 'tall';
    color = 'info';
    emoji = '📈';
    description = 'Tinggi anak di atas rata-rata untuk usianya';
  }

  const stuntingRecommendations: Record<StuntingResult['status'], string[]> = {
    'Sangat Pendek': [
      'Segera konsultasi ke dokter atau ahli gizi',
      'Periksa penyebab pertumbuhan terhambat',
      'Tingkatkan asupan protein dan zat besi',
      'Pemantauan tinggi badan berkala',
    ],
    Pendek: [
      'Perhatikan asupan nutrisi dan kesehatan',
      'Konsultasi ke posyandu atau tenaga kesehatan',
      'Pastikan pola makan seimbang',
      'Pemantauan pertumbuhan rutin',
    ],
    Normal: [
      'Pertahankan pola makan bergizi seimbang',
      'Lanjutkan pemantauan rutin ke posyandu',
      'Aktivitas fisik dan istirahat cukup',
    ],
    Tinggi: [
      'Pertumbuhan tinggi baik',
      'Pertahankan asupan gizi seimbang',
      'Pemeriksaan rutin ke posyandu',
    ],
  };

  return {
    heightPercentile: Math.round(heightPercentile * 10) / 10,
    normalHeight: Math.round(referenceHeight * 10) / 10,
    status,
    statusCode,
    color,
    emoji,
    description,
    recommendations: stuntingRecommendations[status],
  };
}
