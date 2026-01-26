'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import type { NutritionResult as NutritionResultType, StuntingResult } from '@/lib/calculator';
import { exportResultToPDF } from '@/lib/pdf-export';

interface NutritionAnalysisDetailedProps {
  nutritionResult: NutritionResultType;
  stuntingResult: StuntingResult;
  childData: {
    age: number;
    weight: number;
    height: number;
    gender: string;
  };
  onReset: () => void;
}

export function NutritionAnalysisDetailed({
  nutritionResult,
  stuntingResult,
  childData,
  onReset,
}: NutritionAnalysisDetailedProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportResultToPDF({
        childData,
        nutritionResult,
        stuntingResult,
        timestamp: new Date().toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  // Prepare chart data for BMI comparison
  const bmiChartData = [
    {
      name: 'BMI Anak',
      value: parseFloat(nutritionResult.bmi.toFixed(1)),
      range: 'Actual',
    },
    {
      name: 'BMI Normal (16-20)',
      value: 18,
      range: 'Reference',
    },
  ];

  // Prepare stunting percentage data
  const stuntingChartData = [
    {
      name: 'Tinggi Anak',
      value: childData.height,
    },
    {
      name: 'Tinggi Normal',
      value: 100,
    },
  ];

  const getStatusIcon = (color: string) => {
    switch (color) {
      case 'danger':
        return '🔴';
      case 'warning':
        return '🟡';
      case 'success':
        return '🟢';
      case 'info':
        return '🔵';
      default:
        return '⚪';
    }
  };

  const getChartColor = (color: string) => {
    switch (color) {
      case 'danger':
        return '#ef4444';
      case 'warning':
        return '#eab308';
      case 'success':
        return '#22c55e';
      case 'info':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="w-full space-y-5 md:space-y-6 px-2 md:px-0">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8 animate-in-up px-2 text-slate-700">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 animate-stagger-1 leading-tight">Hasil Analisis Gizi & <span className="bg-linear-to-r from-primary to-secondary bg-clip-text">Pertumbuhan</span></h2>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground animate-stagger-2">Usia: {childData.age} bulan • Jenis Kelamin: {childData.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</p>
      </div>

      {/* Nutrition Status Card */}
      <Card className="border-2 border-white animate-stagger-1 hover:shadow-lg transition-shadow">
        <CardHeader className="px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <CardTitle className="text-lg sm:text-xl">Status Gizi</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Berdasarkan perhitungan BMI (Body Mass Index)</CardDescription>
            </div>
            <span className="text-3xl sm:text-4xl shrink-0">{nutritionResult.emoji}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="p-2 md:p-3 rounded-lg bg-muted">
              <p className="text-[0.65rem] md:text-xs text-muted-foreground font-semibold">BERAT</p>
              <p className="text-base md:text-lg font-bold text-foreground">{childData.weight} kg</p>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-muted">
              <p className="text-[0.65rem] md:text-xs text-muted-foreground font-semibold">TINGGI</p>
              <p className="text-base md:text-lg font-bold text-foreground">{childData.height} cm</p>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-muted">
              <p className="text-[0.65rem] md:text-xs text-muted-foreground font-semibold">BMI</p>
              <p className="text-base md:text-lg font-bold text-foreground">{nutritionResult.bmi.toFixed(1)}</p>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-muted">
              <p className="text-[0.65rem] md:text-xs text-muted-foreground font-semibold">USIA</p>
              <p className="text-base md:text-lg font-bold text-foreground">{childData.age}m</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200">
            <span className="text-4xl">{getStatusIcon(nutritionResult.color)}</span>
            <div>
              <p className="font-semibold text-foreground">{nutritionResult.status}</p>
              <p className="text-sm text-muted-foreground">{nutritionResult.description}</p>
            </div>
          </div>

          {/* BMI Chart */}
          <div className="h-56 sm:h-64 w-full mt-4 md:mt-6">
            <p className="text-xs sm:text-sm font-semibold mb-3 text-foreground">Perbandingan BMI</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bmiChartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="value" fill={getChartColor(nutritionResult.color)}>
                  {bmiChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? getChartColor(nutritionResult.color) : '#9ca3af'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Stunting Status Card */}
      <Card className="border-2 border-white animate-stagger-2 hover:shadow-lg transition-shadow">
        <CardHeader className="px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <CardTitle className="text-lg sm:text-xl">Status Pertumbuhan (Stunting Check)</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Berdasarkan perbandingan tinggi badan dengan standar usia</CardDescription>
            </div>
            <span className="text-3xl sm:text-4xl shrink-0">{stuntingResult.emoji}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Status Badge */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200">
            <span className="text-4xl">{getStatusIcon(stuntingResult.color)}</span>
            <div>
              <p className="font-semibold text-foreground">{stuntingResult.status}</p>
              <p className="text-sm text-muted-foreground">{stuntingResult.description}</p>
            </div>
          </div>

          {/* Percentile Data */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-muted">
            <div>
              <p className="text-xs text-muted-foreground font-semibold">PERCENTILE TINGGI</p>
              <p className="text-2xl font-bold text-foreground">{stuntingResult.heightPercentile.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground mt-1">dari standar usia</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold">KATEGORI</p>
              <p className="text-lg font-bold text-foreground capitalize">{stuntingResult.status}</p>
            </div>
          </div>

          {/* Height Comparison Chart */}
          <div className="h-56 sm:h-64 w-full mt-4 md:mt-6">
            <p className="text-xs sm:text-sm font-semibold mb-3 text-foreground">Perbandingan Tinggi Badan</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { month: 'Anak', height: childData.height },
                  { month: 'Standar Normal', height: 100 },
                ]}
                margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} label={{ value: 'cm', angle: -90, position: 'insideLeft', offset: 5 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="height"
                  stroke={getChartColor(stuntingResult.color)}
                  strokeWidth={2}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Recommendations */}
      <Card className="animate-stagger-3 hover:shadow-lg transition-shadow border-white">
        <CardHeader>
          <CardTitle>Rekomendasi & Saran</CardTitle>
          <CardDescription>Langkah-langkah yang disarankan untuk peningkatan gizi anak</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {nutritionResult.recommendations.map((rec, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <span className="text-xl">✓</span>
                <p className="text-foreground">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Source & Methodology */}
      <Card className="bg-blue-50 border-blue-200 animate-stagger-4 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-base">📊 Sumber Data & Metodologi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">Sumber Data Referensi:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>WHO Child Growth Standards (World Health Organization)</li>
              <li>CDC Growth Charts untuk anak usia 0-5 tahun</li>
              <li>Standar MPASI Kementerian Kesehatan RI</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Cara Pengambilan Data:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Usia: Dihitung dalam bulan sejak lahir</li>
              <li>Berat Badan: Diukur menggunakan timbangan digital (±100g)</li>
              <li>Tinggi Badan: Diukur menggunakan stadiometer/pengukur tinggi badan</li>
              <li>Jenis Kelamin: Penting untuk perbandingan standar WHO</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Kalkulasi BMI:</p>
            <p className="text-muted-foreground">BMI = Berat Badan (kg) / (Tinggi Badan (m))²</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-1">Kategori Stunting:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Sangat Pendek: Tinggi &lt; 85% standar untuk usia</li>
              <li>Pendek: Tinggi 85-89% dari standar</li>
              <li>Normal: Tinggi 90-110% dari standar</li>
              <li>Tinggi: Tinggi &gt; 110% dari standar</li>
            </ul>
          </div>

          <div className="p-3 rounded bg-white border border-blue-100 mt-3">
            <p className="text-xs text-muted-foreground italic">
              💡 Catatan: Data ini untuk screening awal. Konsultasikan dengan tenaga kesehatan profesional (dokter/bidan) untuk diagnosis final dan penanganan lebih lanjut.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
<div className="flex flex-col md:flex-row gap-3 justify-center pt-4 animate-in-up">
  <Button 
    onClick={onReset} 
    size="lg" 
    variant="outline" 
    className="cursor-pointer py-8 bg-linear-to-r from-teal-400 to-indigo-600 text-white border-none
               transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg"
  >
    ← Periksa Anak Lain
  </Button>
  
  <Button
    onClick={handleExportPDF}
    size="lg"
    variant="default"
    disabled={isExporting}
    className="gap-4 py-8 cursor-pointer bg-linear-to-r from-teal-400 to-indigo-600 text-white
               transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg disabled:opacity-70 disabled:scale-100"
  >
    {isExporting ? (
      <>
        <span className="animate-spin">⏳</span>
        Mengunduh...
      </>
    ) : (
      <>
        📥 Unduh Hasil (PDF)
      </>
    )}
  </Button>
</div>
    </div>
  );
}
