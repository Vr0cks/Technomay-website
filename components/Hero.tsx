'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl'; // Import et
import { Link } from '@/navigation'; // Import et

export default function Hero() {
  const t = useTranslations('Hero'); // JSON'daki "Hero" kısmını oku

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Dekoratif animasyonlu blob arka plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left blob */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
        
        {/* Bottom-right blob */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />

        {/* Center-right blob */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-5"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            {t('badge')} {/* Geleceği Kodluyoruz */}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            {t('title1')} <br /> {/* Hayallerinizi */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              {t('title2')} {/* Gerçeğe Dönüştürün */}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('desc')} {/* Açıklama yazısı */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/iletisim"
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            {t('btn_primary')} {/* Projeye Başla */}
          </Link>
          <Link 
            href="/hakkimizda"
            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105"
          >
            {t('btn_secondary')} {/* Bizi Tanıyın */}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}