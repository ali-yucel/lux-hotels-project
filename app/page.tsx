import Image from "next/image";
import Link from 'next/link';
import { regions, themes } from './data/hotels';

export default function Home() {
  return (
    <main className="flex-grow">
    {/* Hero Section */}
    <section className="py-16 bg-[#eee]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-black/80">
              Lüks ve Konforun <br/>
              <span className="text-blue-600">Yeni Adresi</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              En üst düzey konfor ve hizmet anlayışıyla unutulmaz bir konaklama deneyimi yaşayın. 
              Türkiyenin en seçkin otellerinde yerinizi ayırtın.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Hemen Rezervasyon Yap
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-hotel.jpg"
              alt="Lüks Otel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>

    {/* Popular Destinations Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popüler Bölgeler</h2>
          <p className="text-gray-600 text-lg">Popüler Seyahat Bölgelerini Keşfedin</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <Link 
              href={`/${region.slug}`}
              key={region.id} 
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {region.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Travel Themes Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-black/80">Otel Temaları</h2>
          <p className="text-gray-600 text-lg">Öne Çıkan Otel Temalarını İnceleyin</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme) => (
            <Link 
              href={`/${theme.slug}`}
              key={theme.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[200px]">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{theme.name}</h3>
                <p className="text-gray-600">{theme.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </main>
  );
}
