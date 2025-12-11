'use client';
import PageHeader from '@/components/PageHeader';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function IletisimPage() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader 
        title="İletişim" 
        description="Projeleriniz için bir kahve içmeye bekleriz. Bize her zaman ulaşabilirsiniz." 
      />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sol Taraf - Bilgiler */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Bize Ulaşın</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                Sorularınız, proje önerileriniz veya tanışmak için aşağıdaki iletişim kanallarını kullanabilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">Ofis Adresi</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Türk Hava Kurumu Üniversitesi Teknopark<br/>Etimesgut, Ankara</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">E-Posta</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">info@technomay.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium">Telefon</h4>
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
                  <label className="text-sm font-medium text-slate-300">Adınız</label>
                  <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ahmet Yılmaz" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Konu</label>
                  <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Proje Teklifi" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">E-Posta</label>
                <input type="email" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="ahmet@ornek.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Mesajınız</label>
                <textarea rows={4} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Size nasıl yardımcı olabiliriz?" />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}