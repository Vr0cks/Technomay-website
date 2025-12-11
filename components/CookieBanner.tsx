'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite, FaTimes } from 'react-icons/fa';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Daha önce kabul etmemişse göster
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000); // 1 saniye sonra gelsin
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[60] bg-slate-900/95 backdrop-blur-md border border-blue-500/30 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
              <FaCookieBite text-xl />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-1">Çerez Tercihleri</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Kabul Et
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors"
                >
                  Reddet
                </button>
              </div>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-slate-500 hover:text-slate-900 dark:text-white">
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}