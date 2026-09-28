import type { Lang } from './translations';

export const donationUpi = {
  name: 'Mr Ankit Mishra',
  number: '+91 7007579495',
  qrImage: 'assets/images/donation-upi-qr.png',
  whatsappUrl: 'https://wa.me/917007579495'
};

export interface DonationCopy {
  eyebrow: string;
  title: string;
  heading: string;
  lead: string;
  upiHeading: string;
  upiLead: string;
  upiNameLabel: string;
  upiNumberLabel: string;
  qrHeading: string;
  beforeHeading: string;
  verifyNotice: string;
  afterHeading: string;
  afterStep1Before: string;
  afterStep1After: string;
  afterStep2: string;
  contactNote: string;
  sevaHeading: string;
  upkeepTitle: string;
  upkeepBody: string;
  gratitudeHeading: string;
  gratitudeBody: string;
  blessing: string;
  mantra: string;
}

export const donationCopy: Record<Lang, DonationCopy> = {
  hi: {
    eyebrow: 'सेवा • सहयोग',
    title: 'दान',
    heading: 'मंदिर सेवा में सहयोग',
    lead: 'जो भक्त श्री कपालेश्वर महादेव मंदिर की देखभाल, रख-रखाव, स्वच्छता और व्यवस्था में सहयोग करना चाहते हैं, वे नीचे दिए गए UPI विवरण से दान कर सकते हैं।',
    upiHeading: 'UPI दान',
    upiLead: 'नीचे दिए गए UPI मोबाइल नंबर से आप दान कर सकते हैं।',
    upiNameLabel: 'नाम',
    upiNumberLabel: 'फोन',
    qrHeading: 'क्यूआर कोड',
    beforeHeading: 'दान करने से पहले',
    verifyNotice: 'UPI भुगतान पूरा करने से पहले प्राप्तकर्ता का नाम Mr Ankit Mishra अवश्य जाँच लें।',
    afterHeading: 'दान करने के बाद',
    afterStep1Before: 'भुगतान का स्क्रीनशॉट लेकर ',
    afterStep1After: ' पर व्हाट्सएप करें, और अपना नाम, पता तथा ईमेल भी भेजें।',
    afterStep2: 'आपको दान की रसीद आपके द्वारा दिए गए ईमेल पते पर प्राप्त होगी।',
    contactNote: 'दान से संबंधित किसी भी प्रश्न के लिए कृपया मंदिर प्रबंधन से संपर्क करें।',
    sevaHeading: 'सेवा एवं सहयोग',
    upkeepTitle: 'मंदिर व्यवस्था',
    upkeepBody: 'आपका सहयोग मंदिर की दैनिक व्यवस्था, स्वच्छता, रख-रखाव और अन्य गतिविधियों में सहायक हो सकता है।',
    gratitudeHeading: 'कृतज्ञता सहित',
    gratitudeBody: 'छोटा हो या बड़ा, प्रत्येक सहयोग कृतज्ञता और श्रद्धा से स्वीकार किया जाता है। इस पवित्र मंदिर की सेवा में सहयोग के लिए धन्यवाद।',
    blessing: 'आपकी सेवा श्री कपालेश्वर महादेव के आशीर्वाद से सफल हो।',
    mantra: 'ॐ नमः शिवाय • हर हर महादेव'
  },
  en: {
    eyebrow: 'Seva • Support',
    title: 'Donation',
    heading: 'Support Temple Seva',
    lead: 'Devotees who wish to contribute towards the care, upkeep, cleanliness, and arrangements of Shri Kapaleshwar Mahadev Temple may use the UPI details provided below.',
    upiHeading: 'UPI Donation',
    upiLead: 'You can make a donation using the UPI-enabled mobile number below.',
    upiNameLabel: 'Name',
    upiNumberLabel: 'Phone',
    qrHeading: 'QR Code',
    beforeHeading: 'Before Making a Donation',
    verifyNotice: 'Please verify the recipient name Mr Ankit Mishra before completing your UPI payment.',
    afterHeading: 'After Making a Donation',
    afterStep1Before: 'Take a screenshot and WhatsApp it to ',
    afterStep1After: ' with your Name, Address and Email.',
    afterStep2: 'You will receive the donation receipt at the email address provided.',
    contactNote: 'For any questions regarding donations, please contact the temple management.',
    sevaHeading: 'Seva & Support',
    upkeepTitle: 'Temple Upkeep',
    upkeepBody: "Your contribution can help support the temple's day-to-day arrangements, cleanliness, maintenance, and other activities.",
    gratitudeHeading: 'With Gratitude',
    gratitudeBody: 'Every contribution, big or small, is received with gratitude and devotion. Thank you for supporting the care of this sacred temple.',
    blessing: 'May your seva be blessed by Shri Kapaleshwar Mahadev.',
    mantra: 'ॐ नमः शिवाय • हर हर महादेव'
  }
};
