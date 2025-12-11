'use client';
import { useTranslations } from 'next-intl';

export default function Partners() {
  const t = useTranslations('Partners');
  
  const partners = [
    "Savunma Sanayi", "Teknokent", "TUBİTAK", "KOSGEB", 
    "THK Üniversitesi", "ASELSAN", "HAVELSAN", "ROKETSAN"
  ];

  const seamlessPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    // ZEMİN: Açıkta BEYAZ, Koyuda LACİVERT
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.2em]">
          {t('title')}
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {seamlessPartners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center mx-12 min-w-[200px]">
              {/* YAZI RENGİ: Açıkta KOYU GRİ (Slate-600), Koyuda AÇIK GRİ (Slate-400) */}
              <span className="text-2xl font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-default whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        {/* YANLARDAKİ FADE EFEKTİ (ÖNEMLİ): Arka plan neyse o renge erimeli */}
        {/* Sol taraf */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 transition-colors duration-300" />
        {/* Sağ taraf */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 transition-colors duration-300" />
      </div>
    </section>
  );
}