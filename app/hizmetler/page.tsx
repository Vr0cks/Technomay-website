import PageHeader from '@/components/PageHeader';
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaBrain, FaRobot } from 'react-icons/fa';

export default function HizmetlerPage() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web ve Yazılım Geliştirme",
      desc: "İşletmenizin ihtiyaçlarına özel, yüksek performanslı ve ölçeklenebilir web uygulamaları geliştiriyoruz. Next.js, React ve Node.js teknolojileriyle modern çözümler sunuyoruz."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobil Uygulama",
      desc: "iOS ve Android platformlarında çalışan, kullanıcı deneyimi (UX) odaklı native ve cross-platform mobil uygulamalar tasarlıyoruz."
    },
    {
      icon: <FaCloud />,
      title: "Bulut Çözümleri",
      desc: "AWS, Azure ve Google Cloud altyapıları üzerinde sistemlerinizi modernize ediyor, sunucu maliyetlerinizi optimize ediyoruz."
    },
    {
      icon: <FaBrain />,
      title: "Yapay Zeka & ML",
      desc: "Verilerinizi anlamlandıran, iş süreçlerinizi otomatize eden makine öğrenmesi ve yapay zeka modelleri eğitiyoruz."
    },
    {
      icon: <FaShieldAlt />,
      title: "Siber Güvenlik",
      desc: "Dijital varlıklarınızı tehditlere karşı korumak için sızma testleri ve güvenlik denetimleri gerçekleştiriyoruz."
    },
    {
      icon: <FaRobot />,
      title: "IoT Sistemleri",
      desc: "Nesnelerin interneti teknolojisiyle cihazlarınızı birbirine bağlıyor, akıllı üretim ve takip sistemleri kuruyoruz."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <PageHeader 
        title="Hizmetlerimiz" 
        description="Teknolojik dönüşümünüzde size rehberlik ediyor, uçtan uca dijital çözümler üretiyoruz." 
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}