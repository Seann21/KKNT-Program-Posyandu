import type { NutritionResult as NutritionResultType, StuntingResult } from './calculator';

interface ExportData {
  childData: {
    age: number;
    weight: number;
    height: number;
    gender: string;
  };
  nutritionResult: NutritionResultType;
  stuntingResult: StuntingResult;
  timestamp: string;
}

export async function exportResultToPDF(data: ExportData) {
  // Import secara dinamis hanya saat fungsi dijalankan (di browser)
  const html2pdf = (await import('html2pdf.js')).default;

  const {
    childData,
    nutritionResult,
    stuntingResult,
    timestamp,
  } = data;

  // Create HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Laporan Gizi dan Stunting Anak</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: white;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #06B6D4;
            padding-bottom: 20px;
          }
          .header h1 {
            color: #0891B2;
            margin: 0;
            font-size: 28px;
          }
          .header p {
            color: #666;
            margin: 5px 0;
            font-size: 12px;
          }
          .section {
            margin-bottom: 25px;
            page-break-inside: avoid;
          }
          .section-title {
            background: #E0F7FA;
            color: #0891B2;
            padding: 10px 15px;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
            border-left: 5px solid #06B6D4;
          }
          .data-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
          }
          .data-item {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 5px;
            border-left: 4px solid #06B6D4;
          }
          .data-label {
            font-size: 12px;
            color: #666;
            font-weight: bold;
            text-transform: uppercase;
          }
          .data-value {
            font-size: 18px;
            color: #333;
            font-weight: bold;
            margin-top: 5px;
          }
          .status-badge {
            display: inline-block;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
            margin: 5px 0;
          }
          .status-danger {
            background: #FFEBEE;
            color: #C62828;
          }
          .status-warning {
            background: #FFF3E0;
            color: #E65100;
          }
          .status-success {
            background: #E8F5E9;
            color: #2E7D32;
          }
          .status-info {
            background: #E3F2FD;
            color: #1565C0;
          }
          .recommendations {
            background: #F0F9FF;
            padding: 15px;
            border-radius: 5px;
            border: 2px solid #06B6D4;
            margin-top: 10px;
          }
          .recommendations h3 {
            color: #0891B2;
            margin-top: 0;
          }
          .recommendations ul {
            margin: 10px 0;
            padding-left: 20px;
          }
          .recommendations li {
            margin: 8px 0;
            font-size: 13px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #E0E0E0;
            font-size: 11px;
            color: #999;
            text-align: center;
          }
          .warning-box {
            background: #FFF3CD;
            border: 1px solid #FFC107;
            padding: 12px;
            border-radius: 5px;
            margin: 15px 0;
            font-size: 12px;
            color: #856404;
          }
          @media print {
            body { margin: 0; }
            .section { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>SiMungil</h1>
          <p>Laporan Hasil Pemeriksaan Gizi & Stunting Anak</p>
          <p>Tanggal: ${timestamp}</p>
        </div>

        <div class="section">
          <div class="section-title">Data Anak</div>
          <div class="data-grid">
            <div class="data-item">
              <div class="data-label">Usia</div>
              <div class="data-value">${childData.age} bulan</div>
            </div>
            <div class="data-item">
              <div class="data-label">Jenis Kelamin</div>
              <div class="data-value">${childData.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Berat Badan</div>
              <div class="data-value">${childData.weight} kg</div>
            </div>
            <div class="data-item">
              <div class="data-label">Tinggi Badan</div>
              <div class="data-value">${childData.height} cm</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Status Gizi</div>
          <div class="status-badge ${getStatusClass(nutritionResult.status)}">
            ${nutritionResult.status}
          </div>
          <p><strong>BMI:</strong> ${nutritionResult.bmi.toFixed(2)} (${getNutritionRange(nutritionResult.bmi)})</p>
          <div class="recommendations">
            <h3>Rekomendasi</h3>
            <ul>
              ${nutritionResult.recommendations.map((rec: string) => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Status Stunting</div>
          <div class="status-badge ${getStuntingStatusClass(stuntingResult.status)}">
            ${stuntingResult.status}
          </div>
          <p><strong>Persentase Tinggi Normal:</strong> ${stuntingResult.heightPercentile.toFixed(1)}%</p>
          <p><strong>Tinggi Anak:</strong> ${childData.height} cm</p>
          <p><strong>Tinggi Normal Usia ${childData.age} Bulan:</strong> ${stuntingResult.normalHeight.toFixed(1)} cm</p>
          <div class="recommendations">
            <h3>Rekomendasi</h3>
            <ul>
              ${stuntingResult.recommendations.map((rec: string) => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="warning-box">
          ⚠️ <strong>Disclaimer Penting:</strong> Laporan ini dibuat berdasarkan data antropometri (berat dan tinggi) saja. Untuk diagnosis kesehatan yang akurat dan komprehensif, konsultasikan dengan tenaga medis profesional (dokter, bidan, atau gizi klinis). Aplikasi ini hanya alat bantu screening dan bukan pengganti diagnosis medis.
        </div>

        <div class="footer">
          <p>Laporan ini dicetak dari SiMungil - Kalkulator Gizi & Stunting Checker</p>
          <p>Program KKN Kelompok 2 | Panduan medis berdasarkan standar WHO, CDC, dan Kemenkes RI</p>
        </div>
      </body>
    </html>
  `;

  // Configure PDF options
  const options = {
    margin: 10,
    filename: `Laporan_Gizi_${new Date().toISOString().split('T')[0]}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait' as const, unit: 'mm' as const, format: 'a4' as const },
  };

  // Generate and download PDF
  html2pdf().set(options).from(htmlContent).save();
}

function getStatusClass(status: string): string {
  if (status.includes('Buruk')) return 'status-danger';
  if (status.includes('Kurang')) return 'status-warning';
  if (status.includes('Baik')) return 'status-success';
  if (status.includes('Lebih')) return 'status-info';
  return 'status-info';
}

function getStuntingStatusClass(status: string): string {
  if (status.includes('Sangat')) return 'status-danger';
  if (status.includes('Pendek')) return 'status-warning';
  if (status.includes('Normal')) return 'status-success';
  if (status.includes('Tinggi')) return 'status-info';
  return 'status-info';
}

function getNutritionRange(bmi: number): string {
  if (bmi < 12) return 'Gizi Buruk';
  if (bmi < 14.5) return 'Gizi Kurang';
  if (bmi <= 20) return 'Gizi Baik';
  return 'Gizi Lebih';
}
