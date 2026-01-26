import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function QuickStartGuide() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step 1 */}
        <Card className="border-l-4 border-l-blue-500 animate-stagger-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">1️⃣</span> Masukkan Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Usia anak dalam bulan (0-60 bulan)</p>
            <p>• Berat badan dalam kg (diukur pakai timbangan)</p>
            <p>• Tinggi badan dalam cm (diukur pakai pengukur tinggi)</p>
            <p>• Jenis kelamin (Laki-laki/Perempuan)</p>
            <p className="text-xs text-muted-foreground italic mt-2">💡 Pastikan pengukuran akurat untuk hasil terbaik</p>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-green-500 animate-stagger-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">2️⃣</span> Lihat Hasil
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Status Gizi (Buruk/Kurang/Baik/Lebih)</p>
            <p>• Status Stunting (Sangat Pendek/Pendek/Normal/Tinggi)</p>
            <p>• Grafik perbandingan BMI dan tinggi badan</p>
            <p>• Rekomendasi nutrisi spesifik</p>
            <p className="text-xs text-muted-foreground italic mt-2">📊 Visualisasi data membantu pemahaman</p>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-orange-500 animate-stagger-3">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">3️⃣</span> Unduh Laporan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Klik tombol &quot;📥 Unduh Hasil (PDF)&quot;</p>
            <p>• Laporan otomatis terunduh ke perangkat</p>
            <p>• Berisi semua data dan rekomendasi</p>
            <p>• Siap untuk dicetak atau dibagikan</p>
            <p className="text-xs text-muted-foreground italic mt-2">✓ Format PDF profesional</p>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-red-500 animate-stagger-4">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">4️⃣</span> Tindak Lanjut
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Ikuti rekomendasi nutrisi yang diberikan</p>
            <p>• Konsultasikan dengan tenaga kesehatan</p>
            <p>• Lakukan pemeriksaan rutin di posyandu</p>
            <p>• Monitor perkembangan anak secara berkala</p>
            <p className="text-xs text-muted-foreground italic mt-2">⚠️ Bukan pengganti konsultasi medis</p>
          </CardContent>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="bg-yellow-50 border-yellow-200 animate-in-up">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💡</span> Tips Penggunaan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">Akurasi Pengukuran:</p>
            <p className="text-muted-foreground">Gunakan alat ukur yang standar dan akurat. Untuk posyandu, gunakan timbangan digital dan pengukur tinggi badan yang tersedia di posyandu.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Waktu Optimal:</p>
            <p className="text-muted-foreground">Pengukuran terbaik dilakukan pagi hari sebelum anak makan/minum untuk hasil paling akurat.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Frekuensi Pemeriksaan:</p>
            <p className="text-muted-foreground">Periksa anak setiap bulan atau minimal setiap 3 bulan untuk monitoring pertumbuhan dan gizi.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Keterbatasan:</p>
            <p className="text-muted-foreground">Aplikasi ini hanya based on anthropometry (berat & tinggi). Konsultasi dokter/gizi klinis untuk diagnosis komprehensif.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
