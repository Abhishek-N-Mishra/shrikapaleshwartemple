import type { LocalizedText } from './temple-data';
import type { Lang } from './translations';

// Store album files in src/assets/gallery/<album-id>/
// Copying a file into the folder is not enough — also add it to that album's `items` list below.
// Example src: 'assets/gallery/temple-premises/photo-2.jpg'

export type GalleryMediaKind = 'image' | 'video';

export interface GalleryMedia {
  id: string;
  kind: GalleryMediaKind;
  src: string;
  alt: LocalizedText;
}

export interface GalleryAlbum {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  cover: string;
  items: GalleryMedia[];
}

export interface GalleryPageCopy {
  eyebrow: string;
  title: string;
  intro: string;
  heading: string;
  description: string;
  close: string;
  previous: string;
  next: string;
  photos: string;
  videos: string;
  media: string;
}

export const galleryPageCopy: Record<Lang, GalleryPageCopy> = {
  hi: {
    eyebrow: 'मंदिर की झलकियाँ',
    title: 'गैलरी',
    intro: 'कपालेश्वर महादेव मंदिर की सुंदरता, पवित्र वातावरण, पूजा-अर्चना, पर्वों और भक्तिमय आयोजनों की कुछ झलकियाँ।',
    heading: 'फोटो एवं वीडियो',
    description: 'मंदिर, दैनिक पूजा-अर्चना, धार्मिक पर्वों, विशेष आयोजनों और कपालेश्वर महादेव मंदिर के प्राकृतिक परिवेश की झलकियाँ देखें।',
    close: 'बंद करें',
    previous: 'पिछली तस्वीर',
    next: 'अगली तस्वीर',
    photos: 'फोटो',
    videos: 'वीडियो',
    media: 'फोटो एवं वीडियो'
  },
  en: {
    eyebrow: 'Glimpses of the Temple',
    title: 'Gallery',
    intro: 'A collection of photographs capturing the beauty of Kapaleshwar Mahadev Temple, its sacred surroundings, festivals, worship, and moments of devotion.',
    heading: 'Photos & Videos',
    description: 'Explore moments from the temple, daily worship, festivals, special occasions, and the natural beauty surrounding Kapaleshwar Mahadev Temple.',
    close: 'Close',
    previous: 'Previous photo',
    next: 'Next photo',
    photos: 'photos',
    videos: 'videos',
    media: 'photos & videos'
  }
};

export function albumMediaLabel(album: GalleryAlbum, copy: GalleryPageCopy): string {
  const hasVideo = album.items.some((item) => item.kind === 'video');
  const hasImage = album.items.some((item) => item.kind === 'image');
  if (hasVideo && hasImage) {
    return copy.media;
  }
  return hasVideo ? copy.videos : copy.photos;
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'temple-premises',
    title: { hi: 'मंदिर परिसर', en: 'Temple Premises' },
    category: { hi: 'मंदिर', en: 'Temple' },
    description: {
      hi: 'पवित्र कपालेश्वर महादेव मंदिर और उसके सुंदर परिवेश की एक झलक।',
      en: 'A glimpse of the sacred Kapaleshwar Mahadev Temple and its beautiful surroundings.'
    },
    cover: 'assets/gallery/temple-premises/cover.png',
    items: [
      {
        id: 'temple-premises-cover',
        kind: 'image',
        src: 'assets/gallery/temple-premises/cover.png',
        alt: {
          hi: 'कपालेश्वर महादेव मंदिर का शिखर और हरित परिवेश',
          en: 'Aerial view of Kapaleshwar Mahadev Temple and its surroundings'
        }
      },
      {
        id: 'temple-premises-1',
        kind: 'image',
        src: 'assets/gallery/temple-premises/1.jpg',
        alt: {
          hi: 'मंदिर के गर्भगृह में समाधि शिला, शिवलिंग और नंदी',
          en: 'Inner sanctum with the sacred stone, Shivling, and Nandi'
        }
      },
      {
        id: 'temple-premises-2',
        kind: 'image',
        src: 'assets/gallery/temple-premises/2.jpg',
        alt: {
          hi: 'पुष्पों और मालाओं से सजा शिवलिंग और पूजा-अर्चना',
          en: 'Flower-adorned Shivling during worship'
        }
      },
      {
        id: 'temple-premises-3',
        kind: 'image',
        src: 'assets/gallery/temple-premises/3.jpg',
        alt: {
          hi: 'पुष्पों से सुशोभित श्री कपालेश्वर महादेव शिवलिंग',
          en: 'Kapaleshwar Mahadev Shivling adorned with flowers'
        }
      },
      {
        id: 'temple-premises-4',
        kind: 'video',
        src: 'assets/gallery/temple-premises/4.mp4',
        alt: {
          hi: 'कपालेश्वर महादेव मंदिर परिसर का वीडियो',
          en: 'Video from the Kapaleshwar Mahadev Temple premises'
        }
      }
    ]
  },
  {
    id: 'shiva-worship',
    title: { hi: 'शिव पूजा', en: 'Shiva Worship' },
    category: { hi: 'पूजा-अर्चना', en: 'Worship' },
    description: {
      hi: 'भगवान शिव की पूजा-अर्चना और श्रद्धा से अर्पित किए गए पुष्प एवं पूजन सामग्री की झलक।',
      en: 'Moments of devotion, puja and offerings at the feet of Lord Shiva.'
    },
    cover: 'assets/gallery/shiva-worship/1.jpg',
    items: [
      {
        id: 'shiva-worship-1',
        kind: 'image',
        src: 'assets/gallery/shiva-worship/1.jpg',
        alt: {
          hi: 'बेलपत्र, पुष्प और दीप से सुशोभित शिवलिंग',
          en: 'Shivling adorned with bel leaves, flowers, and a lamp'
        }
      },
      {
        id: 'shiva-worship-2',
        kind: 'image',
        src: 'assets/gallery/shiva-worship/2.jpg',
        alt: {
          hi: 'मंदिर में शिवलिंग के समक्ष पूजा करते श्रद्धालु',
          en: 'Devotees offering worship at the shrine'
        }
      }
    ]
  },
  {
    id: 'shravan',
    title: { hi: 'श्रावण उत्सव', en: 'Shravan Celebrations' },
    category: { hi: 'श्रावण', en: 'Shravan' },
    description: {
      hi: 'पवित्र श्रावण मास में कपालेश्वर महादेव के दर्शन और पूजन के लिए एकत्रित होते श्रद्धालु।',
      en: 'Devotees gather at the temple during the holy month of Shravan.'
    },
    cover: 'assets/gallery/shravan/1.jpg',
    items: [
      {
        id: 'shravan-1',
        kind: 'image',
        src: 'assets/gallery/shravan/1.jpg',
        alt: {
          hi: 'श्रावण पूजा में बेलपत्र और दीप से सजा शिवलिंग',
          en: 'Shivling with bel leaves and a lamp during Shravan worship'
        }
      },
      {
        id: 'shravan-2',
        kind: 'image',
        src: 'assets/gallery/shravan/2.jpg',
        alt: {
          hi: 'श्रावण मास में मंदिर में पूजन करते श्रद्धालु',
          en: 'Devotees gathered for worship during Shravan'
        }
      }
    ]
  },
  {
    id: 'mahashivratri',
    title: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' },
    category: { hi: 'पर्व', en: 'Festival' },
    description: {
      hi: 'महाशिवरात्रि के पावन अवसर पर मंदिर में होने वाले धार्मिक आयोजनों और भक्तिमय वातावरण की झलक।',
      en: 'Glimpses of the temple during the sacred festival of Maha Shivaratri.'
    },
    cover: 'assets/gallery/mahashivratri/1.jpg',
    items: [
      {
        id: 'mahashivratri-1',
        kind: 'image',
        src: 'assets/gallery/mahashivratri/1.jpg',
        alt: {
          hi: 'महाशिवरात्रि पर दीप और पुष्प से सुशोभित शिवलिंग',
          en: 'Shivling with lamp and flowers on Maha Shivaratri'
        }
      },
      {
        id: 'mahashivratri-2',
        kind: 'image',
        src: 'assets/gallery/mahashivratri/2.jpg',
        alt: {
          hi: 'महाशिवरात्रि पर मंदिर में एकत्रित श्रद्धालु',
          en: 'Devotees gathered at the temple on Maha Shivaratri'
        }
      }
    ]
  },
  {
    id: 'surroundings',
    title: { hi: 'मंदिर का प्राकृतिक परिवेश', en: 'Temple Surroundings' },
    category: { hi: 'प्रकृति', en: 'Nature' },
    description: {
      hi: 'सेंगुर नदी के किनारे स्थित मंदिर के शांत और सुरम्य प्राकृतिक परिवेश की झलक।',
      en: 'The serene natural surroundings of the temple, nestled near the Sengur River.'
    },
    cover: 'assets/gallery/surroundings/1.jpg',
    items: [
      {
        id: 'surroundings-1',
        kind: 'image',
        src: 'assets/gallery/surroundings/1.jpg',
        alt: {
          hi: 'वृक्षों और मार्ग के बीच मंदिर का श्वेत शिखर',
          en: 'White temple shikhara seen from the approach path'
        }
      },
      {
        id: 'surroundings-2',
        kind: 'image',
        src: 'assets/gallery/surroundings/2.jpg',
        alt: {
          hi: 'मंदिर का शिखर और आसपास का मेला तथा हरित परिवेश',
          en: 'Aerial view of the temple, fair, and green surroundings'
        }
      }
    ]
  },
  {
    id: 'evening-aarti',
    title: { hi: 'संध्या आरती', en: 'Evening Aarti' },
    category: { hi: 'आरती', en: 'Worship' },
    description: {
      hi: 'संध्या आरती के समय मंदिर में व्याप्त भक्तिमय और आध्यात्मिक वातावरण की झलक।',
      en: 'A peaceful glimpse of the evening worship and devotional atmosphere at the temple.'
    },
    cover: 'assets/gallery/evening-aarti/1.jpg',
    items: [
      {
        id: 'evening-aarti-1',
        kind: 'image',
        src: 'assets/gallery/evening-aarti/1.jpg',
        alt: {
          hi: 'दीप के प्रकाश में पुष्प और बेलपत्र से सजा शिवलिंग',
          en: 'Shivling with flowers, bel leaves, and lamp light'
        }
      },
      {
        id: 'evening-aarti-2',
        kind: 'image',
        src: 'assets/gallery/evening-aarti/2.jpg',
        alt: {
          hi: 'संध्या आरती के समय मंदिर में श्रद्धालु',
          en: 'Devotees in the temple during evening aarti'
        }
      }
    ]
  }
];

