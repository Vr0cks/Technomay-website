import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';
import { FaUsers, FaHistory, FaAward } from 'react-icons/fa';

export default function AboutPage() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <PageHeader 
        title={t('AboutPage.title')} 
        description={t('AboutPage.description')} 
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('AboutPage.missionVision')}</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
          {t('AboutPage.missionVisionDesc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('AboutPage.vision')}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t('AboutPage.visionDesc')}</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('AboutPage.mission')}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t('AboutPage.missionDesc')}</p>
            </div>
        </div>
      </section>
    </main>
  );
}