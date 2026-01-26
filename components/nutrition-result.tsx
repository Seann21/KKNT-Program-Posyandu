'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { NutritionResult as NutritionResultType, StuntingResult } from '@/lib/calculator';

interface NutritionResultProps {
  nutritionResult: NutritionResultType;
  stuntingResult: StuntingResult;
  onReset: () => void;
}

function getStatusColor(color: string): string {
  switch (color) {
    case 'danger':
      return 'bg-red-50 border-red-200';
    case 'warning':
      return 'bg-yellow-50 border-yellow-200';
    case 'success':
      return 'bg-green-50 border-green-200';
    case 'info':
      return 'bg-blue-50 border-blue-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
}

function getStatusBadgeColor(color: string): string {
  switch (color) {
    case 'danger':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'success':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'info':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
}

export function NutritionResult({ nutritionResult, stuntingResult, onReset }: NutritionResultProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Nutrition Status */}
      <Card className={`border-2 shadow-lg ${getStatusColor(nutritionResult.color)}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <span className="text-4xl">{nutritionResult.emoji}</span>
            <span>Status Gizi</span>
          </CardTitle>
          <CardDescription className="text-base">{nutritionResult.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Status Badge */}
          <div className="flex gap-2">
            <span
              className={`px-4 py-2 rounded-full font-semibold border-2 text-lg ${getStatusBadgeColor(nutritionResult.color)}`}
            >
              {nutritionResult.status}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-primary/10">
              <p className="text-muted-foreground text-sm font-medium">BMI (Body Mass Index)</p>
              <p className="text-3xl font-bold text-primary">{nutritionResult.bmi}</p>
              <p className="text-xs text-muted-foreground mt-1">Indeks Massa Tubuh</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-primary/10">
              <p className="text-muted-foreground text-sm font-medium">Kategori Status</p>
              <p className="text-2xl font-bold text-primary capitalize">{nutritionResult.statusCode.replace('-', ' ')}</p>
              <p className="text-xs text-muted-foreground mt-1">Klasifikasi kesehatan</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stunting Status */}
      <Card className={`border-2 shadow-lg ${getStatusColor(stuntingResult.color)}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <span className="text-4xl">{stuntingResult.emoji}</span>
            <span>Status Pertumbuhan Tinggi (Stunting)</span>
          </CardTitle>
          <CardDescription className="text-base">{stuntingResult.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Status Badge */}
          <div className="flex gap-2">
            <span
              className={`px-4 py-2 rounded-full font-semibold border-2 text-lg ${getStatusBadgeColor(stuntingResult.color)}`}
            >
              {stuntingResult.status}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-primary/10">
              <p className="text-muted-foreground text-sm font-medium">Persentil Tinggi</p>
              <p className="text-3xl font-bold text-primary">{stuntingResult.heightPercentile}%</p>
              <p className="text-xs text-muted-foreground mt-1">Dibanding usia yang sama</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-primary/10">
              <p className="text-muted-foreground text-sm font-medium">Kategori Status</p>
              <p className="text-2xl font-bold text-primary capitalize">{stuntingResult.statusCode.replace('-', ' ')}</p>
              <p className="text-xs text-muted-foreground mt-1">Klasifikasi pertumbuhan</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex gap-2">
        <Button
          onClick={onReset}
          className="flex-1 bg-linear-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg py-6 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Periksa Anak Lain
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 text-sm text-amber-900">
        <p className="font-semibold mb-2">Disclaimer:</p>
        <p>
          Aplikasi ini hanya untuk screening awal. Hasil tidak menggantikan pemeriksaan profesional. Untuk diagnosis lengkap,
          silakan konsultasi dengan dokter atau ahli gizi terkemuka.
        </p>
      </div>
    </div>
  );
}
