'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { NutritionResult } from '@/lib/calculator';

interface FoodRecommendationsProps {
  nutritionResult: NutritionResult;
}

export function FoodRecommendations({ nutritionResult }: FoodRecommendationsProps) {
  const getRecommendationColor = (status: string): string => {
    switch (status) {
      case 'Gizi Buruk':
        return 'bg-red-50 border-red-200';
      case 'Gizi Kurang':
        return 'bg-yellow-50 border-yellow-200';
      case 'Gizi Baik':
        return 'bg-green-50 border-green-200';
      case 'Gizi Lebih':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (status: string): string => {
    switch (status) {
      case 'Gizi Buruk':
        return 'text-red-600';
      case 'Gizi Kurang':
        return 'text-yellow-600';
      case 'Gizi Baik':
        return 'text-green-600';
      case 'Gizi Lebih':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className={`border-2 shadow-lg ${getRecommendationColor(nutritionResult.status)}`}>
      <CardHeader>
        <CardTitle className="text-xl">Rekomendasi Makanan untuk {nutritionResult.status}</CardTitle>
        <CardDescription>Panduan asupan nutrisi yang disarankan untuk anak Anda</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {nutritionResult.recommendations.map((recommendation, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className={`mt-1 text-2xl shrink-0 ${getIconColor(nutritionResult.status)}`}>
                🥗
              </div>
              <p className="text-sm md:text-base font-medium text-foreground pt-1">{recommendation}</p>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-6 p-4 bg-white rounded-lg border-2 border-primary/10">
          <p className="font-semibold text-primary mb-3">Tips Pemberian Makan:</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Berikan makanan bertahap sesuai dengan usia dan kemampuan mengunyah anak</li>
            <li>• Variasikan jenis makanan agar anak tidak bosan</li>
            <li>• Selalu perhatikan kebersihan makanan dan lingkungan makan</li>
            <li>• Beri kesempatan anak untuk mencoba berbagai rasa dan tekstur</li>
            <li>• Hindari makanan yang sulit dicerna atau berbahaya</li>
            <li>• Pantau reaksi alergi setelah pemberian makanan baru</li>
          </ul>
        </div>

        {/* Consultation */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
          <p className="text-sm font-semibold text-blue-900 mb-2">Perlu Konsultasi?</p>
          <p className="text-sm text-blue-800">
            Jika Anda memiliki pertanyaan tentang gizi anak, silakan kunjungi posyandu terdekat atau konsultasi dengan ahli gizi profesional.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
