import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed'
});

// Navigation API'lerini dışa aktarın
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing); 