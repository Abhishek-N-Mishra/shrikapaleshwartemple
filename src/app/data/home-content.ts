import type { Lang } from './translations';
import type { Festival } from './temple-data';
import { festivalCardImages, festivalCardSymbols } from './festivals-content';

export interface HomeCopy {
  planVisitTitle: string;
  planVisitBody: string;
  planReachButton: string;
}

export const homeCopy: Record<Lang, HomeCopy> = {
  hi: {
    planVisitTitle: 'अपनी यात्रा की योजना बनाएं',
    planVisitBody:
      'चाहे आप दर्शन के लिए आ रहे हों, किसी धार्मिक अवसर पर, या केवल शांत वातावरण का अनुभव करने के लिए — श्री कपालेश्वर महादेव मंदिर में आपका स्वागत है।',
    planReachButton: 'कैसे पहुँचें'
  },
  en: {
    planVisitTitle: 'Plan Your Visit',
    planVisitBody:
      'Whether you are coming for darshan, a religious occasion, or simply to experience the peaceful surroundings, we welcome you to Shri Kapaleshwar Mahadev Temple.',
    planReachButton: 'How to Reach'
  }
};

/** Home festival highlights — same photos, titles, and symbols as the Festivals page */
export const homeFestivals: Festival[] = [
  {
    id: 'mahashivratri',
    title: { hi: 'महाशिवरात्रि', en: 'Maha Shivaratri' },
    description: {
      hi: 'भगवान शिव के प्रति विशेष श्रद्धा और भक्ति का पावन अवसर।',
      en: 'A sacred occasion of special devotion to Lord Shiva.'
    },
    image: festivalCardImages.mahashivratri,
    symbol: festivalCardSymbols.mahashivratri
  },
  {
    id: 'shravan',
    title: { hi: 'श्रावण (सावन)', en: 'Shravan (Sawan)' },
    description: {
      hi: 'भगवान शिव की आराधना का प्रमुख महीना।',
      en: 'A principal month for the worship of Lord Shiva.'
    },
    image: festivalCardImages.shravan,
    symbol: festivalCardSymbols.shravan
  },
  {
    id: 'shravan-mondays',
    title: { hi: 'श्रावण सोमवार', en: 'Shravan Mondays' },
    description: {
      hi: 'सावन के सोमवार भक्ति और दर्शन के लिए विशेष रूप से महत्वपूर्ण।',
      en: 'Mondays during Shravan hold special significance for devotion and darshan.'
    },
    image: festivalCardImages.shravanMondays,
    symbol: festivalCardSymbols['shravan-mondays']
  },
  {
    id: 'religious-fairs',
    title: { hi: 'धार्मिक मेले', en: 'Religious Fairs' },
    description: {
      hi: 'स्थानीय परंपरा के अनुसार धार्मिक अवसरों पर भक्तिमय आयोजन।',
      en: 'Devotional gatherings on religious occasions in keeping with local tradition.'
    },
    image: festivalCardImages.religiousFairs,
    symbol: festivalCardSymbols['religious-fairs']
  }
];