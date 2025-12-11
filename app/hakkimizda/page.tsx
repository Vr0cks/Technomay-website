import PageHeader from '@/components/PageHeader';
import { FaUsers, FaHistory, FaAward } from 'react-icons/fa';

export default function AboutPage() {
  return (
    // Önceki: <main className="bg-slate-950 min-h-screen">
    // Yeni: Dinamik
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* PageHeader bileşeni de dinamik olmalı */}
      <PageHeader 
        title="Hakkımızda" 
        description="Teknolojinin geleceğine yön veriyoruz." 
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* İçerik Yazılarını da dinamik yapalım */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Misyon & Vizyon</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
          Technomay olarak, inovasyon ve mükemmeliyetçiliği temel alarak sürdürülebilir dijital çözümler üretiyoruz. Müşteri odaklı yaklaşımla, her projede en yüksek kaliteyi hedefliyoruz.
        </p>

        {/* Kartları da dinamik yapalım */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kart 1: Beyaz/Koyu arkaplan, Dinamik yazı renkleri */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Vizyon</h3>
                <p className="text-slate-600 dark:text-slate-400">Küresel çapta teknolojiyi şekillendiren, güvenilir bir AR-GE partneri olmak.</p>
            </div>
            {/* ... diğer kartlar ... */}
        </div>
      </section>
    </main>
  );
}