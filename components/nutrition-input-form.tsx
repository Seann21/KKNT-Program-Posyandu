'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ChildData } from '@/lib/calculator';

interface NutritionInputFormProps {
  onSubmit: (data: ChildData) => void;
  isLoading?: boolean;
}

export function NutritionInputForm({ onSubmit, isLoading = false }: NutritionInputFormProps) {
  const [formData, setFormData] = useState<ChildData>({
    age: 24,
    weight: 12,
    height: 85,
    gender: 'male',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'gender') {
      setFormData((prev) => ({
        ...prev,
        [name]: value as 'male' | 'female',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: parseFloat(value) || 0,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.age < 0 || formData.age > 120) {
      alert('Usia harus antara 0-120 bulan');
      return;
    }
    if (formData.weight <= 0 || formData.weight > 100) {
      alert('Berat badan harus antara 0.1-100 kg');
      return;
    }
    if (formData.height <= 0 || formData.height > 200) {
      alert('Tinggi badan harus antara 0.1-200 cm');
      return;
    }

    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-in-scale">
      <CardHeader className="px-4 sm:px-6 pt-6  ">
        <CardTitle className="text-xl sm:text-2xl animate-stagger-1 text-white">Masukkan Data Anak</CardTitle>
        <CardDescription className="text-sm sm:text-base animate-stagger-2 text-white">Pastikan data akurat untuk hasil yang lebih baik</CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-6 ">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Jenis Kelamin */}
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-base font-semibold text-white">
              Jenis Kelamin
            </Label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition "
            >
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>

          {/* Usia */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-base font-semibold text-white">
              Usia (Bulan)
            </Label>
            <Input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
              max="120"
              step="1"
              placeholder="Contoh: 24"
              className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-sm text-muted-foreground ">Masukkan usia dalam bulan (0-120)</p>
          </div>

          {/* Berat Badan */}
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-base font-semibold text-white">
              Berat Badan (kg)
            </Label>
            <Input
              id="weight"
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="0.1"
              max="100"
              step="0.1"
              placeholder="Contoh: 12"
              className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-sm text-muted-foreground">Masukkan berat dalam kilogram</p>
          </div>

          {/* Tinggi Badan */}
          <div className="space-y-2">
            <Label htmlFor="height" className="text-base font-semibold text-white">
              Tinggi Badan (cm)
            </Label>
            <Input
              id="height"
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              min="0.1"
              max="200"
              step="0.1"
              placeholder="Contoh: 85"
              className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-sm text-muted-foreground">Masukkan tinggi dalam sentimeter</p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
  <Button
    type="submit"
    size="lg"
    className="w-40 text-white bg-linear-to-r from-teal-400 to-indigo-600 cursor-pointer transition-all hover:scale-105 active:scale-95 animate-stagger-5"
    disabled={isLoading}
  >
    {isLoading ? (
      <>
        <span className="animate-spin">⏳</span>
        Memproses...
      </>
    ) : (
      <>🚀 Cek Status Gizi</>
    )}
  </Button>
</div>
        </form>
      </CardContent>
    </Card>
  );
}
