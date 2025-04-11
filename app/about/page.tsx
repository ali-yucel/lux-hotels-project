import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[150px] bg-gray-900">
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl font-medium text-white text-center">
              Hakkımızda
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-1.jpg"
                  alt="Lux Hotels Ekibi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black/80">
                  Misyonumuz
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lux Hotels olarak, misafirlerimize unutulmaz bir konaklama deneyimi sunmayı hedefliyoruz. 
                  Her detayı özenle düşünülmüş hizmetlerimiz ve profesyonel ekibimizle, 
                  misafirlerimizin beklentilerinin ötesine geçmeyi amaçlıyoruz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-black/80">
                  Vizyonumuz
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Türkiye'nin lider otel rezervasyon platformu olma vizyonuyla çıktığımız bu yolda, 
                  teknoloji ve insan odaklı hizmet anlayışımızla sektöre yön vermeyi hedefliyoruz. 
                  Misafirlerimizin güvenini kazanmak ve sürdürmek en büyük önceliğimizdir.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
                <Image
                  src="/images/about-2.jpg"
                  alt="Lux Hotels Vizyon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-gray-50 rounded-2xl px-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Otel Partneri</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Şehir</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-gray-600">Müşteri Puanı</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 