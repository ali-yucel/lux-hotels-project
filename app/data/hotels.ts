export interface IHotel {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  reviewCount: number;
  rating: number;
}

export interface IRegion {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  hotels: IHotel[];
}

export interface ITheme {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  hotels: IHotel[];
}

export const regions: IRegion[] = [
  {
    id: '1',
    slug: 'antalya-otelleri',
    name: 'Antalya',
    image: '/images/antalya.jpg',
    description: 'Antalya\'nın en seçkin otelleri',
    hotels: [
      {
        id: '11',
        name: 'Antalya Hotel 1',
        location: 'Lara, Antalya',
        price: 2500,
        image: '/images/placeholder.png',
        reviewCount: 458,
        rating: 4.7
      },
      {
        id: '12',
        name: 'Antalya Hotel 2',
        location: 'Konyaaltı, Antalya',
        price: 1800,
        image: '/images/placeholder.png',
        reviewCount: 325,
        rating: 4.5
      },
      {
        id: '13',
        name: 'Antalya Hotel 3',
        location: 'Konyaaltı, Antalya',
        price: 2700,
        image: '/images/placeholder.png',
        reviewCount: 225,
        rating: 4.5
      },
      {
        id: '14',
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
    id: '2',
    slug: 'bodrum-otelleri',
    name: 'Bodrum',
    image: '/images/bodrum.jpg',
    description: 'Bodrum\'un en seçkin otelleri',
    hotels: [
      {
        id: '21',
        name: 'Bodrum Hotel 1',
        location: 'Yalıkavak, Bodrum',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 624,
        rating: 4.8
      },
      {
        id: '22',
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
    id: '3',
    slug: 'istanbul-otelleri',
    name: 'İstanbul',
    image: '/images/istanbul.jpg',
    description: 'İstanbul\'un en seçkin otelleri',
    hotels: [
      {
        id: '31',
        name: 'İstanbul Hotel 1',
        location: 'Beşiktaş, İstanbul',
        price: 4500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: '32',
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
    id: '4',
    slug: 'fethiye-otelleri',
    name: 'Fethiye',
    image: '/images/fethiye.jpg',
    description: 'Fethiye\'nin en seçkin otelleri', 
    hotels: [
      {
        id: '41',
        name: 'Fethiye Hotel 1',
        location: 'Fethiye, Fethiye',
        price: 4500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: '42',
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
    id: '5',
    slug: 'kibris-otelleri',
    name: 'Kıbrıs',
    image: '/images/kibris.jpg',
    description: 'Kıbrıs\'ın en seçkin otelleri',
    hotels: [
      {
        id: '51',
        name: 'Kıbrıs Hotel 1',
        location: 'Paphos, Kıbrıs',
        price: 5500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: '52',
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
    id: '6',
    slug: 'kapadokya-otelleri',
    name: 'Kapadokya',
    image: '/images/kapadokya.jpg',
    description: 'Kapadokya\'nın en seçkin otelleri',
    hotels: [
      {
        id: '61',
        name: 'Kapadokya Hotel 1',
        location: 'Göreme, Kapadokya',
        price: 6500,
        image: '/images/placeholder.png',
        reviewCount: 856,
        rating: 4.9
      },
      {
        id: '62',
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
    id: '1',
    slug: 'aile-otelleri',
    name: 'Aile Otelleri',
    image: '/images/family-hotels.jpg',
    description: 'Ailenizle unutulmaz bir tatil deneyimi',
    hotels: [
      {
        id: '101',
        name: 'Family Resort & Spa',
        location: 'Antalya',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '102',
        name: 'Kids Paradise Hotel',
        location: 'Bodrum',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  },
  {
    id: '2',
    slug: 'doga-otelleri',
    name: 'Doğa Otelleri',
    image: '/images/nature-hotels.jpg',
    description: 'Doğayla iç içe huzurlu bir konaklama',
    hotels: [
      {
        id: '201',
        name: 'Eco Lodge Resort',
        location: 'Fethiye',
        price: 2800,
        image: '/images/placeholder.png',
        reviewCount: 356,
        rating: 4.9
      },
      {
        id: '202',
        name: 'Nature Valley Hotel',
        location: 'Kapadokya',
        price: 3100,
        image: '/images/placeholder.png',
        reviewCount: 289,
        rating: 4.6
      }
    ],
  },{
    id: '3',
    slug: 'balayi-otelleri',
    name: 'Balayı Otelleri',
    image: '/images/honeymoon-hotels.jpg',
    description: 'Balayı otelleri',
    hotels: [
      {
        id: '301',
        name: 'Balayı Hotel 1',
        location: 'Balayı',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '302',
        name: 'Balayı Hotel 2',
        location: 'Balayı',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  },
  {
    id: '4',
    slug: 'muhafazakar-otelleri',
    name: 'Muhafazakar Otelleri',
    image: '/images/conservative-hotels.jpg',
    description: 'Muhafazakar otelleri',
    hotels: [
      {
        id: '401',
        name: 'Muhafazakar Hotel 1',
        location: 'Muhafazakar',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '402',
        name: 'Muhafazakar Hotel 2',
        location: 'Muhafazakar',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  },
  {
    id: '5',
    slug: 'termal-otelleri',
    name: 'Termal Otelleri',
    image: '/images/thermal-hotels.jpg',
    description: 'Termal otelleri',
    hotels: [
      {
        id: '501',
        name: 'Termal Hotel 1',
        location: 'Termal',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '502',
        name: 'Termal Hotel 2',
        location: 'Termal',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7,
      }
    ]
  },
  {
    id: '6',
    slug: 'butik-oteller',
    name: 'Butik Oteller',
    image: '/images/boutique-hotels.jpg',
    description: 'Butik oteller',
    hotels: [
      {
        id: '601',
        name: 'Butik Hotel 1',
        location: 'Butik',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '602',
        name: 'Butik Hotel 2',
        location: 'Butik',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  },
  {
    id: '7',
    slug: 'sehir-otelleri',
    name: 'Şehir Otelleri',
    image: '/images/city-hotels.jpg',
    description: 'Şehir otelleri',
    hotels: [
      {
        id: '701',
        name: 'Şehir Hotel 1',
        location: 'Şehir',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '702',
        name: 'Şehir Hotel 2',
        location: 'Şehir',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  },
  {
    id: '8',
    slug: 'ultra-luks-otelleri',
    name: 'Ultra Luks Otelleri',
    image: '/images/luxury-hotels.jpg',
    description: 'Ultra Luks otelleri',
    hotels: [
      {
        id: '801',
        name: 'Ultra Luks Hotel 1',
        location: 'Ultra Luks',
        price: 3500,
        image: '/images/placeholder.png',
        reviewCount: 524,
        rating: 4.8
      },
      {
        id: '802',
        name: 'Ultra Luks Hotel 2',
        location: 'Ultra Luks',
        price: 4200,
        image: '/images/placeholder.png',
        reviewCount: 412,
        rating: 4.7
      }
    ]
  }
];

export const getRegionBySlug = (slug: string): IRegion | undefined => {
  return regions.find(region => region.slug === slug);
};

export const getThemeBySlug = (slug: string): ITheme | undefined => {
  return themes.find(theme => theme.slug === slug);
}; 