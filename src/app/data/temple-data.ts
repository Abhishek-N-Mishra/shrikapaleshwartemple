import type { Lang } from './translations';

export type LocalizedText = Record<Lang, string>;

export interface Festival {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface GalleryImage {
  id: number;
  title: LocalizedText;
  category: LocalizedText;
  image: string;
}

export const templeInfo = {
  nameHindi: 'श्री कपालेश्वर महादेव मंदिर',
  nameEnglish: 'Kapaleshwar Mahadev Temple',
  locationHindi: 'डेरापुर, कानपुर देहात, उत्तर प्रदेश',
  locationEnglish: 'Derapur, Kanpur Dehat, Uttar Pradesh',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kapaleshwar+Mahadev+Mandir+Derapur+Kanpur+Dehat',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Kapaleshwar+Mahadev+Mandir+Derapur+Kanpur+Dehat&z=14&output=embed',
  officialYoutubeUrl: 'https://www.youtube.com/@ShreeKapaleshwarmahadev'
};

export type SocialId = 'facebook' | 'instagram' | 'youtube' | 'whatsapp';

export interface SocialLink {
  id: SocialId;
  url: string;
  label: LocalizedText;
}

// Fill `url` when the official page or number is ready. Empty urls still show the icon.
export const socialLinks: SocialLink[] = [
  { id: 'facebook', url: 'https://www.facebook.com/profile.php?id=100070980551770', label: { hi: 'फेसबुक', en: 'Facebook' } },
  { id: 'instagram', url: '', label: { hi: 'इंस्टाग्राम', en: 'Instagram' } },
  { id: 'youtube', url: 'https://www.youtube.com/@ShreeKapaleshwarmahadev', label: { hi: 'यूट्यूब', en: 'YouTube' } },
  { id: 'whatsapp', url: 'https://chat.whatsapp.com/Bh3HPhDprUj2xgG6uwambO', label: { hi: 'व्हाट्सएप', en: 'WhatsApp' } }
];

export const socialCopy: Record<Lang, { heading: string; description: string; aria: string }> = {
  hi: {
    heading: 'फॉलो करें एवं जुड़ें',
    description: 'हमारे सोशल मीडिया माध्यमों से मंदिर से जुड़े रहें।',
    aria: 'सोशल मीडिया लिंक'
  },
  en: {
    heading: 'Follow & Connect',
    description: 'Stay connected with the temple through our social media channels.',
    aria: 'Social media links'
  }
};

export const festivals: Festival[] = [
  {
    id: 'mahashivratri',
    title: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' },
    description: {
      hi: 'विशेष पूजा, अभिषेक और दर्शन के लिए श्रद्धालु इस पावन अवसर पर मंदिर पहुंचते हैं।',
      en: 'Devotees visit the temple on this sacred occasion for special puja, abhishek, and darshan.'
    },
    image: 'assets/images/festival-mahashivratri.svg'
  },
  {
    id: 'sawan',
    title: { hi: 'सावन', en: 'Sawan' },
    description: {
      hi: 'सावन और सावन सोमवार भगवान शिव की आराधना के प्रमुख अवसर हैं।',
      en: 'Sawan and Sawan Mondays are important occasions for the worship of Lord Shiva.'
    },
    image: 'assets/images/festival-sawan.svg'
  }
];

export const gallery: GalleryImage[] = [
  { id: 1, title: { hi: 'मंदिर परिसर', en: 'Temple premises' }, category: { hi: 'मंदिर', en: 'Temple' }, image: 'assets/images/aerial-photo.jpg' },
  { id: 2, title: { hi: 'शिव आराधना', en: 'Shiva worship' }, category: { hi: 'पूजा', en: 'Worship' }, image: 'assets/images/shrine-photo.png' },
  { id: 3, title: { hi: 'सावन आयोजन', en: 'Sawan gathering' }, category: { hi: 'सावन', en: 'Sawan' }, image: 'assets/images/festival-sawan.svg' },
  { id: 4, title: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' }, category: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' }, image: 'assets/images/festival-mahashivratri.svg' },
  { id: 5, title: { hi: 'मंदिर का परिवेश', en: 'Temple surroundings' }, category: { hi: 'परिसर', en: 'Campus' }, image: 'assets/images/landscape.svg' },
  { id: 6, title: { hi: 'संध्या आरती', en: 'Evening aarti' }, category: { hi: 'पूजा', en: 'Worship' }, image: 'assets/images/aarti.svg' }
];
