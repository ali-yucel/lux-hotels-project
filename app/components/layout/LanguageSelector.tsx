'use client';

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/routing";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange('tr')}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          locale === 'tr'
            ? 'bg-blue-600 text-white'
            : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500 cursor-pointer'
        }`}
      >
        🇹🇷 TR
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500 cursor-pointer'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
} 