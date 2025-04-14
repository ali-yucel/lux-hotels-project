'use client';

import Image from 'next/image';
import { Link } from '../../i18n/routing';
import { IRegion, ITheme } from '../data/hotels';
import useCurrencyStore from '../store/useCurrencyStore';
import { useMemo } from 'react';
import { useLocale } from 'next-intl';

interface CategoryPageContentProps {
  categoryData: IRegion | ITheme;
}

export default function CategoryPageContent({ categoryData }: CategoryPageContentProps) {
  const { currency, convertPrice } = useCurrencyStore();
  const locale = useLocale();

  // Fiyatları hesapla ve cache'le
  const prices = useMemo(() => {
    return categoryData.hotels.reduce((acc, hotel) => {
      acc[hotel.id] = convertPrice(hotel.price);
      return acc;
    }, {} as Record<string, string>);
  }, [categoryData.hotels, currency, convertPrice]);

  return (
    <>
      <div className="relative h-[300px] mb-12 overflow-hidden">
        <Image
          src={categoryData.image}
          alt={locale === 'tr' ? categoryData.name_tr : categoryData.name_en}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
            {locale === 'tr' ? categoryData.name_tr : categoryData.name_en}
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl drop-shadow-md text-center px-4">
            {locale === 'tr' ? categoryData.description_tr : categoryData.description_en}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.hotels.map((hotel) => (
            <Link href={`#`} key={hotel.id} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-70">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-2">{hotel.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      {prices[hotel.id]}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{hotel.rating}</span>
                      <span className="text-gray-500 ml-2">({hotel.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 