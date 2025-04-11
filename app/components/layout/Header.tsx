import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              LUX Hotels
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/hotels" className="text-gray-600 hover:text-gray-900 transition-colors">
                Oteller
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                İletişim
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Rezervasyon Yap
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 