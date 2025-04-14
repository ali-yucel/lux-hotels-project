export interface IHotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
}

export interface IRegion {
  id: number;
  slug: string;
  name_tr: string;
  name_en: string;
  description_tr: string;
  description_en: string;
  image: string;
  hotels: IHotel[];
}

export interface ITheme {
  id: number;
  slug: string;
  name_tr: string;
  name_en: string;
  description_tr: string;
  description_en: string;
  image: string;
  hotels: IHotel[];
}

export const regions: IRegion[] = [
  {
    id: 1,
    slug: 'antalya-otelleri',
    name_tr: 'Antalya',
    name_en: 'Antalya',
    description_tr: 'Antalya\'nın en seçkin otelleri',
    description_en: 'The best hotels in Antalya',
    image: '/images/antalya.jpg',
    hotels: [
      {
        id: 11,
        name: 'Antalya Hotel 1',
        location: 'Lara, Antalya',
        price: 2500,
        image: '/images/placeholder.png',
        reviewCount: 458,
        rating: 4.7
      },
      {
        id: 12,
        name: 'Antalya Hotel 2',
        location: 'Konyaaltı, Antalya',
        price: 1800,
        image: '/images/placeholder.png',
        reviewCount: 325,
        rating: 4.5
      },
      {
        id: 13,
        name: 'Antalya Hotel 3',
        location: 'Konyaaltı, Antalya',
        price: 2700,
        image: '/images/placeholder.png',
        reviewCount: 225,
        rating: 4.5
      },
      {
        id: 14,
        name: 'Antalya Hotel 4',
        location: 'Konyaaltı, Antalya',
        price: 2200,
        image: '/images/placeholder.png',
        reviewCount: 289,
        rating: 4.4
      }
    ]
  },
  {
    id: 2,
    slug: 'bodrum-otelleri',
    name_tr: 'Bodrum',
    name_en: 'Bodrum',
    description_tr: 'Bodrum\'un en seçkin otelleri',
    description_en: 'The best hotels in Bodrum',
    image: '/images/bodrum.jpg',
    hotels: [
      {
        id: 21,
        name: 'Bodrum Hotel 1',
        location: 'Yalıkavak, Bodrum',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 624,
        rating: 4.8
      },
      {
        id: 22,
        name: 'Bodrum Hotel 2',
        location: 'Gümbet, Bodrum',
        price: 2200,
        image: '/images/placeholder.png',
        reviewCount: 289,
        rating: 4.4
      },
    ]
  },
  {
    id: 3,
    slug: 'istanbul-otelleri',
    name_tr: 'İstanbul',
    name_en: 'Istanbul',
    description_tr: 'İstanbul\'un en seçkin otelleri',
    description_en: 'The best hotels in Istanbul',
    image: '/images/istanbul.jpg',
    hotels: [
      {
        id: 31,
        name: 'İstanbul Hotel 1',
        location: 'Beşiktaş, İstanbul',
        price: 4500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: 32,
        name: 'İstanbul Hotel 2',
        location: 'Şişli, İstanbul',
        price: 2800,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.6
      },
    ]
  },
  {
    id: 4,
    slug: 'fethiye-otelleri',
    name_tr: 'Fethiye',
    name_en: 'Fethiye',
    description_tr: 'Fethiye\'nin en seçkin otelleri', 
    description_en: 'The best hotels in Fethiye',
    image: '/images/fethiye.jpg',
    hotels: [
      {
        id: 41,
        name: 'Fethiye Hotel 1',
        location: 'Fethiye, Fethiye',
        price: 4500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: 42,
        name: 'Fethiye Hotel 2',
        location: 'Fethiye, Fethiye',
        price: 2800,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.6
      },
    ]
  },
  {
    id: 5,
    slug: 'kibris-otelleri',
    name_tr: 'Kıbrıs',
    name_en: 'Cyprus',
    description_tr: 'Kıbrıs\'ın en seçkin otelleri',
    description_en: 'The best hotels in Cyprus',
    image: '/images/kibris.jpg',
    hotels: [
      {
        id: 51,
        name: 'Kıbrıs Hotel 1',
        location: 'Paphos, Kıbrıs',
        price: 5500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: 52,
        name: 'Kıbrıs Hotel 2',
        location: 'Limassol, Kıbrıs',
        price: 3800,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.6
      }
    ]
  },
  {
    id: 6,
    slug: 'kapadokya-otelleri',
    name_tr: 'Kapadokya',
    name_en: 'Cappadocia',
    description_tr: 'Kapadokya\'nın en seçkin otelleri',
    description_en: 'The best hotels in Cappadocia',
    image: '/images/kapadokya.jpg',
    hotels: [
      {
        id: 61,
        name: 'Kapadokya Hotel 1',
        location: 'Göreme, Kapadokya',
        price: 6500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: 62,
        name: 'Kapadokya Hotel 2',
        location: 'Nevşehir, Kapadokya',
        price: 4800,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.6
      }
    ]
  }
];

export const themes: ITheme[] = [
  {
    id: 1,
    slug: "aile-otelleri",
    name_tr: "Aile Otelleri",
    name_en: "Family Hotels",
    description_tr: "Ailenizle unutulmaz bir tatil deneyimi",
    description_en: "An unforgettable holiday experience with your family",
    image: "/images/family-hotels.jpg",
    hotels: [
      {
        id: 101,
        name: "Voyage Belek Golf & Spa",
        location: "Belek, Antalya",
        price: 8500,
        image: "/images/placeholder.png",
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: 102,
        name: "Rixos Premium Tekirova",
        location: "Tekirova, Antalya",
        price: 7800,
        image: "/images/placeholder.png",
        reviewCount: 745,
        rating: 4.8
      }
    ]
  },
  {
    id: 2,
    slug: "doga-otelleri",
    name_tr: "Doğa Otelleri",
    name_en: "Nature Hotels",
    description_tr: "Doğayla iç içe huzurlu bir konaklama",
    description_en: "A peaceful stay in nature",
    image: "/images/nature-hotels.jpg",
    hotels: [
      {
        id: 201,
        name: "Sakli Göl Evleri",
        location: "Sapanca, Sakarya",
        price: 3500,
        image: "/images/placeholder.png",
        reviewCount: 425,
        rating: 4.7
      },
      {
        id: 202,
        name: "Bolu Mountain Resort",
        location: "Kartalkaya, Bolu",
        price: 4200,
        image: "/images/placeholder.png",
        reviewCount: 312,
        rating: 4.6
      }
    ]
  },
  {
    id: 3,
    slug: "balayi-otelleri",
    name_tr: "Balayı Otelleri",
    name_en: "Honeymoon Hotels",
    description_tr: "Romantik bir balayı için özel seçilmiş oteller",
    description_en: "Specially selected hotels for a romantic honeymoon",
    image: "/images/honeymoon-hotels.jpg",
    hotels: [
      {
        id: 301,
        name: "Adam & Eve Hotel",
        location: "Belek, Antalya",
        price: 12500,
        image: "/images/placeholder.png",
        reviewCount: 634,
        rating: 4.9
      },
      {
        id: 302,
        name: "Maxx Royal Kemer",
        location: "Kemer, Antalya",
        price: 15800,
        image: "/images/placeholder.png",
        reviewCount: 528,
        rating: 4.8
      }
    ]
  },
  {
    id: 4,
    slug: "muhafazakar-oteller",
    name_tr: "Muhafazakar Oteller",
    name_en: "Conservative Hotels",
    description_tr: "İslami konsepte uygun tatil deneyimi",
    description_en: "Holiday experience suitable for Islamic concept",
    image: "/images/conservative-hotels.jpg",
    hotels: [
      {
        id: 401,
        name: "Adenya Hotel & Resort",
        location: "Alanya, Antalya",
        price: 6500,
        image: "/images/placeholder.png",
        reviewCount: 745,
        rating: 4.7
      },
      {
        id: 402,
        name: "Wome Deluxe",
        location: "Alanya, Antalya",
        price: 5800,
        image: "/images/placeholder.png",
        reviewCount: 632,
        rating: 4.6
      }
    ]
  },
  {
    id: 5,
    slug: "termal-oteller",
    name_tr: "Termal Otelleri",
    name_en: "Thermal Hotels",
    description_tr: "Şifalı sularla sağlık ve dinlenme",
    description_en: "Health and relaxation with healing waters",
    image: "/images/thermal-hotels.jpg",
    hotels: [
      {
        id: 501,
        name: "Richmond Nua Wellness",
        location: "Sapanca, Sakarya",
        price: 4500,
        image: "/images/placeholder.png",
        reviewCount: 523,
        rating: 4.8
      },
      {
        id: 502,
        name: "NG Afyon",
        location: "Afyon",
        price: 3800,
        image: "/images/placeholder.png",
        reviewCount: 412,
        rating: 4.6
      }
    ]
  },
  {
    id: 6,
    slug: "butik-oteller",
    name_tr: "Butik Oteller",
    name_en: "Boutique Hotels",
    description_tr: "Özel tasarımlı, samimi atmosfer",
    description_en: "Specially designed, intimate atmosphere",
    image: "/images/boutique-hotels.jpg",
    hotels: [
      {
        id: 601,
        name: "Museum Hotel",
        location: "Ürgüp, Nevşehir",
        price: 8500,
        image: "/images/placeholder.png",
        reviewCount: 345,
        rating: 4.9
      },
      {
        id: 602,
        name: "Argos in Cappadocia",
        location: "Uçhisar, Nevşehir",
        price: 7800,
        image: "/images/placeholder.png",
        reviewCount: 289,
        rating: 4.8
      }
    ]
  },
  {
    id: 7,
    slug: "sehir-otelleri",
    name_tr: "Şehir Otelleri",
    name_en: "City Hotels",
    description_tr: "Şehir merkezinde konforlu konaklama",
    description_en: "Comfortable accommodation in city center",
    image: "/images/city-hotels.jpg",
    hotels: [
      {
        id: 701,
        name: "Shangri-La Bosphorus",
        location: "Beşiktaş, İstanbul",
        price: 12500,
        image: "/images/placeholder.png",
        reviewCount: 634,
        rating: 4.9
      },
      {
        id: 702,
        name: "Four Seasons Bosphorus",
        location: "Beşiktaş, İstanbul",
        price: 15800,
        image: "/images/placeholder.png",
        reviewCount: 528,
        rating: 4.8
      }
    ]
  },
  {
    id: 8,
    slug: "ultra-luks-oteller",
    name_tr: "Ultra Lüks Otelleri",
    name_en: "Ultra Luxury Hotels",
    description_tr: "En üst düzey lüks ve konfor",
    description_en: "Ultimate luxury and comfort",
    image: "/images/luxury-hotels.jpg",
    hotels: [
      {
        id: 801,
        name: "Mandarin Oriental Bodrum",
        location: "Bodrum, Muğla",
        price: 25000,
        image: "/images/placeholder.png",
        reviewCount: 423,
        rating: 4.9
      },
      {
        id: 802,
        name: "D Maris Bay",
        location: "Marmaris, Muğla",
        price: 22000,
        image: "/images/placeholder.png",
        reviewCount: 378,
        rating: 4.8
      }
    ]
  }
];

export const getRegionBySlug = (slug: string) => {
  return regions.find(region => region.slug === slug);
};

export const getThemeBySlug = (slug: string) => {
  return themes.find(theme => theme.slug === slug);
}; 