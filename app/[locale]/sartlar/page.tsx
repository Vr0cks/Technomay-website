import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';

export default function SartlarPage() {
  const t = useTranslations();
  
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader 
        title={t('LegalPages.terms.title')} 
        description={t('LegalPages.terms.description')} 
      />
      <article className="py-20 px-6 max-w-4xl mx-auto">
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          {t('LegalPages.terms.content')}
        </p>
        <h3 className="text-slate-900 dark:text-white mt-8 mb-4 font-bold text-xl">{t('LegalPages.terms.copyright')}</h3>
        <p className="text-slate-600 dark:text-slate-400">{t('LegalPages.terms.copyrightDesc')}</p>
      </article>
    </main>
  );
}