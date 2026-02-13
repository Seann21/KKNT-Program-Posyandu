import Image from 'next/image';

export function LogoSection() {
  return (
    <div className="w-full border-primary/10">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6 py-3 sm:py-4">
          {/* Left: Logos Group */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Logo KKN */}
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative cursor-pointer">
              <Image
                src="/logokkn.png"
                alt="Logo KKN Kelompok 2"
                fill
                className="object-contain" // Ganti object-fill ke contain agar tidak gepeng
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-primary/20" />

            {/* Logo Kampus */}
            <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 relative">
              <Image
                src="/unp.png"
                alt="Logo Kampus"
                fill
                className="object-contain rounded cursor-pointer"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-primary/20" />

            {/* Logo e-gizi */}
          <div className="shrink-0 w-16 h-16 sm:w-12 sm:h-12 relative">
         <Image
          src="/e-gizi.png"
          alt="Logo e-gizi"
          fill
          priority
         className="object-contain" />
            </div>
          </div>

          {/* Right: Title */}
          <div className="flex-1 text-right text-slate-700">
            <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-white to-teal-800 bg-clip-text text-transparent">
              E-Gizi
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-500 italic">Monitoring Gizi & Stunting</p>
          </div>
        </div>
      </div>
    </div>
  );
}