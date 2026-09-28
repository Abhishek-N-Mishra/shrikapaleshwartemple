import type { LocalizedText } from './temple-data';
import type { Lang } from './translations';
import { contactDetails } from './contact-content';
import { darshanCopy } from './darshan-content';
import { donationUpi } from './donation-content';

export interface HelperTopic {
  id: string;
  question: LocalizedText;
  answer: LocalizedText[];
  link: string;
  linkFragment?: string;
  linkLabel: LocalizedText;
}

export interface HelperCopy {
  botName: string;
  botStatus: string;
  hint: string;
  greeting: string[];
  prompt: string;
  aria: string;
  openLabel: string;
  closeLabel: string;
}

export const helperCopy: Record<Lang, HelperCopy> = {
  hi: {
    botName: 'नंदी से पूछें',
    botStatus: 'आधिकारिक जानकारी',
    hint: 'नंदी से पूछें',
    greeting: [
      'नमस्कार। श्री कपालेश्वर महादेव मंदिर में आपका स्वागत है।',
      'दर्शन, मार्ग, दान या पर्व की जानकारी के लिए नीचे से एक प्रश्न चुनें।'
    ],
    prompt: 'एक प्रश्न चुनें',
    aria: 'मंदिर सहायता',
    openLabel: 'सहायता खोलें',
    closeLabel: 'सहायता बंद करें'
  },
  en: {
    botName: 'Ask Nandi',
    botStatus: 'Official information',
    hint: 'Ask Nandi',
    greeting: [
      'Namaste. Welcome to Shri Kapaleshwar Mahadev Temple.',
      'Choose a question below for darshan, directions, donation, or festivals.'
    ],
    prompt: 'Choose a question',
    aria: 'Temple help',
    openLabel: 'Open help',
    closeLabel: 'Close help'
  }
};

const dHi = darshanCopy.hi;
const dEn = darshanCopy.en;

export const helperTopics: HelperTopic[] = [
  {
    id: 'about',
    question: {
      hi: 'मंदिर कहाँ है?',
      en: 'Where is the temple?'
    },
    answer: [
      {
        hi: 'श्री कपालेश्वर महादेव मंदिर डेरापुर, कानपुर देहात, उत्तर प्रदेश में स्थित है।',
        en: 'Shri Kapaleshwar Mahadev Temple is in Derapur, Kanpur Dehat, Uttar Pradesh.'
      },
      {
        hi: 'यह मंदिर सेंगुर नदी के निकट एक ऊँचे टीले पर स्थित है और भगवान शिव को समर्पित है।',
        en: 'The temple stands on a raised mound near the Sengur River and is dedicated to Lord Shiva.'
      },
      {
        hi: 'निकटतम प्रमुख रेलवे स्टेशन रूरा है (लगभग 13 किमी)। प्रमुख अवसरों में महाशिवरात्रि और सावन शामिल हैं।',
        en: 'Rura Railway Station is the nearest major rail stop (about 13 km away). Major occasions include Maha Shivaratri and Shravan.'
      }
    ],
    link: '/about',
    linkLabel: { hi: 'मंदिर के बारे में पढ़ें →', en: 'Read about the temple →' }
  },
  {
    id: 'history',
    question: {
      hi: 'मंदिर का इतिहास क्या है?',
      en: 'What is the history of the temple?'
    },
    answer: [
      {
        hi: 'स्थानीय परंपरा के अनुसार, श्री कपालेश्वर महादेव मंदिर की कथा 1894 से जुड़ी है, जब पंडित कनोजी लाल मिश्र ने आध्यात्मिक प्रेरणा के बाद मंदिर निर्माण आरंभ किया।',
        en: 'According to local tradition, the story of Shri Kapaleshwar Mahadev Temple goes back to 1894, when Pandit Kanoji Lal Mishra began the construction of the temple following a spiritual inspiration.'
      },
      {
        hi: 'इस कार्य को बाद में उनके पुत्र पंडित शिव कुमार मिश्र ने पूर्ण किया। आज यह मंदिर आस्था, भक्ति और परंपरा की जीवंत विरासत है।',
        en: 'The work was later completed by his son, Pandit Shiv Kumar Mishra. Today, the temple stands as a living heritage of faith, devotion and tradition.'
      }
    ],
    link: '/history',
    linkLabel: { hi: 'पूरा इतिहास पढ़ें →', en: 'Read the full history →' }
  },
  {
    id: 'reach',
    question: {
      hi: 'मंदिर तक कैसे पहुँचें?',
      en: 'How do I reach the temple?'
    },
    answer: [
      {
        hi: 'निकटतम प्रमुख रेलवे स्टेशन रूरा रेलवे स्टेशन है, जो मंदिर से लगभग 13 किलोमीटर दूर है। रूरा से मंदिर तक स्थानीय टैक्सी एवं अन्य परिवहन उपलब्ध रहते हैं।',
        en: 'The nearest major railway station is Rura Railway Station, about 13 kilometres from the temple. Local taxis and other transport are available from Rura to the temple.'
      },
      {
        hi: 'सड़क मार्ग से मंदिर डेरापुर–रूरा मार्ग से जुड़ा है। मुंगीसापुर से भी पहुँचा जा सकता है (लगभग 10 किमी)।',
        en: 'By road, the temple is on the Derapur–Rura route. It can also be reached from Mungisapur, about 10 kilometres away.'
      }
    ],
    link: '/contact',
    linkFragment: 'how-to-reach',
    linkLabel: { hi: 'संपर्क एवं मार्ग →', en: 'Contact & Directions →' }
  },
  {
    id: 'contact',
    question: {
      hi: 'संपर्क कैसे करें?',
      en: 'How can I contact the temple?'
    },
    answer: [
      {
        hi: `संपर्क: ${contactDetails.name}। फोन: ${contactDetails.phone}। ईमेल: ${contactDetails.email}।`,
        en: `Contact: ${contactDetails.name}. Phone: ${contactDetails.phone}. Email: ${contactDetails.email}.`
      },
      {
        hi: 'संपर्क का समय: प्रातः 9:00 बजे से सायं 6:00 बजे तक। दर्शन, पूजा, विशेष आयोजन या अन्य जानकारी के लिए कृपया इसी नंबर पर संपर्क करें।',
        en: 'Contact hours: 9:00 a.m. to 6:00 p.m. For darshan, puja, special gatherings, or other information, please call this number.'
      }
    ],
    link: '/contact',
    linkLabel: { hi: 'संपर्क पृष्ठ देखें →', en: 'View the contact page →' }
  },
  {
    id: 'darshan',
    question: {
      hi: 'दर्शन और आरती का समय?',
      en: 'What are the darshan and aarti timings?'
    },
    answer: [
      {
        hi: dHi.timeBody,
        en: dEn.timeBody
      },
      {
        hi: dHi.timeSlots[0],
        en: dEn.timeSlots[0]
      },
      {
        hi: dHi.timeSlots[1],
        en: dEn.timeSlots[1]
      },
      {
        hi: dHi.aartiSlots[0],
        en: dEn.aartiSlots[0]
      },
      {
        hi: dHi.aartiSlots[1],
        en: dEn.aartiSlots[1]
      },
      {
        hi: `${dHi.specialExtra} नवीनतम जानकारी के लिए ${contactDetails.phone} पर संपर्क करें (संपर्क समय 9:00 AM – 6:00 PM)।`,
        en: `${dEn.specialExtra} For the latest details, call ${contactDetails.phone} (contact hours 9:00 a.m.–6:00 p.m.).`
      }
    ],
    link: '/darshan',
    linkLabel: { hi: 'दर्शन पृष्ठ देखें →', en: 'View the darshan page →' }
  },
  {
    id: 'donation',
    question: {
      hi: 'दान कैसे करें?',
      en: 'How can I make a donation?'
    },
    answer: [
      {
        hi: 'जो भक्त मंदिर की देखभाल, रख-रखाव और व्यवस्था में सहयोग करना चाहते हैं, वे UPI से दान कर सकते हैं। दान पृष्ठ पर UPI नंबर और QR कोड दिया गया है।',
        en: 'Devotees who wish to support the temple’s care, upkeep, and arrangements may donate by UPI. The donation page shows the UPI number and QR code.'
      },
      {
        hi: `UPI — नाम: ${donationUpi.name}। नंबर: ${donationUpi.number}।`,
        en: `UPI — Name: ${donationUpi.name}. Number: ${donationUpi.number}.`
      },
      {
        hi: 'UPI भुगतान पूरा करने से पहले प्राप्तकर्ता का नाम Mr Ankit Mishra अवश्य जाँच लें।',
        en: 'Please verify the recipient name Mr Ankit Mishra before completing your UPI payment.'
      }
    ],
    link: '/donation',
    linkLabel: { hi: 'दान पृष्ठ देखें →', en: 'View the donation page →' }
  },
  {
    id: 'festivals',
    question: {
      hi: 'प्रमुख पर्व कौन से हैं?',
      en: 'What are the main festivals?'
    },
    answer: [
      {
        hi: 'मंदिर में प्रमुख धार्मिक अवसरों में महाशिवरात्रि, श्रावण (सावन), श्रावण सोमवार और धार्मिक मेले शामिल हैं।',
        en: 'Major religious occasions at the temple include Maha Shivaratri, Shravan (Sawan), Shravan Mondays, and religious fairs.'
      },
      {
        hi: 'इन अवसरों पर भक्ति और दर्शन का विशेष वातावरण रहता है। भीड़ या विशेष व्यवस्था हो सकती है — मंदिर आने से पहले समय की जानकारी ले लें।',
        en: 'These occasions bring special devotion and gatherings at the temple. Crowds or special arrangements may apply — please confirm timings before you visit.'
      },
      {
        hi: `वर्तमान व्यवस्था की जानकारी के लिए ${contactDetails.phone} पर संपर्क करें (9:00 AM – 6:00 PM)।`,
        en: `For current arrangements, call ${contactDetails.phone} (9:00 a.m.–6:00 p.m.).`
      }
    ],
    link: '/festivals',
    linkLabel: { hi: 'पर्व पृष्ठ देखें →', en: 'View the festivals page →' }
  }
];
