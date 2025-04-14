import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocale'i bekleyin
  let locale = await requestLocale;
  
  // Gelen locale'in geçerli olduğundan emin olun
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale, // locale'i döndürün
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Istanbul'
  };
}); 