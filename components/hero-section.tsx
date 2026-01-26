import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-4 animate-in-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-stagger-1">
              SiMungil
            </h1>
            <p className="text-lg text-white drop-shadow-md animate-stagger-2">
              <span className="font-semibold">Sistem Informasi Monitoring Gizi Ideal</span> untuk kesehatan anak Indonesia
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <div className="flex gap-3 animate-stagger-3 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
              <div className="shrink-0 text-2xl">✓</div>
              <div>
                <p className="font-semibold text-white">Cek Status Gizi</p>
                <p className="text-sm text-white/80">Pantau perkembangan gizi anak dengan akurat</p>
              </div>
            </div>

            <div className="flex gap-3 animate-stagger-4 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
              <div className="shrink-0 text-2xl">📈</div>
              <div>
                <p className="font-semibold text-white">Deteksi Stunting</p>
                <p className="text-sm text-white/80">Identifikasi dini masalah pertumbuhan tinggi</p>
              </div>
            </div>

            <div className="flex gap-3 animate-stagger-5 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm">
              <div className="shrink-0 text-2xl">🥗</div>
              <div>
                <p className="font-semibold text-white">Rekomendasi Nutrisi</p>
                <p className="text-sm text-white/80">Dapatkan saran makanan sehat untuk anak</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end animate-in-right">
          <div className="relative w-full max-w-sm h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20">
            <Image
              src="/herooo.png"
              alt="Ibu menggendong bayi sehat - SiMungil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className=" p-8 rounded-2xl text-white shadow-lg text-center animate-stagger-1 hover:shadow-lg transition-shadow cursor-pointer">
          <p className="text-3xl mb-2">👨‍👩‍👧‍👦</p>
          <p className="font-semibold">Untuk Keluarga</p>
          <p className="text-sm text-muted-foreground mt-2">Pantau kesehatan anak dari rumah</p>
        </div>
    
        <div className=" p-8 rounded-2xl text-white shadow-md text-center animate-stagger-2 hover:shadow-lg transition-shadow cursor-pointer">
          <p className="text-3xl mb-2">🏥</p>
          <p className="font-semibold">Untuk Posyandu</p>
          <p className="text-sm text-muted-foreground mt-2">Alat bantu screening di posyandu</p>
        </div>

        <div className=" p-8 rounded-2xl text-white shadow-md text-center animate-stagger-3 hover:shadow-lg transition-shadow cursor-pointer">
          <p className="text-3xl mb-2">📊</p>
          <p className="font-semibold">Gratis & Mudah</p>
          <p className="text-sm text-muted-foreground mt-2">Aplikasi web yang mudah diakses</p>
        </div>
      </div>
    </div>
  );
}
