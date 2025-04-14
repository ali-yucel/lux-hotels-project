import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations();

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[150px] bg-gray-900">
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-medium text-white text-center">
            {t('navigation.about')}
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
                alt={t('about.mission.image_alt')}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black/80">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-black/80">
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/about-2.jpg"
                alt={t('about.vision.image_alt')}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-gray-50 rounded-2xl px-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('about.stats.hotels')}</div>
              <div className="text-gray-600">{t('about.stats.hotels_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('about.stats.customers')}</div>
              <div className="text-gray-600">{t('about.stats.customers_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('about.stats.cities')}</div>
              <div className="text-gray-600">{t('about.stats.cities_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('about.stats.rating')}</div>
              <div className="text-gray-600">{t('about.stats.rating_label')}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 