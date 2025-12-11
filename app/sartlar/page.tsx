import PageHeader from '@/components/PageHeader';
export default function SartlarPage() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <PageHeader title="Kullanım Şartları" description="Sitemizi kullanmadan önce lütfen okuyunuz." />
      <article className="py-20 px-6 max-w-4xl mx-auto prose prose-invert prose-lg">
        <p className="text-slate-600 dark:text-slate-400">
          Bu web sitesini ziyaret ederek, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Technomay, bu şartları dilediği zaman değiştirme hakkını saklı tutar.
        </p>
        <h3 className="text-slate-900 dark:text-white mt-8 mb-4 font-bold text-xl">Telif Hakları</h3>
        <p className="text-slate-600 dark:text-slate-400">Sitede yer alan tüm içerik, görsel ve tasarımlar Technomay'e aittir. İzinsiz kullanılamaz.</p>
      </article>
    </main>
  );
}