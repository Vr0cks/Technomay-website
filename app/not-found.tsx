import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden">
      
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-slate-900 leading-none select-none">
          404
        </h1>
        
        <div className="bg-blue-600/10 border border-blue-600/30 rounded-2xl p-8 backdrop-blur-sm -mt-10 mx-auto max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bağlantı Koptu!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Aradığınız sayfa uzay boşluğunda kaybolmuş gibi görünüyor. Koordinatları kontrol edip tekrar deneyin.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <FaHome /> Ana Üsse Dön
          </Link>
        </div>
      </div>
    </div>
  );
}