'use client';

import useCurrencyStore from '@/app/store/useCurrencyStore';

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as 'TRY' | 'USD' | 'EUR' | 'GBP')}
      className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-colors"
    >
      <option value="TRY">₺ TRY</option>
      <option value="USD">$ USD</option>
      <option value="EUR">€ EUR</option>
      <option value="GBP">£ GBP</option>
    </select>
  );
} 