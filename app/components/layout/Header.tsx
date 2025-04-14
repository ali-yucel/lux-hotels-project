'use client';

import Link from 'next/link';
import CurrencySelector from './CurrencySelector';
import LanguageSelector from './LanguageSelector';
import { themes, regions } from '../../data/hotels';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            LUX Hotels
          </Link>
          <div className="flex items-center gap-10">
            <nav className="flex gap-4 items-center">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('navigation.home')}
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('navigation.about')}
              </Link>
              <div className="relative group h-[64px] flex items-center">
                <button
                  className="text-gray-600 group-hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  {t('navigation.themes')}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-56 bg-gray-200 rounded-b-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {themes.map((theme) => (
                    <Link
                      key={theme.id}
                      href={`/${theme.slug}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-blue-600 transition-colors"
                    >
                      {locale === 'tr' ? theme.name_tr : theme.name_en}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="relative group h-[64px] flex items-center">
                <button
                  className="text-gray-600 group-hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  {t('navigation.regions')}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-56 bg-gray-200 rounded-b-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {regions.map((region) => (
                    <Link
                      key={region.id}
                      href={`/${region.slug}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-blue-600 transition-colors"
                    >
                      {locale === 'tr' ? region.name_tr : region.name_en}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('navigation.contact')}
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <CurrencySelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 