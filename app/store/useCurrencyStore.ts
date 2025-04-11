'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Currency = 'TRY' | 'USD' | 'EUR' | 'GBP';

type CurrencyStore = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceInTRY: number) => string;
};

const exchangeRates: Record<Currency, number> = {
  TRY: 1,
  USD: 0.031,
  EUR: 0.029,
  GBP: 0.025
};

const currencySymbols: Record<Currency, string> = {
  TRY: '₺',
  USD: '$',
  EUR: '€',
  GBP: '£'
};

const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      currency: 'TRY',
      setCurrency: (newCurrency) => set({ currency: newCurrency }),
      convertPrice: (priceInTRY) => {
        const { currency } = get();
        const convertedPrice = priceInTRY * exchangeRates[currency];
        return `${currencySymbols[currency]}${convertedPrice.toLocaleString('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`;
      }
    }),
    {
      name: 'currency-storage'
    }
  )
);

export default useCurrencyStore; 