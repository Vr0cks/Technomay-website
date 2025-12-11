import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Desteklenen diller
  locales: ['tr', 'en', 'de', 'ar'],
  
  // Varsayılan dil
  defaultLocale: 'tr'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);