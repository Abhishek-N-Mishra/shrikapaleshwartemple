import { templeInfo } from './temple-data';
import type { Lang } from './translations';

export const contactDetails = {
  name: 'Mr Ankit Mishra',
  phone: '+91 7007579495',
  phoneHref: 'tel:+917007579495',
  email: 'contactkapaleshwarcommittee@gmail.com',
  emailHref: 'mailto:contactkapaleshwarcommittee@gmail.com',
  mapUrl: templeInfo.mapUrl,
  mapEmbedUrl: templeInfo.mapEmbedUrl
};

export interface ContactCopy {
  eyebrow: string;
  title: string;
  templeName: string;
  subtitle: string;
  intro: string[];
  addressHeading: string;
  addressName: string;
  addressLine1: string;
  addressLine2: string;
  addressNote: string;
  reachHeading: string;
  phoneLabel: string;
  emailLabel: string;
  hoursLabel: string;
  hours: string;
  reachNote: string;
  directionsHeading: string;
  railHeading: string;
  railBody: string[];
  roadHeading: string;
  roadBody: string[];
  mapHeading: string;
  mapBody: string;
  mapButton: string;
  formHeading: string;
  formLead: string;
  nameLabel: string;
  namePlaceholder: string;
  mobileLabel: string;
  mobilePlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  formHint: string;
  formGreeting: string;
  formThanks: string;
  closingTitle: string;
  mantra: string;
  welcome: string;
}

export const contactCopy: Record<Lang, ContactCopy> = {
  hi: {
    eyebrow: 'संपर्क करें',
    title: 'संपर्क करें',
    templeName: 'श्री कपालेश्वर महादेव मंदिर',
    subtitle: 'आपका स्वागत है',
    intro: [
      'श्री कपालेश्वर महादेव मंदिर से संबंधित किसी भी जानकारी, दर्शन एवं पूजा, धार्मिक आयोजन, मेले अथवा मंदिर की अन्य व्यवस्थाओं के संबंध में आप हमसे संपर्क कर सकते हैं।',
      'हम श्रद्धालुओं और आगंतुकों की सहायता के लिए सदैव तत्पर हैं।'
    ],
    addressHeading: 'मंदिर का पता',
    addressName: 'श्री कपालेश्वर महादेव मंदिर',
    addressLine1: 'डेरापुर, कानपुर देहात',
    addressLine2: 'उत्तर प्रदेश, भारत',
    addressNote: 'सेंगुर नदी के किनारे, सुरम्य वन क्षेत्र में स्थित यह पवित्र मंदिर लगभग 100 फीट ऊँचे प्राकृतिक टीले पर बना हुआ है।',
    reachHeading: 'हमसे संपर्क करें',
    phoneLabel: 'फोन',
    emailLabel: 'ईमेल',
    hoursLabel: 'संपर्क का समय',
    hours: '09:00 AM – 06:00 PM',
    reachNote: 'मंदिर में दर्शन एवं पूजा के समय, विशेष धार्मिक आयोजनों तथा अन्य आवश्यक जानकारी के लिए कृपया उपरोक्त नंबर पर संपर्क करें।',
    directionsHeading: 'मंदिर तक कैसे पहुँचें',
    railHeading: 'रेल मार्ग',
    railBody: [
      'मंदिर का निकटतम प्रमुख रेलवे स्टेशन रूरा रेलवे स्टेशन है, जो मंदिर से लगभग 13 किलोमीटर दूर है।',
      'रूरा रेलवे स्टेशन से मंदिर तक स्थानीय टैक्सी एवं अन्य परिवहन साधन उपलब्ध रहते हैं।'
    ],
    roadHeading: 'सड़क मार्ग',
    roadBody: [
      'मंदिर डेरापुर–रूरा मार्ग से जुड़ा हुआ है।',
      'मुंगीसापुर से भी स्थानीय टैक्सी अथवा अन्य साधनों द्वारा मंदिर तक पहुँचा जा सकता है। मुंगीसापुर से मंदिर की दूरी लगभग 10 किलोमीटर है।'
    ],
    mapHeading: 'मानचित्र',
    mapBody: 'मंदिर तक पहुँचने के लिए दिए गए मानचित्र का उपयोग करें।',
    mapButton: 'Google Maps पर मंदिर देखें →',
    formHeading: 'अपना संदेश भेजें',
    formLead: 'यदि आपके पास मंदिर से संबंधित कोई प्रश्न, सुझाव या जानकारी है, तो नीचे दिए गए संपर्क फ़ॉर्म के माध्यम से हमें संदेश भेज सकते हैं।',
    nameLabel: 'नाम',
    namePlaceholder: 'अपना नाम दर्ज करें',
    mobileLabel: 'मोबाइल नंबर',
    mobilePlaceholder: 'अपना मोबाइल नंबर दर्ज करें',
    subjectLabel: 'विषय',
    subjectPlaceholder: 'विषय दर्ज करें',
    messageLabel: 'संदेश',
    messagePlaceholder: 'अपना संदेश लिखें',
    submit: 'संदेश भेजें',
    formHint: 'संदेश आपके ईमेल ऐप के माध्यम से भेजा जाएगा।',
    formGreeting: 'नमस्कार कपालेश्वर टीम,',
    formThanks: 'धन्यवाद,',
    closingTitle: 'हर हर महादेव',
    mantra: 'ॐ नमः शिवाय',
    welcome: 'आपका कपालेश्वर महादेव मंदिर में हार्दिक स्वागत है।'
  },
  en: {
    eyebrow: 'Get in Touch',
    title: 'Contact Us',
    templeName: 'Shri Kapaleshwar Mahadev Temple',
    subtitle: 'You are welcome',
    intro: [
      'You may contact us for any information about Shri Kapaleshwar Mahadev Temple — darshan and puja, religious gatherings, the fair, or other arrangements of the temple.',
      'We are always ready to help devotees and visitors.'
    ],
    addressHeading: 'Temple address',
    addressName: 'Shri Kapaleshwar Mahadev Temple',
    addressLine1: 'Derapur, Kanpur Dehat',
    addressLine2: 'Uttar Pradesh, India',
    addressNote: 'This sacred temple stands on a natural mound about 100 feet high, in scenic woodland on the bank of the Sengur river.',
    reachHeading: 'Contact us',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Contact hours',
    hours: '09:00 AM – 06:00 PM',
    reachNote: 'For darshan and puja timings, special religious gatherings, and other needed information, please call the number above.',
    directionsHeading: 'How to reach the temple',
    railHeading: 'By rail',
    railBody: [
      'The nearest major railway station is Rura Railway Station, about 13 kilometres from the temple.',
      'Local taxis and other transport are available from Rura Railway Station to the temple.'
    ],
    roadHeading: 'By road',
    roadBody: [
      'The temple is connected by the Derapur–Rura road.',
      'The temple can also be reached from Mungisapur by local taxi or other means. Mungisapur is about 10 kilometres from the temple.'
    ],
    mapHeading: 'Map',
    mapBody: 'Use the map below to reach the temple.',
    mapButton: 'View the temple on Google Maps →',
    formHeading: 'Send a message',
    formLead: 'If you have a question, suggestion, or information about the temple, you may send us a message through the form below.',
    nameLabel: 'Name',
    namePlaceholder: 'Enter your name',
    mobileLabel: 'Mobile number',
    mobilePlaceholder: 'Enter your mobile number',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Enter the subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message',
    submit: 'Send message',
    formHint: 'The message will be sent through your email app.',
    formGreeting: 'Hi Kapaleshwar Team,',
    formThanks: 'Thanks,',
    closingTitle: 'Har Har Mahadev',
    mantra: 'ॐ नमः शिवाय',
    welcome: 'A warm welcome to you at Kapaleshwar Mahadev Temple.'
  }
};
