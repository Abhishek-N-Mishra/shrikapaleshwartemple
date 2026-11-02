import type { LocalizedText } from './temple-data';
import type { Lang } from './translations';

// Store album files in src/assets/gallery/<album-id>/ as 1.ext, 2.ext, …
// After adding files, append the filename to that album's list in `galleryAlbums` below.

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

/** Build gallery items from numbered files (1.ext, 2.ext, …) in listed order. */
function albumItemsFromFiles(
  albumId: string,
  files: string[],
  altBase: LocalizedText
): GalleryMedia[] {
  return files.map((file) => {
    const stem = file.replace(/\.[^.]+$/, '');
    const ext = file.split('.').pop()?.toLowerCase() ?? '';
    const kind: GalleryMediaKind = ext === 'mp4' ? 'video' : 'image';
    const label = { hi: `${altBase.hi} — ${stem}`, en: `${altBase.en} — ${stem}` };
    return {
      id: `${albumId}-${stem}`,
      kind,
      src: `assets/gallery/${albumId}/${file}`,
      alt: label
    };
  });
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
    cover: 'assets/gallery/temple-premises/1.jpg',
    items: albumItemsFromFiles('temple-premises', ['1.jpg', '2.jpg', '3.jpg', '4.mp4'], {
      hi: 'मंदिर परिसर',
      en: 'Temple premises'
    })
  },
  {
    id: 'shiva-worship',
    title: { hi: 'शिव पूजा', en: 'Shiva Worship' },
    category: { hi: 'पूजा-अर्चना', en: 'Worship' },
    description: {
      hi: 'भगवान शिव की पूजा-अर्चना और श्रद्धा से अर्पित किए गए पुष्प एवं पूजन सामग्री की झलक।',
      en: 'Moments of devotion, puja and offerings at the feet of Lord Shiva.'
    },
    cover: 'assets/gallery/shiva-worship/1.jpeg',
    items: albumItemsFromFiles(
      'shiva-worship',
      ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.mp4', '6.mp4'],
      { hi: 'शिव पूजा', en: 'Shiva worship' }
    )
  },
  {
    id: 'shravan',
    title: { hi: 'श्रावण उत्सव', en: 'Shravan Celebrations' },
    category: { hi: 'श्रावण', en: 'Shravan' },
    description: {
      hi: 'पवित्र श्रावण मास में कपालेश्वर महादेव के दर्शन और पूजन के लिए एकत्रित होते श्रद्धालु।',
      en: 'Devotees gather at the temple during the holy month of Shravan.'
    },
    cover: 'assets/gallery/shravan/1.jpeg',
    items: albumItemsFromFiles(
      'shravan',
      ['1.jpeg', '2.jpeg', '3.jpeg', '4.mp4', '5.mp4', '6.mp4'],
      { hi: 'श्रावण उत्सव', en: 'Shravan celebrations' }
    )
  },
  {
    id: 'mahashivratri',
    title: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' },
    category: { hi: 'पर्व', en: 'Festival' },
    description: {
      hi: 'महाशिवरात्रि के पावन अवसर पर मंदिर में होने वाले धार्मिक आयोजनों और भक्तिमय वातावरण की झलक।',
      en: 'Glimpses of the temple during the sacred festival of Maha Shivaratri.'
    },
    cover: 'assets/gallery/mahashivratri/1.jpeg',
    items: albumItemsFromFiles('mahashivratri', ['1.jpeg', '2.jpeg', '3.jpeg', '4.mp4'], {
      hi: 'महाशिवरात्रि',
      en: 'Maha Shivaratri'
    })
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
    items: albumItemsFromFiles('surroundings', ['1.jpg', '2.jpg'], {
      hi: 'मंदिर का प्राकृतिक परिवेश',
      en: 'Temple surroundings'
    })
  },
  {
    id: 'evening-aarti',
    title: { hi: 'संध्या आरती', en: 'Evening Aarti' },
    category: { hi: 'आरती', en: 'Worship' },
    description: {
      hi: 'संध्या आरती के समय मंदिर में व्याप्त भक्तिमय और आध्यात्मिक वातावरण की झलक।',
      en: 'A peaceful glimpse of the evening worship and devotional atmosphere at the temple.'
    },
    cover: 'assets/gallery/evening-aarti/1.jpeg',
    items: albumItemsFromFiles('evening-aarti', ['1.jpeg', '2.jpeg', '3.jpeg', '4.mp4'], {
      hi: 'संध्या आरती',
      en: 'Evening aarti'
    })
  }
];

