export type Lang = 'hi' | 'en';

export interface AppCopy {
  brandName: string;
  location: string;
  locationShort: string;
  mantra: string;
  mahadevAlt: string;
  navAria: string;
  menuOpen: string;
  menuClose: string;
  langGroup: string;
  langHindi: string;
  langEnglish: string;
  navHome: string;
  navAbout: string;
  navTemple: string;
  navHistory: string;
  navDarshan: string;
  navFestivals: string;
  navGallery: string;
  navDonation: string;
  navContact: string;
  tickerLabel: string;
  tickerAria: string;
  tickerMessage: string;
  heroAria: string;
  heroLine1: string;
  heroLine2: string;
  heroTempleName: string;
  heroTagline: string;
  heroAbout: string;
  heroDirections: string;
  introEyebrow: string;
  introTitle: string;
  introSubtitle: string;
  introBody: string;
  introBody2: string;
  introNote: string;
  introLink: string;
  introImageAlt: string;
  historyTitle: string;
  historyBody: string;
  historyBody2: string;
  historyBody3: string;
  historyLink: string;
  historyImageAlt: string;
  festivalsEyebrow: string;
  festivalsTitle: string;
  festivalsLink: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryLink: string;
  donationHomeEyebrow: string;
  donationHomeTitle: string;
  donationHomeBody: string;
  donationHomeButton: string;
  donationHomeImageAlt: string;
  mapTitle: string;
  mapHomeBody: string;
  mapButton: string;
  mapNote: string;
  mapContactLink: string;
  mapImageAlt: string;
  footerNavAria: string;
  footerCopyright: string;
  footerNote: string;
  aboutEyebrow: string;
  aboutTitle: string;
  historyPageEyebrow: string;
  historyPageTitle: string;
  darshanEyebrow: string;
  darshanTitle: string;
  darshanInfoTitle: string;
  darshanInfoBody: string;
  darshanTimeTitle: string;
  darshanTimeBody: string;
  darshanPujaTitle: string;
  darshanPujaBody: string;
  darshanSpecialTitle: string;
  darshanSpecialBody: string;
  darshanNotice: string;
  festivalsPageEyebrow: string;
  festivalsPageTitle: string;
  festivalsPageBody: string;
  galleryPageEyebrow: string;
  galleryPageTitle: string;
  galleryPageHeading: string;
  galleryPageBody: string;
  donationEyebrow: string;
  donationTitle: string;
  donationHeading: string;
  donationLead: string;
  donationBody: string;
  donationPoint1Title: string;
  donationPoint1Body: string;
  donationPoint2Title: string;
  donationPoint2Body: string;
  donationNoticeTitle: string;
  donationNoticeBody: string;
  contactEyebrow: string;
  contactTitle: string;
  contactLead: string;
  contactAddressRegion: string;
  contactNotice: string;
  contactMapAlt: string;
}

export const copies: Record<Lang, AppCopy> = {
  hi: {
    brandName: 'श्री कपालेश्वर महादेव मंदिर',
    location: 'डेरापुर, कानपुर देहात, उत्तर प्रदेश',
    locationShort: 'डेरापुर, कानपुर देहात',
    mantra: 'ॐ नमः शिवाय',
    mahadevAlt: 'कपालेश्वर महादेव',
    navAria: 'मुख्य नेविगेशन',
    menuOpen: 'मेनू खोलें',
    menuClose: 'मेनू बंद करें',
    langGroup: 'भाषा चुनें',
    langHindi: 'हिन्दी',
    langEnglish: 'EN',
    navHome: 'घर',
    navAbout: 'के बारे में',
    navTemple: 'मंदिर',
    navHistory: 'इतिहास',
    navDarshan: 'दर्शन एवं पूजा',
    navFestivals: 'पर्व एवं आयोजन',
    navGallery: 'गैलरी',
    navDonation: 'दान',
    navContact: 'संपर्क',
    tickerLabel: 'स्वागत',
    tickerAria: 'स्वागत संदेश',
    tickerMessage:
      'श्री कपालेश्वर महादेव मंदिर प्रबंध समिति, डेरापुर, सभी भक्तों का हार्दिक स्वागत करती है। मंदिर के दिव्य वातावरण का अनुभव करें तथा दैनिक पूजा-अनुष्ठान और विशेष उत्सवों में सम्मिलित हों।',
    heroAria: 'श्री कपालेश्वर महादेव मंदिर',
    heroLine1: 'श्री कपालेश्वर',
    heroLine2: 'महादेव मंदिर',
    heroTempleName: 'श्री कपालेश्वर महादेव',
    heroTagline: 'आस्था • श्रद्धा • सनातन परंपरा',
    heroAbout: 'मंदिर के बारे में',
    heroDirections: 'दर्शन एवं पूजा',
    introEyebrow: 'आस्था • प्रकृति • विरासत',
    introTitle: 'कपालेश्वर महादेव मंदिर',
    introSubtitle: 'आस्था, प्रकृति और विरासत का पवित्र संगम',
    introBody:
      'श्री कपालेश्वर महादेव मंदिर डेरापुर, कानपुर देहात में भगवान शिव की आराधना और स्थानीय धार्मिक परंपराओं का एक प्रमुख केंद्र है।',
    introBody2:
      'सेंगुर नदी के निकट प्राकृतिक परिवेश में स्थित यह पवित्र धाम श्रद्धा, शांति और सांस्कृतिक विरासत को एक साथ प्रस्तुत करता है।',
    introNote: 'ऐतिहासिक एवं व्यवस्थागत विवरणों को प्रकाशित करने से पहले मंदिर प्रबंधन से सत्यापित किया जाएगा।',
    introLink: 'पूरा परिचय पढ़ें →',
    introImageAlt: 'श्री कपालेश्वर महादेव मंदिर, डेरापुर',
    historyTitle: '1894 में जड़ें जमी विरासत',
    historyBody:
      'स्थानीय परंपरा के अनुसार, श्री कपालेश्वर महादेव मंदिर की कथा 1894 से जुड़ी है, जब पंडित कनोजी लाल मिश्र ने आध्यात्मिक प्रेरणा के बाद मंदिर निर्माण आरंभ किया। इस कार्य को बाद में उनके पुत्र पंडित शिव कुमार मिश्र ने पूर्ण किया।',
    historyBody2: 'आज यह मंदिर आस्था, भक्ति और परंपरा की जीवंत विरासत के रूप में खड़ा है।',
    historyBody3: '',
    historyLink: 'पूरा इतिहास पढ़ें →',
    historyImageAlt: 'कपालेश्वर महादेव मंदिर का प्रतिनिधि दृश्य',
    festivalsEyebrow: 'पर्व • पूजा • आयोजन',
    festivalsTitle: 'प्रमुख धार्मिक अवसर',
    festivalsLink: 'विवरण पढ़ें →',
    galleryEyebrow: 'मंदिर की झलकियां',
    galleryTitle: 'गैलरी',
    galleryLink: 'सभी देखें →',
    donationHomeEyebrow: 'सेवा • सहयोग',
    donationHomeTitle: 'मंदिर सेवा में सहयोग',
    donationHomeBody: 'मंदिर की सेवा, रख-रखाव और व्यवस्था में सहयोग के लिए दान संबंधी जानकारी।',
    donationHomeButton: 'दान संबंधी जानकारी →',
    donationHomeImageAlt: 'मंदिर दानपेटी',
    mapTitle: 'कैसे पहुंचें?',
    mapHomeBody: 'मंदिर तक सुविधापूर्वक पहुँचने के लिए स्थान, निकटतम रेलवे स्टेशन, सड़क मार्ग और दिशा-निर्देश देखें।',
    mapButton: 'Google Maps पर देखें →',
    mapNote: 'Google Maps लिंक सत्यापन के बाद जोड़ा जाएगा।',
    mapContactLink: 'संपर्क एवं मार्ग →',
    mapImageAlt: 'डेरापुर, कानपुर देहात का मानचित्र',
    footerNavAria: 'पाद लेख नेविगेशन',
    footerCopyright: 'श्री कपालेश्वर महादेव मंदिर प्रबंध समिति, डेरापुर, कानपुर देहात। सर्वाधिकार सुरक्षित।',
    footerNote: 'कपालेश्वर टीम द्वारा विकसित एवं संचालित',
    aboutEyebrow: 'आस्था • प्रकृति',
    aboutTitle: 'मंदिर के बारे में',
    historyPageEyebrow: 'परंपरा • संकल्प',
    historyPageTitle: 'मंदिर का इतिहास',
    darshanEyebrow: 'दिव्य दर्शन',
    darshanTitle: 'दर्शन',
    darshanInfoTitle: 'श्रद्धालुओं के लिए जानकारी',
    darshanInfoBody: 'श्री कपालेश्वर महादेव मंदिर के पवित्र वातावरण में भगवान शिव के दर्शन एवं आशीर्वाद प्राप्त करें।',
    darshanTimeTitle: 'दर्शन का समय',
    darshanTimeBody: 'श्रद्धालु मंदिर के नियमित दर्शन समय में भगवान शिव के दर्शन कर सकते हैं। पर्व एवं विशेष धार्मिक अवसरों पर दर्शन के समय में परिवर्तन हो सकता है।',
    darshanPujaTitle: 'पूजा एवं अभिषेक',
    darshanPujaBody: 'श्रद्धालु भगवान शिव की पूजा-अर्चना एवं पारंपरिक धार्मिक अनुष्ठानों में सम्मिलित हो सकते हैं। पूजा, अभिषेक एवं उपलब्ध धार्मिक सेवाओं से संबंधित जानकारी के लिए मंदिर प्रबंधन से संपर्क करें।',
    darshanSpecialTitle: 'आरती',
    darshanSpecialBody: 'आरती भगवान शिव की उपासना का महत्वपूर्ण हिस्सा है। श्रद्धालु भक्तिमय वातावरण में आरती में सम्मिलित होकर श्री कपालेश्वर महादेव का आशीर्वाद प्राप्त कर सकते हैं।',
    darshanNotice: 'दर्शन के नवीनतम समय एवं विशेष व्यवस्थाओं की जानकारी के लिए मंदिर आने से पहले मंदिर प्रबंधन से संपर्क करें।',
    festivalsPageEyebrow: 'पर्व • आयोजन',
    festivalsPageTitle: 'पर्व एवं आयोजन',
    festivalsPageBody: 'आयोजन संबंधी विवरण आधिकारिक पुष्टि के साथ अपडेट किए जाएंगे।',
    galleryPageEyebrow: 'मंदिर की झलकियाँ',
    galleryPageTitle: 'गैलरी',
    galleryPageHeading: 'फोटो एवं वीडियो',
    galleryPageBody: 'मंदिर, दैनिक पूजा-अर्चना, धार्मिक पर्वों, विशेष आयोजनों और कपालेश्वर महादेव मंदिर के प्राकृतिक परिवेश की झलकियाँ देखें।',
    donationEyebrow: 'सेवा • सहयोग',
    donationTitle: 'दान',
    donationHeading: 'मंदिर सेवा में सहयोग',
    donationLead: 'जो भक्त श्री कपालेश्वर महादेव मंदिर की देखभाल, रख-रखाव, स्वच्छता और व्यवस्था में सहयोग करना चाहते हैं, वे नीचे दिए गए UPI विवरण से दान कर सकते हैं।',
    donationBody: 'नीचे दिए गए UPI मोबाइल नंबर से आप दान कर सकते हैं।',
    donationPoint1Title: 'मंदिर व्यवस्था',
    donationPoint1Body: 'आपका सहयोग मंदिर की दैनिक व्यवस्था, स्वच्छता, रख-रखाव और अन्य गतिविधियों में सहायक हो सकता है।',
    donationPoint2Title: 'UPI दान',
    donationPoint2Body: 'नाम: Mr Ankit Mishra। फोन: +91 7007579495।',
    donationNoticeTitle: 'दान करने से पहले',
    donationNoticeBody: 'UPI भुगतान पूरा करने से पहले प्राप्तकर्ता का नाम Mr Ankit Mishra अवश्य जाँच लें।',
    contactEyebrow: 'संपर्क करें',
    contactTitle: 'संपर्क करें',
    contactLead: 'दर्शन, पूजा, आयोजन एवं मार्ग की जानकारी के लिए हमसे संपर्क करें।',
    contactAddressRegion: 'उत्तर प्रदेश, भारत',
    contactNotice: 'संपर्क समय: प्रातः 9:00 बजे से सायं 6:00 बजे तक।',
    contactMapAlt: 'डेरापुर, कानपुर देहात का मानचित्र'
  },
  en: {
    brandName: 'Shri Kapaleshwar Mahadev Temple',
    location: 'Derapur, Kanpur Dehat, Uttar Pradesh',
    locationShort: 'Derapur, Kanpur Dehat',
    mantra: 'ॐ नमः शिवाय',
    mahadevAlt: 'Kapaleshwar Mahadev',
    navAria: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langGroup: 'Choose language',
    langHindi: 'हिन्दी',
    langEnglish: 'EN',
    navHome: 'Home',
    navAbout: 'About',
    navTemple: 'Temple',
    navHistory: 'History',
    navDarshan: 'Darshan',
    navFestivals: 'Festivals',
    navGallery: 'Gallery',
    navDonation: 'Donation',
    navContact: 'Contact',
    tickerLabel: 'Welcome',
    tickerAria: 'Welcome message',
    tickerMessage:
      'Shri Kapaleshwar Mahadev Temple Management Committee, Derapur, warmly welcomes all devotees to experience the divine atmosphere and participate in the temple’s daily rituals and special celebrations.',
    heroAria: 'Shri Kapaleshwar Mahadev Temple',
    heroLine1: 'Shri Kapaleshwar',
    heroLine2: 'Mahadev Temple',
    heroTempleName: 'श्री कपालेश्वर महादेव',
    heroTagline: 'Faith • Devotion • Sanatan Tradition',
    heroAbout: 'About the Temple',
    heroDirections: 'Darshan & Puja',
    introEyebrow: 'Faith • Nature • Heritage',
    introTitle: 'Kapaleshwar Mahadev Temple',
    introSubtitle: 'A sacred confluence of faith, nature, and heritage',
    introBody:
      'Shri Kapaleshwar Mahadev Temple in Derapur, Kanpur Dehat is a principal centre of worship dedicated to Lord Shiva and local religious traditions.',
    introBody2:
      'Set in the natural surroundings near the Sengur River, this sacred place brings together faith, tranquillity, and cultural heritage.',
    introNote: 'Historical and administrative details will be published only after verification with the temple management.',
    introLink: 'Read about the temple →',
    introImageAlt: 'Shri Kapaleshwar Mahadev Temple, Derapur',
    historyTitle: 'A Heritage Rooted in 1894',
    historyBody:
      'According to local tradition, the story of Shri Kapaleshwar Mahadev Temple goes back to 1894, when Pandit Kanoji Lal Mishra began the construction of the temple following a spiritual inspiration. The work was later completed by his son, Pandit Shiv Kumar Mishra.',
    historyBody2: 'Today, the temple stands as a living heritage of faith, devotion and tradition.',
    historyBody3: '',
    historyLink: 'Read the full history →',
    historyImageAlt: 'A representative view of Kapaleshwar Mahadev Temple',
    festivalsEyebrow: 'Festivals • Worship • Events',
    festivalsTitle: 'Major Religious Occasions',
    festivalsLink: 'Read details →',
    galleryEyebrow: 'Glimpses of the Temple',
    galleryTitle: 'Gallery',
    galleryLink: 'View all →',
    donationHomeEyebrow: 'Seva • Support',
    donationHomeTitle: 'Support Temple Seva',
    donationHomeBody: 'Information for devotees who wish to support the temple’s care and arrangements.',
    donationHomeButton: 'Donation details →',
    donationHomeImageAlt: 'Temple donation box',
    mapTitle: 'How to Reach?',
    mapHomeBody: 'Find the location, nearby railway stations, road routes, and directions to reach the temple conveniently.',
    mapButton: 'View on Google Maps →',
    mapNote: 'The Google Maps link will be added after verification.',
    mapContactLink: 'Contact & Directions →',
    mapImageAlt: 'Map of Derapur, Kanpur Dehat',
    footerNavAria: 'Footer navigation',
    footerCopyright:
      'Shri Kapaleshwar Mahadev Temple Management Committee, Derapur, Kanpur Dehat. All rights reserved.',
    footerNote: 'Developed and Managed by Kapaleshwar Team',
    aboutEyebrow: 'Faith • Nature',
    aboutTitle: 'About the Temple',
    historyPageEyebrow: 'Tradition • Resolve',
    historyPageTitle: 'Temple History',
    darshanEyebrow: 'Divine Presence',
    darshanTitle: 'Darshan',
    darshanInfoTitle: 'Information for Devotees',
    darshanInfoBody: 'Experience the spiritual atmosphere of Shri Kapaleshwar Mahadev Temple and seek the blessings of Lord Shiva.',
    darshanTimeTitle: 'Darshan Timings',
    darshanTimeBody: "Devotees may visit the temple for darshan during the temple's regular visiting hours. Special timings may apply during festivals and important religious occasions.",
    darshanPujaTitle: 'Puja & Abhishek',
    darshanPujaBody: 'Devotees can offer prayers and participate in traditional worship dedicated to Lord Shiva. Information regarding puja, abhishek and other available religious services can be obtained from the temple management.',
    darshanSpecialTitle: 'Aarti',
    darshanSpecialBody: 'Aarti is an important part of worship at the temple. Devotees are invited to participate in the devotional atmosphere and seek the blessings of Shri Kapaleshwar Mahadev.',
    darshanNotice: 'For the latest darshan timings and special arrangements, please contact the temple management before your visit.',
    festivalsPageEyebrow: 'Festivals • Events',
    festivalsPageTitle: 'Festivals & Events',
    festivalsPageBody: 'Event details will be updated after official confirmation.',
    galleryPageEyebrow: 'Glimpses of the Temple',
    galleryPageTitle: 'Gallery',
    galleryPageHeading: 'Photos & Videos',
    galleryPageBody: 'Explore moments from the temple, daily worship, festivals, special occasions, and the natural beauty surrounding Kapaleshwar Mahadev Temple.',
    donationEyebrow: 'Seva • Support',
    donationTitle: 'Donation',
    donationHeading: 'Support Temple Seva',
    donationLead: 'Devotees who wish to contribute towards the care, upkeep, cleanliness, and arrangements of Shri Kapaleshwar Mahadev Temple may use the UPI details provided below.',
    donationBody: 'You can make a donation using the UPI-enabled mobile number below.',
    donationPoint1Title: 'Temple Upkeep',
    donationPoint1Body: "Your contribution can help support the temple's day-to-day arrangements, cleanliness, maintenance, and other activities.",
    donationPoint2Title: 'UPI Donation',
    donationPoint2Body: 'Name: Mr Ankit Mishra. Phone: +91 7007579495.',
    donationNoticeTitle: 'Before Making a Donation',
    donationNoticeBody: 'Please verify the recipient name Mr Ankit Mishra before completing your UPI payment.',
    contactEyebrow: 'Get in Touch',
    contactTitle: 'Contact Us',
    contactLead: 'Contact us for darshan, puja, gatherings, and directions.',
    contactAddressRegion: 'Uttar Pradesh, India',
    contactNotice: 'Contact hours: 9:00 a.m. to 6:00 p.m.',
    contactMapAlt: 'Map of Derapur, Kanpur Dehat'
  }
};

export const pageTitles: Record<Lang, Record<string, string>> = {
  hi: {
    home: 'श्री कपालेश्वर महादेव मंदिर | डेरापुर',
    about: 'मंदिर के बारे में | कपालेश्वर महादेव',
    history: 'मंदिर का इतिहास | कपालेश्वर महादेव',
    darshan: 'दर्शन | कपालेश्वर महादेव',
    festivals: 'पर्व एवं उत्सव | श्री कपालेश्वर महादेव मंदिर, डेरापुर',
    gallery: 'गैलरी | कपालेश्वर महादेव',
    donation: 'दान | कपालेश्वर महादेव',
    contact: 'संपर्क करें | कपालेश्वर महादेव'
  },
  en: {
    home: 'Kapaleshwar Mahadev Temple | Derapur',
    about: 'About the Temple | Kapaleshwar Mahadev',
    history: 'Temple History | Kapaleshwar Mahadev',
    darshan: 'Darshan | Kapaleshwar Mahadev',
    festivals: 'Festivals | Shri Kapaleshwar Mahadev Temple, Derapur',
    gallery: 'Gallery | Kapaleshwar Mahadev',
    donation: 'Donation | Kapaleshwar Mahadev',
    contact: 'Contact Us | Kapaleshwar Mahadev'
  }
};

export const metaDescriptions: Record<Lang, string> = {
  hi: 'श्री कपालेश्वर महादेव मंदिर, डेरापुर, कानपुर देहात — मंदिर का इतिहास, दर्शन, पूजा, पर्व, गैलरी, दान और मार्ग की जानकारी।',
  en: 'Shri Kapaleshwar Mahadev Temple, Derapur, Kanpur Dehat — temple history, darshan, worship, festivals, gallery, donation, and directions.'
};
