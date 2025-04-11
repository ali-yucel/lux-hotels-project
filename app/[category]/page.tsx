import { getRegionBySlug, getThemeBySlug, regions, themes } from '../data/hotels';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CategoryPageContent from '../components/CategoryPageContent';

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

  return <CategoryPageContent categoryData={categoryData} />;
} 