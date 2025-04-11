import { getRegionBySlug, getThemeBySlug, regions, themes } from '../data/hotels';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{
    category: string;
  }>;
}

// Statik yolları oluştur
export async function generateStaticParams() {
  // Tüm slugları tek bir dizide topla
  const slugs = [
    ...regions.map(region => region.slug),
    ...themes.map(theme => theme.slug)
  ];
  
  // Her slug için bir kategori parametresi oluştur
  return slugs.map(slug => ({
    category: slug
  }));
}

export default async function CategoryPage({ params }: Props) {
  // Params'i await et
  const { category } = await params;
  
  const region = await getRegionBySlug(category);
  const theme = await getThemeBySlug(category);
  
  const categoryData = region || theme;
  
  if (!categoryData) {
    notFound();
  }

  return (
  <>
  
  <div className="relative h-[300px] mb-12 rounded-lg overflow-hidden">
        <Image
          src={categoryData.image}
          alt={categoryData.name}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{categoryData.name}</h1>
          <p className="text-xl text-gray-100 max-w-3xl drop-shadow-md">{categoryData.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.hotels.map((hotel) => (
            <Link href={`/hotels/${hotel.id}`} key={hotel.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
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
                      {hotel.price.toLocaleString('tr-TR')} ₺
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