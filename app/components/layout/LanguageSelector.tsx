'use client';

import { useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "../../../i18n/routing";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-colors"
    >
      <option value="tr">🇹🇷 TR</option>
      <option value="en">🇬🇧 EN</option>
    </select>
  );
} 