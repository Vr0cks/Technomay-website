'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslations } from 'next-intl'; // 👈 Import eklendi

export default function About() {
  const t = useTranslations('About'); // 👈 JSON'daki 'About' kısmını çağırıyoruz

  // Listeyi artık çeviriden çekiyoruz
  const checkList = [
    t('list_1'),
    t('list_2'),
    t('list_3'),
    t('list_4'),
    t('list_5'),
    t('list_6')
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Taraf */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-600 dark:text-blue-500 font-medium tracking-wide uppercase mb-3">
              {t('badge')}
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('title_part1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
                {t('title_part2')}
              </span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              {t('description')}
            </p>

            {/* Tik Listesi */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {checkList.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Vizyon & Misyon Kartları */}
            <div className="grid gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('vision_title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t('vision_desc')}
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('mission_title')}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t('mission_desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf - Görsel Alanı */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-100 to-slate-100 dark:from-blue-500/20 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold text-slate-300 dark:text-white/10 select-none transition-colors">TM</span>
                </div>
              </div>
            </div>
            
            {/* Alt Bilgi */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-200 dark:from-slate-950 to-transparent">
              <p className="text-slate-900 dark:text-white font-semibold">{t('image_badge_title')}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{t('image_badge_loc')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}