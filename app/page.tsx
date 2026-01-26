'use client';

import { useState } from 'react';
import { LogoSection } from '@/components/logo-section';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { NutritionInputForm } from '@/components/nutrition-input-form';
import { NutritionAnalysisDetailed } from '@/components/nutrition-analysis-detailed';
import { FoodRecommendations } from '@/components/food-recommendations';
import { NutritionGuide } from '@/components/nutrition-guide';
import { calculateNutritionStatus, calculateStuntingStatus } from '@/lib/calculator';
import type { ChildData, NutritionResult as NutritionResultType, StuntingResult } from '@/lib/calculator';

type ViewState = 'home' | 'form' | 'result' | 'guide';

export default function Home() {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [childData, setChildData] = useState<ChildData | null>(null);
  const [results, setResults] = useState<{ nutrition: NutritionResultType; stunting: StuntingResult } | null>(null);

  const handleFormSubmit = (data: ChildData) => {
    const nutritionResult = calculateNutritionStatus(data);
    const stuntingResult = calculateStuntingStatus(data);

    setChildData(data);
    setResults({
      nutrition: nutritionResult,
      stunting: stuntingResult,
    });

    setViewState('result');
  };

  const handleReset = () => {
    setViewState('home');
    setResults(null);
  };

  return (
    <main className="min-h-screen">
      <LogoSection />

      <div className="py-6 md:py-12 px-3 sm:px-4">
        <div className="container mx-auto">
          <Header />

          {/* Content */}
          <div className="space-y-10 md:space-y-12">
            {viewState === 'home' && (
              <>
                <HeroSection />

                {/* CTA Section */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center pt-6 md:pt-8 px-4 sm:px-0">
                  <button
                    onClick={() => setViewState('form')}
                    className="w-full sm:w-auto bg-white text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Mulai Cek Status Gizi
                  </button>
                  <button
                    onClick={() => setViewState('guide')}
                    className="w-full sm:w-auto bg-white text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Lihat Panduan Lengkap
                  </button>
                </div>
              </>
            )}

            {viewState === 'form' && (
              <NutritionInputForm onSubmit={handleFormSubmit} />
            )}

            {viewState === 'guide' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Panduan Lengkap Gizi & Stunting</h2>
                  <button
                    onClick={() => setViewState('home')}
                    className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                  >
                    ← Kembali
                  </button>
                </div>
                <NutritionGuide />
              </div>
            )}

            {viewState === 'result' && results && childData && (
              <>
                <NutritionAnalysisDetailed
                  nutritionResult={results.nutrition}
                  stuntingResult={results.stunting}
                  childData={childData}
                  onReset={handleReset}
                />
                <FoodRecommendations nutritionResult={results.nutrition} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 text-white ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Tentang SiMungil</h3>
              <p className="text-md text-muted-foreground">
                Aplikasi web untuk monitoring kesehatan dan gizi anak di Indonesia sebagai bagian dari program KKN.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Fitur</h3>
              <ul className="space-y-2 text-md text-muted-foreground">
                <li>Kalkulator Status Gizi</li>
                <li>Deteksi Stunting</li>
                <li>Rekomendasi Nutrisi</li>
                <li>Panduan Makan Sehat</li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Informasi</h3>
              <p className="text-md text-muted-foreground mb-2">
                <strong className='font-semibold text-red-800'>Disclaimer:</strong> Aplikasi ini untuk screening awal saja dan bukan pengganti konsultasi profesional.
              </p>
              <p className="text-md text-muted-foreground">
                Konsultasikan dengan dokter atau ahli gizi untuk diagnosa lengkap.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-5 pb-4 text-center text-sm text-muted-foreground">
            <p>© 2026 SiMungil - Sistem Informasi Monitoring Gizi Anak. All rights reserved.</p>
            <p className="mt-2">Program Kuliah Kerja Nyata (KKN) Kelompok 25 </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
