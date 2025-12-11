'use client';
import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';

export default function KariyerPage() {
  const t = useTranslations();

  const positions = [
    { titleKey: "Senior Frontend Developer", typeKey: "Tam Zamanlı", locationKey: "Ankara / Hibrit" },
    { titleKey: "Backend Developer (Node.js)", typeKey: "Tam Zamanlı", locationKey: "Uzaktan" },
    { titleKey: "UI/UX Tasarımcı", typeKey: "Yarı Zamanlı", locationKey: "Ankara" },
    { titleKey: "Yapay Zeka Mühendisi", typeKey: "Tam Zamanlı", locationKey: "Ankara / Ofis" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <PageHeader 
        title={t('CareerPage.title')} 
        description={t('CareerPage.description')} 
      />

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4">{t('CareerPage.openPositions')}</h2>
        
        <div className="space-y-4">
          {positions.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500/40 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.titleKey}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{job.typeKey} • {job.locationKey}</p>
                </div>
              </div>
              
              <button className="px-6 py-2 rounded-full border border-slate-400 dark:border-slate-600 text-slate-900 dark:text-white text-sm hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                {t('CareerPage.apply')} <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('CareerPage.notFound')}</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{t('CareerPage.notFoundDesc')}</p>
          <a href="mailto:hr@technomay.com" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-colors">
            {t('CareerPage.sendCV')}
          </a>
        </div>
      </section>
    </main>
  );
}