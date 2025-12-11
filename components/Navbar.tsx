'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaCode, FaGlobe, FaSun, FaMoon } from 'react-icons/fa'; 
import { motion, AnimatePresence } from 'framer-motion';

// YENİ IMPORTLAR BURADA:
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation'; 

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  // Çeviri Kancaları
  const t = useTranslations('Navbar'); // JSON dosyasındaki "Navbar" başlığını okur
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Dil Değiştirme Fonksiyonu
  const changeLanguage = (lang: string) => {
    setIsLangOpen(false);
    // Mevcut sayfada kalarak dili değiştir (URL'yi günceller)
    router.replace(pathname, { locale: lang });
  };

  const navItems = [
    { name: t('home'), href: '/' },      // <-- Artık t('home') diyoruz
    { name: t('about'), href: '/hakkimizda' },
    { name: t('contact'), href: '/iletisim' },
  ];

  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-blue-50 dark:bg-blue-600/10 rounded-lg border border-blue-100 dark:border-blue-600/20 group-hover:border-blue-500 transition-colors">
             <FaCode className="text-2xl text-blue-600 dark:text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">Technomay</span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase mt-1">
              {t('slogan')} {/* <-- Slogan çeviriden gelecek */}
            </span>
          </div>
        </Link>

        {/* Linkler */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors relative group"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sağ Taraf */}
        <div className="flex items-center gap-4">
          
          {/* Dil Seçici */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <FaGlobe />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden py-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tema Butonu */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              {theme === 'dark' ? <FaMoon /> : <FaSun className="text-orange-500" />}
            </button>
          )}

          <Link 
            href="/iletisim"
            className="hidden md:block px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/25"
          >
            {t('offer')} {/* <-- Teklif Al butonu */}
          </Link>
        </div>
      </div>
    </nav>
  );
}