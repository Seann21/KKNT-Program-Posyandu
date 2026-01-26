export function Header() {
  return (
    <header className="space-y-3 text-center mb-10 md:mb-12 px-2 animate-in-up">
      <div className="inline-block mb-3 md:mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
        <p className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">Program KKN Kelompok 25</p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
        Kalkulator Gizi &amp; <span className="font-bold">Stunting Checker</span>
      </h1>
      <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-md">
        Aplikasi monitoring kesehatan dan pertumbuhan anak melalui analisis gizi dan stunting secara real-time
      </p>
    </header>
  );
}
