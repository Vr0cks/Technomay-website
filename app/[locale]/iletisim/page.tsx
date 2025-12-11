'use client';
import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function IletisimPage() {
  const t = useTranslations();
  
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader 
        title={t('ContactPage.title')} 
        description={t('ContactPage.description')} 
      />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sol Taraf - Bilgiler */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('ContactPage.getInTouch')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                {t('ContactPage.description2')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">{t('ContactPage.address')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Türk Hava Kurumu Üniversitesi Teknopark<br/>Etimesgut, Ankara</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">{t('ContactPage.email')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">info@technomay.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">{t('ContactPage.phone')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">+90 312 123 45 67</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Form */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t('ContactPage.name')}</label>
                  <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('ContactPage.namePlaceholder')} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{t('ContactPage.subject')}</label>
                  <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('ContactPage.subjectPlaceholder')} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t('ContactPage.email')}</label>
                <input type="email" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('ContactPage.emailPlaceholder')} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">{t('ContactPage.message')}</label>
                <textarea rows={4} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('ContactPage.messagePlaceholder')} />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                {t('ContactPage.send')}
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}