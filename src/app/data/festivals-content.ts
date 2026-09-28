import type { Lang } from './translations';

export interface FestivalPageCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  symbol: string;
}

export interface FestivalsPageCopy {
  eyebrow: string;
  title: string;
  intro: string;
  sectionTitle: string;
  sectionDescription: string;
  cards: FestivalPageCard[];
  specialTitle: string;
  specialBody: string;
  specialContactLink: string;
  faithTitle: string;
  faithBody: string;
}

export const festivalsPageCopy: Record<Lang, FestivalsPageCopy> = {
  hi: {
    eyebrow: 'पर्व एवं भक्ति',
    title: 'पर्व एवं उत्सव',
    intro:
      'श्री कपालेश्वर महादेव मंदिर में प्रमुख हिंदू धार्मिक पर्वों के अवसर पर भक्ति एवं श्रद्धा का विशेष वातावरण रहता है। आसपास के क्षेत्रों से श्रद्धालु भगवान शिव के दर्शन, पूजा-अर्चना एवं आशीर्वाद प्राप्त करने के लिए मंदिर में आते हैं।',
    sectionTitle: 'प्रमुख धार्मिक अवसर',
    sectionDescription:
      'मंदिर में वर्षभर श्रद्धालु दर्शन एवं पूजा के लिए आते हैं। प्रमुख धार्मिक पर्वों एवं विशेष अवसरों पर मंदिर में श्रद्धा और भक्ति का विशेष वातावरण रहता है।',
    cards: [
      {
        id: 'mahashivratri',
        title: 'महाशिवरात्रि',
        category: 'पर्व',
        description:
          'महाशिवरात्रि भगवान शिव की आराधना का प्रमुख पर्व है। इस पावन अवसर पर श्रद्धालु श्री कपालेश्वर महादेव मंदिर में दर्शन, पूजा एवं अभिषेक के लिए आते हैं और भगवान शिव का आशीर्वाद प्राप्त करते हैं। इस अवसर पर मंदिर में विशेष भक्तिमय वातावरण रहता है।',
        image: 'assets/images/festival-mahashivratri.svg',
        symbol: '🔱'
      },
      {
        id: 'shravan',
        title: 'श्रावण (सावन)',
        category: 'पवित्र मास',
        description:
          'श्रावण, जिसे सावन भी कहा जाता है, भगवान शिव की आराधना के लिए विशेष महत्व रखता है। इस पवित्र महीने में श्रद्धालु श्री कपालेश्वर महादेव के दर्शन एवं पूजा-अर्चना के लिए मंदिर में आते हैं और भगवान शिव का आशीर्वाद प्राप्त करते हैं।',
        image: 'assets/images/festival-sawan.svg',
        symbol: 'ॐ'
      },
      {
        id: 'shravan-mondays',
        title: 'श्रावण सोमवार',
        category: 'विशेष अवसर',
        description:
          'पवित्र श्रावण मास में सोमवार का विशेष धार्मिक महत्व माना जाता है। श्रावण के सोमवार को मंदिर में बड़ी संख्या में श्रद्धालु आते हैं और मेले का आयोजन होता है।',
        image: 'assets/images/aarti.svg',
        symbol: '◷'
      },
      {
        id: 'religious-fairs',
        title: 'धार्मिक मेले',
        category: 'मंदिर उत्सव',
        description:
          'महाशिवरात्रि एवं श्रावण के सोमवार जैसे प्रमुख धार्मिक अवसरों पर मंदिर परिसर में मेले का आयोजन होता है। इन अवसरों पर आसपास के क्षेत्रों से श्रद्धालु एवं आगंतुक बड़ी संख्या में मंदिर पहुंचते हैं और भक्तिमय वातावरण का अनुभव करते हैं।',
        image: 'assets/images/temple.svg',
        symbol: '🔱'
      }
    ],
    specialTitle: 'विशेष अवसरों पर मंदिर में दर्शन',
    specialBody:
      'महाशिवरात्रि एवं श्रावण के सोमवार जैसे अवसरों पर मंदिर में श्रद्धालुओं की संख्या अधिक हो सकती है और विशेष व्यवस्थाएं की जा सकती हैं। इन अवसरों पर मंदिर आने से पहले दर्शन के समय एवं अन्य व्यवस्थाओं की नवीनतम जानकारी के लिए मंदिर प्रबंधन से संपर्क करने की सलाह दी जाती है।',
    specialContactLink: 'संपर्क करें →',
    faithTitle: 'श्रद्धा और भक्ति का पर्व',
    faithBody:
      'श्री कपालेश्वर महादेव मंदिर के पर्व श्रद्धालुओं के लिए प्रार्थना, पूजा और भक्ति के साथ एकत्र होने का अवसर होते हैं। मंदिर का शांत प्राकृतिक परिवेश और भक्तों की आस्था इन अवसरों को विशेष आध्यात्मिक अनुभव प्रदान करती है।',
  },
  en: {
    eyebrow: 'Celebrations & Devotion',
    title: 'Festivals',
    intro:
      'Shri Kapaleshwar Mahadev Temple comes alive with devotion and spiritual energy during important Hindu religious occasions. Devotees from nearby areas visit the temple to offer prayers, perform worship, and seek the blessings of Lord Shiva.',
    sectionTitle: 'Major Religious Occasions',
    sectionDescription:
      'The temple welcomes devotees throughout the year, with special gatherings and devotional activities during important religious occasions.',
    cards: [
      {
        id: 'mahashivratri',
        title: 'Maha Shivaratri',
        category: 'Festival',
        description:
          'Maha Shivaratri is one of the most important occasions for devotees of Lord Shiva. Devotees visit Shri Kapaleshwar Mahadev Temple to offer prayers, perform worship and abhishek, and seek the blessings of Lord Shiva. A special devotional atmosphere can be experienced at the temple during this sacred occasion.',
        image: 'assets/images/festival-mahashivratri.svg',
        symbol: '🔱'
      },
      {
        id: 'shravan',
        title: 'Shravan (Sawan)',
        category: 'Sacred Month',
        description:
          'Shravan, also known as Sawan, is considered an important month for the worship of Lord Shiva. Devotees visit the temple during this sacred month to offer prayers and seek the blessings of Shri Kapaleshwar Mahadev.',
        image: 'assets/images/festival-sawan.svg',
        symbol: 'ॐ'
      },
      {
        id: 'shravan-mondays',
        title: 'Shravan Mondays',
        category: 'Special Occasions',
        description:
          'Mondays during the holy month of Shravan hold special significance for devotees of Lord Shiva. The temple attracts devotees in large numbers, and fairs are held on Shravan Mondays.',
        image: 'assets/images/aarti.svg',
        symbol: '◷'
      },
      {
        id: 'religious-fairs',
        title: 'Religious Fairs',
        category: 'Temple Celebrations',
        description:
          'Religious fairs are held at the temple during important occasions, including Maha Shivaratri and Shravan Mondays. These occasions bring together devotees and visitors from nearby areas in an atmosphere of faith and devotion.',
        image: 'assets/images/temple.svg',
        symbol: '🔱'
      }
    ],
    specialTitle: 'Special Days at the Temple',
    specialBody:
      'During Maha Shivaratri and Shravan Mondays, the temple may experience increased footfall and special arrangements. Devotees planning a visit on these occasions are advised to contact the temple management for the latest information regarding timings and arrangements.',
    specialContactLink: 'Contact Us →',
    faithTitle: 'A Time of Faith & Devotion',
    faithBody:
      'Festivals at Shri Kapaleshwar Mahadev Temple are an opportunity for devotees to come together in prayer and devotion. The peaceful surroundings of the temple and the presence of fellow devotees create a spiritually meaningful experience.',
  }
};
