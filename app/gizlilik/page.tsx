import PageHeader from '../../components/PageHeader';

export default function GizlilikPage() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader title="Gizlilik Politikası" description="Veri güvenliğiniz ve gizliliğiniz bizim için önemlidir." />
      <article className="py-20 px-6 max-w-4xl mx-auto prose prose-invert prose-lg">
        <p className="text-slate-600 dark:text-slate-400">
          Technomay, kullanıcılarının gizliliğini korumayı taahhüt eder. Bu politika, sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını açıklar.
        </p>
        <h3 className="text-slate-900 dark:text-white mt-8 mb-4 font-bold text-xl">Çerezler (Cookies)</h3>
        <p className="text-slate-600 dark:text-slate-400">Deneyiminizi geliştirmek amacıyla sitemizde çerezler kullanılmaktadır.</p>
      </article>
    </main>
  );
}