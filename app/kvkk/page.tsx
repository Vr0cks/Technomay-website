import PageHeader from '@/components/PageHeader';

export default function KVKKPage() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader title="KVKK Aydınlatma Metni" description="Kişisel verilerinizin korunması önceliğimizdir." />
      <article className="py-20 px-6 max-w-4xl mx-auto prose prose-invert prose-lg">
        {/* Örnek Metin */}
        <p className="text-slate-600 dark:text-slate-400">
          Technomay olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında işlemekteyiz.
        </p>
        <h3 className="text-slate-900 dark:text-white mt-8 mb-4 font-bold text-xl">1. Veri Sorumlusu</h3>
        <p className="text-slate-600 dark:text-slate-400">Şirketimiz, kişisel verilerinizi hukuka ve dürüstlük kurallarına uygun olarak işlemektedir.</p>
        <h3 className="text-slate-900 dark:text-white mt-8 mb-4 font-bold text-xl">2. Kişisel Verilerin İşlenme Amacı</h3>
        <p className="text-slate-600 dark:text-slate-400">Hizmetlerimizin sunulması, yasal yükümlülüklerin yerine getirilmesi ve müşteri memnuniyetinin artırılması amacıyla verileriniz işlenmektedir.</p>
        {/* Buraya gerçek KVKK metni yapıştırılır */}
      </article>
    </main>
  );
}