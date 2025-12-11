'use client'; // Client component olmak zorunda çünkü useTranslations kullanacağız
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation'; // 👈 Bizim navigation dosyasından import
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaCode } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer'); // 👈 JSON Bağlantısı
  const currentYear = new Date().getFullYear();

  // Linkleri çeviriden çekiyoruz
  const navLinks = [
    { title: t('link_home'), href: "/" },
    { title: t('link_about'), href: "/hakkimizda" },
    { title: t('link_services'), href: "/hizmetler" },
    { title: t('link_career'), href: "/kariyer" },
    { title: t('link_contact'), href: "/iletisim" },
  ];

  const legalLinks = [
    { title: t('link_kvkk'), href: "/kvkk" },
    { title: t('link_terms'), href: "/sartlar" },
    { title: t('link_privacy'), href: "/gizlilik" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Sütun 1 */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white mb-4">
              <FaCode className="text-blue-600 dark:text-blue-500" />
              Technomay
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 max-w-sm">
              {t('summary')}
            </p>
            
            <div className="space-y-3 text-sm">
              <p className="flex items-center text-slate-600 dark:text-slate-400">
                <FaMapMarkerAlt className="mr-3 text-blue-600 dark:text-blue-500 flex-shrink-0" /> 
                {t('address_title')}
              </p>
              <p className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                <FaEnvelope className="mr-3 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                <a href="mailto:info@technomay.com">info@technomay.com</a>
              </p>
              <p className="flex items-center text-slate-600 dark:text-slate-400">
                <FaPhone className="mr-3 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                +90 312 XXX XX XX
              </p>
            </div>
          </div>

          {/* Sütun 2 */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">{t('col_corporate')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3 */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">{t('col_legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 4 */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">{t('col_follow')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-xl"><FaLinkedin /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xl"><FaTwitter /></a>
              <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xl"><FaFacebook /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-center">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Technomay. {t('rights')} | {t('coded_by')}{" "}
            <a 
              href="https://yigit-canli.vercel.app/en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-500 font-bold hover:underline"
            >
              vr0cks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}