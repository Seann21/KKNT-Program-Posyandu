'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DataSources() {
  return (
    <div className="w-full space-y-6">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Sumber Data & Metodologi</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dokumentasi lengkap tentang bagaimana data diambil, diolah, dan diinterpretasikan dalam aplikasi SiMungil
        </p>
      </div>

      {/* Reference Standards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📋</span>
            <span>Standar Referensi Internasional</span>
          </CardTitle>
          <CardDescription>Standar yang digunakan sebagai acuan perhitungan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <p className="font-semibold text-foreground">WHO Child Growth Standards</p>
            <p className="text-sm text-muted-foreground mt-1">
              Standar pertumbuhan anak yang diterbitkan oleh World Health Organization (WHO) berdasarkan data dari 8,440 anak sehat di 6 negara (Brazil, Ghana, India, Indonesia, Norwegia, Oman). Standar ini menggambarkan cara anak-anak harus tumbuh dalam kondisi optimal dan kesehatan yang baik.
            </p>
            <p className="text-xs text-muted-foreground mt-2">Sumber: WHO (2006)</p>
          </div>

          <div className="border-l-4 border-secondary pl-4">
            <p className="font-semibold text-foreground">CDC Growth Charts</p>
            <p className="text-sm text-muted-foreground mt-1">
              Centers for Disease Control and Prevention (CDC) menyediakan growth charts yang didasarkan pada data dari populasi anak di Amerika Serikat. Data ini digunakan sebagai rujukan tambahan untuk verifikasi dan cross-checking hasil perhitungan.
            </p>
            <p className="text-xs text-muted-foreground mt-2">Sumber: CDC (Revised 2000)</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-foreground">Standar Kementerian Kesehatan RI</p>
            <p className="text-sm text-muted-foreground mt-1">
              Panduan MPASI dan monitoring gizi anak dari Kementerian Kesehatan Republik Indonesia yang disesuaikan dengan kondisi lokal dan kebutuhan nutrisi anak Indonesia.
            </p>
            <p className="text-xs text-muted-foreground mt-2">Sumber: Kemenkes RI</p>
          </div>
        </CardContent>
      </Card>

      {/* Data Input Collection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📊</span>
            <span>Pengambilan Data Input</span>
          </CardTitle>
          <CardDescription>Bagaimana data input dikumpulkan dan validasinya</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <p className="font-semibold text-foreground">Usia Anak</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Cara Pengambilan:</strong> Dihitung dalam satuan bulan sejak tanggal lahir hingga tanggal pemeriksaan.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Validasi:</strong> Rentang usia yang valid adalah 0-60 bulan (0-5 tahun)
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Contoh: Anak lahir 1 Januari 2023, diperiksa 1 Maret 2025 = 26 bulan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-foreground">Berat Badan</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Cara Pengambilan:</strong> Menggunakan timbangan digital dengan akurasi ±100 gram (0.1 kg). Anak ditimbang dalam kondisi tanpa sepatu dan pakaian berat.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Validasi:</strong> Rentang berat yang valid adalah 2-50 kg
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Tip: Timbang pada waktu yang sama setiap hari, sebaiknya pagi hari sebelum makan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <p className="font-semibold text-foreground">Tinggi Badan</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Cara Pengambilan:</strong> Menggunakan stadiometer atau pengukur tinggi badan dengan akurasi ±0.5 cm. Anak diukur dalam posisi berdiri tegak, tanpa sepatu, dengan pandangan lurus ke depan.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Validasi:</strong> Rentang tinggi yang valid adalah 40-150 cm
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Tip: Pengukuran dilakukan 2-3 kali dan diambil rata-ratanya untuk hasil lebih akurat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="font-semibold text-foreground">Jenis Kelamin</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Cara Pengambilan:</strong> Pilih jenis kelamin anak (Laki-laki atau Perempuan).
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Penting:</strong> Jenis kelamin mempengaruhi standar pertumbuhan WHO yang digunakan
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Catatan: Standar berbeda untuk laki-laki dan perempuan karena perbedaan pola pertumbuhan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculation Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🔢</span>
            <span>Metode Perhitungan</span>
          </CardTitle>
          <CardDescription>Rumus dan logika yang digunakan dalam aplikasi</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <p className="font-semibold text-foreground">1. Perhitungan BMI (Body Mass Index)</p>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 font-mono text-sm">
              <p>BMI = Berat Badan (kg) / (Tinggi Badan (m))²</p>
            </div>
            <p className="text-sm text-muted-foreground">
              BMI adalah indikator sederhana untuk mengukur hubungan antara berat badan dan tinggi badan. Nilai BMI dibandingkan dengan standar WHO untuk kategori usia dan jenis kelamin anak.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground">2. Perhitungan Percentile Tinggi (Stunting Check)</p>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 font-mono text-sm">
              <p>Height Percentile (%) = (Tinggi Anak / Tinggi Standar Usia) × 100%</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Tinggi badan anak dibandingkan dengan tinggi standar WHO untuk usia dan jenis kelamin yang sama. Percentile menunjukkan posisi anak dibanding populasi standar.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground">3. Penentuan Kategori Status Gizi</p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-2 text-left text-foreground">Kategori</th>
                  <th className="p-2 text-left text-foreground">Rentang BMI</th>
                  <th className="p-2 text-left text-foreground">Penjelasan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="p-2">Gizi Buruk</td>
                  <td className="p-2">{'< 12.0'}</td>
                  <td className="p-2 text-muted-foreground text-xs">Berat badan jauh di bawah normal</td>
                </tr>
                <tr className="border-b border-gray-200 bg-yellow-50">
                  <td className="p-2">Gizi Kurang</td>
                  <td className="p-2">12.0 - 16.0</td>
                  <td className="p-2 text-muted-foreground text-xs">Berat badan di bawah normal</td>
                </tr>
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="p-2">Gizi Baik</td>
                  <td className="p-2">16.0 - 20.0</td>
                  <td className="p-2 text-muted-foreground text-xs">Berat badan normal/sehat</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-2">Gizi Lebih</td>
                  <td className="p-2">{'>20.0'}</td>
                  <td className="p-2 text-muted-foreground text-xs">Berat badan di atas normal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground">4. Penentuan Kategori Stunting</p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-2 text-left text-foreground">Kategori</th>
                  <th className="p-2 text-left text-foreground">Percentile Tinggi</th>
                  <th className="p-2 text-left text-foreground">Penjelasan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="p-2">Sangat Pendek</td>
                  <td className="p-2">{'< 85%'}</td>
                  <td className="p-2 text-muted-foreground text-xs">Stunting berat - perlu intervensi</td>
                </tr>
                <tr className="border-b border-gray-200 bg-yellow-50">
                  <td className="p-2">Pendek</td>
                  <td className="p-2">85 - 89%</td>
                  <td className="p-2 text-muted-foreground text-xs">Stunting - monitor pertumbuhan</td>
                </tr>
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="p-2">Normal</td>
                  <td className="p-2">90 - 110%</td>
                  <td className="p-2 text-muted-foreground text-xs">Pertumbuhan sesuai standar</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-2">Tinggi</td>
                  <td className="p-2">{'>110%'}</td>
                  <td className="p-2 text-muted-foreground text-xs">Pertumbuhan di atas rata-rata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Limitations & Accuracy */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚠️</span>
            <span>Keterbatasan & Akurasi</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-2">Keterbatasan Aplikasi:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Hanya menggunakan data antopometri dasar (berat, tinggi, usia)</li>
              <li>Tidak mempertimbangkan faktor lain: riwayat penyakit, asupan nutrisi, kondisi sosial ekonomi</li>
              <li>Menggunakan data referensi standar, bukan data lokal spesifik region</li>
              <li>Akurasi pengukuran sangat tergantung pada teknik pengukuran yang benar</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Rekomendasi Penggunaan:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Gunakan untuk screening awal dan referral ke profesional kesehatan</li>
              <li>Pastikan pengukuran dilakukan dengan benar dan akurat</li>
              <li>Monitorkan pertumbuhan anak secara berkala (setiap bulan)</li>
              <li>Konsultasikan hasil dengan dokter/ahli gizi sebelum mengambil keputusan</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card>
        <CardHeader>
          <CardTitle>Pertanyaan atau Feedback?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Jika Anda memiliki pertanyaan tentang metodologi atau ingin memberikan feedback tentang aplikasi SiMungil, silakan hubungi tim kami melalui program KKN Kelompok 2.
          </p>
          <p className="text-xs text-muted-foreground italic">
            SiMungil © 2026 - Sistem Informasi Monitoring Gizi Anak (Program KKN)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
