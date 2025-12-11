import PageHeader from '@/components/PageHeader';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';

export default function KariyerPage() {
  const positions = [
    { title: "Senior Frontend Developer", type: "Tam Zamanlı", location: "Ankara / Hibrit" },
    { title: "Backend Developer (Node.js)", type: "Tam Zamanlı", location: "Uzaktan" },
    { title: "UI/UX Tasarımcı", type: "Yarı Zamanlı", location: "Ankara" },
    { title: "Yapay Zeka Mühendisi", type: "Tam Zamanlı", location: "Ankara / Ofis" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <PageHeader 
        title="Kariyer" 
        description="Geleceği şekillendiren ekibimizin bir parçası olmak ister misiniz? Yeteneklerinize değer veriyoruz." 
      />

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4">Açık Pozisyonlar</h2>
        
        <div className="space-y-4">
          {positions.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500/40 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{job.type} • {job.location}</p>
                </div>
              </div>
              
              <button className="px-6 py-2 rounded-full border border-slate-400 dark:border-slate-600 text-slate-900 dark:text-white text-sm hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                Başvur <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Aradığın pozisyonu bulamadın mı?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Genel başvurularınız için CV'nizi bize her zaman gönderebilirsiniz.</p>
          <a href="mailto:hr@technomay.com" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-semibold rounded-full transition-colors">
            CV Gönder
          </a>
        </div>
      </section>
    </main>
  );
}