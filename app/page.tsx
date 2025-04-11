import Image from "next/image";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function Home() {
  const popularDestinations = [
    {
      id: 1,
      name: 'Antalya',
      image: '/images/antalya.jpg'
    },
    {
      id: 2,
      name: 'Bodrum',
      image: '/images/bodrum.jpg'
    },
    {
      id: 3,
      name: 'İstanbul',
      image: '/images/istanbul.jpg'
    },
    {
      id: 4,
      name: 'Fethiye',
      image: '/images/fethiye.jpg'
    },
    {
      id: 5,
      name: 'Kıbrıs',
      image: '/images/kibris.jpg'
    },
    {
      id: 6,
      name: 'Kapadokya',
      image: '/images/kapadokya.jpg'
    }
  ];

  const travelThemes = [
    {
      id: 1,
      name: 'Aile Otelleri',
      image: '/images/family-hotels.jpg',
      description: 'Ailenizle unutulmaz bir tatil deneyimi'
    },
    {
      id: 2,
      name: 'Doğa Otelleri',
      image: '/images/nature-hotels.jpg',
      description: 'Doğayla iç içe huzurlu bir konaklama'
    },
    {
      id: 3,
      name: 'Balayı Otelleri',
      image: '/images/honeymoon-hotels.jpg',
      description: 'Romantik anlar için özel seçenekler'
    },
    {
      id: 4,
      name: 'Muhafazakar Oteller',
      image: '/images/conservative-hotels.jpg',
      description: 'Özel konseptiyle huzurlu bir tatil'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
                  Türkiye'nin en seçkin otellerinde yerinizi ayırtın.
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
              <h2 className="text-3xl font-bold mb-2 text-black/80">Popüler Bölgeler</h2>
              <p className="text-gray-600 text-lg">Popüler Seyahat Bölgelerini Keşfedin</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularDestinations.map((destination) => (
                <div key={destination.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-semibold">
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Themes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-black">Otel Temaları</h2>
              <p className="text-gray-600 text-lg">Öne Çıkan Otel Temalarını İnceleyin</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {travelThemes.map((theme) => (
                <div key={theme.id} className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-[200px]">
                    <Image
                      src={theme.image}
                      alt={theme.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black">{theme.name}</h3>
                    <p className="text-gray-500">{theme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
