import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Bu adımda geçerli locale'i alıyoruz
  let locale = await requestLocale;
 
  // Desteklenen diller listesi
  const locales = ['tr', 'en', 'de', 'ar'];

  // Eğer gelen dil bizde yoksa varsayılan olarak 'tr' yap
  if (!locale || !locales.includes(locale as any)) {
    locale = 'tr';
  }
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});