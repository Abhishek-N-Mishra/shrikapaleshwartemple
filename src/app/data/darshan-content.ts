import type { Lang } from './translations';

export interface DarshanCopy {
  eyebrow: string;
  title: string;
  intro: string;
  infoTitle: string;
  timeTitle: string;
  timeBody: string;
  timeSlots: string[];
  pujaTitle: string;
  pujaBody: string;
  aartiTitle: string;
  aartiBody: string;
  aartiSlots: string[];
  specialTitle: string;
  specialBody: string;
  specialExtra: string;
  visitTitle: string;
  visitIntro: string;
  visitPoints: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  notice: string;
}

export const darshanCopy: Record<Lang, DarshanCopy> = {
  hi: {
    eyebrow: 'दिव्य दर्शन',
    title: 'दर्शन',
    intro:
      'श्री कपालेश्वर महादेव मंदिर के पवित्र वातावरण में भगवान शिव के दर्शन एवं आशीर्वाद प्राप्त करें। श्रद्धालु दर्शन, पूजा एवं प्रार्थना के लिए मंदिर में पधार सकते हैं।',
    infoTitle: 'श्रद्धालुओं के लिए जानकारी',
    timeTitle: 'दर्शन का समय',
    timeBody:
      'श्रद्धालु मंदिर के नियमित दर्शन समय में भगवान शिव के दर्शन कर सकते हैं। पर्व एवं विशेष धार्मिक अवसरों पर दर्शन के समय में परिवर्तन हो सकता है।',
    timeSlots: [
      'प्रातः — 06:00 AM – 12:00 AM',
      'सायं — 04:00 PM – 10:00 PM'
    ],
    pujaTitle: 'पूजा एवं अभिषेक',
    pujaBody:
      'श्रद्धालु भगवान शिव की पूजा-अर्चना एवं पारंपरिक धार्मिक अनुष्ठानों में सम्मिलित हो सकते हैं। पूजा, अभिषेक एवं उपलब्ध धार्मिक सेवाओं से संबंधित जानकारी के लिए मंदिर प्रबंधन से संपर्क करें।',
    aartiTitle: 'आरती',
    aartiBody:
      'आरती भगवान शिव की उपासना का महत्वपूर्ण हिस्सा है। श्रद्धालु भक्तिमय वातावरण में आरती में सम्मिलित होकर श्री कपालेश्वर महादेव का आशीर्वाद प्राप्त कर सकते हैं।',
    aartiSlots: [
      'प्रातः आरती — 08:00 AM – 08:30 AM',
      'सायं आरती — 07:00 PM – 07:30 PM'
    ],
    specialTitle: 'विशेष दर्शन',
    specialBody:
      'श्रावण, महाशिवरात्रि तथा अन्य महत्वपूर्ण धार्मिक अवसरों पर मंदिर में बड़ी संख्या में श्रद्धालु आते हैं। इन अवसरों पर विशेष व्यवस्थाएँ की जा सकती हैं।',
    specialExtra:
      'विशेष अवसरों पर मंदिर आने से पहले दर्शन के समय एवं व्यवस्थाओं की जानकारी अवश्य प्राप्त करें।',
    visitTitle: 'मंदिर आने से पहले',
    visitIntro: 'मंदिर में दर्शन के लिए आते समय निम्न बातों का ध्यान रखें:',
    visitPoints: [
      'मंदिर परिसर की स्वच्छता बनाए रखें और मंदिर की पवित्रता का सम्मान करें।',
      'मंदिर प्रबंधन द्वारा दिए गए निर्देशों का पालन करें।',
      'अधिक भीड़ वाले अवसरों पर स्वयंसेवकों एवं अन्य श्रद्धालुओं के साथ सहयोग करें।',
      'पर्व एवं विशेष आयोजनों के दौरान लागू व्यवस्थाओं एवं दिशानिर्देशों का पालन करें।',
      'मंदिर आने से पहले विशेष दर्शन के समय की जानकारी प्राप्त करें।'
    ],
    ctaTitle: 'अधिक जानकारी के लिए',
    ctaBody:
      'दर्शन, पूजा, अभिषेक, आरती, विशेष अवसरों अथवा मंदिर आने से संबंधित जानकारी के लिए मंदिर प्रबंधन से संपर्क करें।',
    ctaButton: 'संपर्क करें →',
    notice:
      'विशेष दर्शन के समय एवं व्यवस्थाओं की जानकारी के लिए मंदिर आने से पहले मंदिर प्रबंधन से संपर्क करें।'
  },
  en: {
    eyebrow: 'Divine Presence',
    title: 'Darshan',
    intro:
      'Experience the spiritual atmosphere of Shri Kapaleshwar Mahadev Temple and seek the blessings of Lord Shiva. Devotees are welcome to visit the temple for darshan, worship, and prayer.',
    infoTitle: 'Information for Devotees',
    timeTitle: 'Darshan Timings',
    timeBody:
      "Devotees may visit the temple for darshan during the temple's regular visiting hours. Special timings may apply during festivals and important religious occasions.",
    timeSlots: [
      'Morning — 06:00 AM – 12:00 AM',
      'Evening — 04:00 PM – 10:00 PM'
    ],
    pujaTitle: 'Puja & Abhishek',
    pujaBody:
      'Devotees can offer prayers and participate in traditional worship dedicated to Lord Shiva. Information regarding puja, abhishek and other available religious services can be obtained from the temple management.',
    aartiTitle: 'Aarti',
    aartiBody:
      'Aarti is an important part of worship at the temple. Devotees are invited to participate in the devotional atmosphere and seek the blessings of Shri Kapaleshwar Mahadev.',
    aartiSlots: [
      'Morning Aarti — 08:00 AM – 08:30 AM',
      'Evening Aarti — 07:00 PM – 07:30 PM'
    ],
    specialTitle: 'Special Darshan',
    specialBody:
      'During Shravan, Maha Shivaratri and other important religious occasions, the temple welcomes a large number of devotees. Special arrangements may be made during these occasions.',
    specialExtra:
      'Devotees are advised to confirm timings and arrangements before visiting on special days.',
    visitTitle: 'Before Your Visit',
    visitIntro: 'Please keep the following in mind when visiting the temple:',
    visitPoints: [
      'Maintain cleanliness and respect the sanctity of the temple premises.',
      'Follow the instructions provided by the temple management.',
      'During crowded occasions, please cooperate with volunteers and other devotees.',
      'Follow any arrangements or guidelines in place during festivals and special events.',
      'Please confirm special timings before visiting.'
    ],
    ctaTitle: 'Need More Information?',
    ctaBody:
      'For information about darshan, puja, abhishek, aarti, special occasions or visiting arrangements, please contact the temple management.',
    ctaButton: 'Contact Us →',
    notice:
      'For the special darshan timings and arrangements, please contact the temple management before your visit.'
  }
};
