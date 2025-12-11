import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaBrain, FaRobot } from 'react-icons/fa';

export default function HizmetlerPage() {
  const t = useTranslations();
  
  const servicesIcons = [<FaCode />, <FaMobileAlt />, <FaCloud />, <FaBrain />, <FaShieldAlt />, <FaRobot />];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <PageHeader 
        title={t('ServicesPage.title')} 
        description={t('ServicesPage.description')} 
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesIcons.map((icon, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t(`ServicesPage.services.${index}.title`)}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t(`ServicesPage.services.${index}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}