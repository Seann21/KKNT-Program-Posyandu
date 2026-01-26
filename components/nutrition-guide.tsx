'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function NutritionGuide() {
  const categories = [
    {
      status: 'Gizi Baik',
      emoji: '🟢',
      bmi: '16-20',
      description: 'Anak memiliki berat badan yang sesuai dengan tinggi badan dan usianya.',
      color: 'bg-green-50 border-green-200',
      recommendations: [
        'Terus pertahankan pola makan sehat dan bergizi',
        'Berikan makanan bervariasi dengan protein, karbohidrat, dan sayuran',
        'Lakukan pemeriksaan kesehatan berkala setiap 3-6 bulan',
        'Pastikan anak mendapatkan asupan gizi seimbang',
      ],
    },
    {
      status: 'Gizi Kurang',
      emoji: '🟡',
      bmi: '12-16',
      description: 'Berat badan anak lebih rendah dari yang seharusnya untuk usia dan tingginya.',
      color: 'bg-yellow-50 border-yellow-200',
      recommendations: [
        'Tingkatkan asupan kalori dan protein dalam makanan',
        'Tambahkan telur, ikan, daging, atau kacang-kacangan ke menu harian',
        'Berikan camilan bergizi antara waktu makan utama',
        'Pemeriksaan kesehatan lebih sering, minimal 1 bulan sekali',
      ],
    },
    {
      status: 'Gizi Buruk',
      emoji: '🔴',
      bmi: '< 12',
      description: 'Berat badan anak jauh lebih rendah dari seharusnya - ini kondisi serius.',
      color: 'bg-red-50 border-red-200',
      recommendations: [
        '⚠️ SEGERA KONSULTASI DENGAN DOKTER/AHLI GIZI',
        'Tingkatkan frekuensi makan menjadi 5-6 kali sehari',
        'Berikan makanan bernutrisi tinggi seperti telur, hati ayam, susu',
        'Pantau pertumbuhan mingguan dan ikuti saran medis profesional',
        'Kemungkinkan perlunya suplemen nutrisi atau terapi khusus',
      ],
    },
    {
      status: 'Gizi Lebih',
      emoji: '🔵',
      bmi: '> 20',
      description: 'Berat badan anak lebih dari yang seharusnya untuk usia dan tingginya.',
      color: 'bg-blue-50 border-blue-200',
      recommendations: [
        'Kurangi konsumsi makanan berlemak, gorengan, dan makanan manis',
        'Tingkatkan aktivitas fisik dan bermain aktif setiap hari',
        'Berikan porsi yang tepat sesuai usia anak',
        'Fokus pada buah, sayuran, dan protein tanpa lemak',
        'Hindari minuman manis dan junk food',
      ],
    },
  ];

  const stuntingCategories = [
    {
      status: 'Sangat Pendek',
      emoji: '🔴',
      range: '< 85%',
      description: 'Tinggi badan anak jauh di bawah standar untuk usianya - perlu perhatian segera.',
      color: 'bg-red-50 border-red-200',
    },
    {
      status: 'Pendek',
      emoji: '🟡',
      range: '85-89%',
      description: 'Tinggi badan anak di bawah standar untuk usianya - perlu ditingkatkan.',
      color: 'bg-yellow-50 border-yellow-200',
    },
    {
      status: 'Normal',
      emoji: '🟢',
      range: '90-110%',
      description: 'Tinggi badan anak sesuai dengan standar untuk usianya - pertumbuhan baik.',
      color: 'bg-green-50 border-green-200',
    },
    {
      status: 'Tinggi',
      emoji: '🔵',
      range: '> 110%',
      description: 'Tinggi badan anak lebih dari standar untuk usianya - pertumbuhan optimal.',
      color: 'bg-blue-50 border-blue-200',
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Nutrition Guide */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Panduan Status Gizi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Card key={cat.status} className={`border-2 ${cat.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <CardTitle>{cat.status}</CardTitle>
                    <CardDescription>BMI: {cat.bmi}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground">{cat.description}</p>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">REKOMENDASI:</p>
                  <ul className="space-y-1">
                    {cat.recommendations.map((rec, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2">
                        <span>•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stunting Guide */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Panduan Status Pertumbuhan (Stunting)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stuntingCategories.map((cat) => (
            <Card key={cat.status} className={`border-2 ${cat.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <CardTitle>{cat.status}</CardTitle>
                    <CardDescription>{cat.range} dari standar</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">{cat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <Card className="bg-amber-50 border-amber-200 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📌</span>
            <span>Catatan Penting</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-2">Kapan Harus Konsultasi Dokter Segera?</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Anak dengan status Gizi Buruk</li>
              <li>Anak dengan status Sangat Pendek (Severe Stunting)</li>
              <li>Tidak ada peningkatan berat atau tinggi badan selama 3 bulan</li>
              <li>Anak tampak lemas, lesu, atau kurang responsif</li>
              <li>Terdapat tanda-tanda penyakit atau infeksi</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Tips Peningkatan Gizi di Rumah:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Berikan makan pada waktu yang konsisten (4-5 kali sehari)</li>
              <li>Pilih makanan bergizi tinggi: telur, ikan, daging tanpa lemak, sayuran, buah</li>
              <li>Hindari junk food dan minuman manis</li>
              <li>Ciptakan suasana makan yang positif dan menyenangkan</li>
              <li>Jangan paksa anak makan, tapi dorong konsumsi makanan bergizi</li>
              <li>Pastikan anak bermain dan berolahraga setiap hari</li>
            </ul>
          </div>

          <div className="p-3 rounded bg-white border border-amber-100 mt-3">
            <p className="text-xs font-semibold text-foreground mb-1">⚕️ Disclaimer Medis:</p>
            <p className="text-xs text-muted-foreground">
              Aplikasi SiMungil ini adalah alat screening awal dan bukan pengganti konsultasi profesional. Hasil yang ditampilkan berdasarkan perhitungan standar WHO dan CDC. Untuk diagnosis definitif dan rencana penanganan yang akurat, selalu konsultasikan dengan dokter anak, bidan, atau ahli gizi profesional yang berpengalaman.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
