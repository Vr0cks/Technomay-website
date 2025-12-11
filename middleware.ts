import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

export default createMiddleware(routing);

export const config = {
  // Sadece api, _next ve statik dosyaları atla
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};