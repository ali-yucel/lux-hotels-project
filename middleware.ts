import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'tr',
  localePrefix: 'always',
});

// Matcher ayarları
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};