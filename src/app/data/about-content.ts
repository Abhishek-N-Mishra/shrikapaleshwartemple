import type { Lang } from './translations';

export interface AboutSection {
  heading: string;
  paragraphs: string[];
}

export interface AboutCopy {
  eyebrow: string;
  title: string;
  templeName: string;
  subtitle: string;
  intro: string[];
  sections: AboutSection[];
  closingTitle: string;
  closing: string[];
  mantra: string;
  harHar: string;
  readMoreTitle: string;
  readMoreLead: string;
  readMoreButton: string;
}

export const aboutCopy: Record<Lang, AboutCopy> = {
  hi: {
    eyebrow: 'आस्था • प्रकृति',
    title: 'मंदिर के बारे में',
    templeName: 'श्री कपालेश्वर महादेव मंदिर',
    subtitle: 'आस्था और प्रकृति के बीच बसा एक पवित्र धाम',
    intro: [
      'डेरापुर, कानपुर देहात में स्थित श्री कपालेश्वर महादेव मंदिर भगवान शिव के प्रति अटूट श्रद्धा और स्थानीय धार्मिक परंपराओं का एक महत्वपूर्ण केंद्र है।',
      'सेंगुर नदी के किनारे, सुरम्य वन क्षेत्र में लगभग 100 फीट ऊँचे प्राकृतिक टीले पर स्थित यह मंदिर अपने शांत वातावरण और प्राकृतिक सुंदरता के लिए भी विशेष पहचान रखता है।',
      'यहाँ आने वाले श्रद्धालुओं के लिए मंदिर केवल दर्शन और पूजा का स्थान नहीं, बल्कि कुछ समय प्रकृति, शांति और आध्यात्मिकता के बीच बिताने का अवसर भी है।'
    ],
    sections: [
      {
        heading: 'मंदिर का धार्मिक महत्व',
        paragraphs: [
          'कपालेश्वर महादेव के प्रति आसपास के क्षेत्रों में लंबे समय से गहरी श्रद्धा रही है।',
          'स्थानीय परंपरा के अनुसार, मंदिर में स्थापित शिवलिंग एक पवित्र स्थान से जुड़ा हुआ है और इसी मान्यता के आधार पर भगवान शिव को कपालेश्वर महादेव के नाम से पूजा जाता है।',
          'पीढ़ियों से श्रद्धालु यहाँ जलाभिषेक, पूजन और दर्शन के लिए आते रहे हैं।'
        ]
      },
      {
        heading: 'प्रकृति की गोद में मंदिर',
        paragraphs: [
          'कपालेश्वर मंदिर की एक विशेष पहचान इसका प्राकृतिक परिवेश है।',
          'मंदिर के आसपास फैला वन क्षेत्र, सेंगुर नदी और ऊँचा प्राकृतिक टीला इस स्थान को एक शांत एवं रमणीय वातावरण प्रदान करते हैं।',
          'शहर की भीड़भाड़ से दूर यह स्थान श्रद्धालुओं को आध्यात्मिक शांति के साथ-साथ प्रकृति के करीब आने का अवसर देता है।'
        ]
      },
      {
        heading: 'श्रावण मास',
        paragraphs: [
          'भगवान शिव की आराधना में श्रावण मास का विशेष महत्व है।',
          'श्रावण के प्रत्येक सोमवार को कपालेश्वर महादेव मंदिर में बड़ी संख्या में श्रद्धालु दर्शन एवं जलाभिषेक के लिए आते हैं। इस दौरान मंदिर परिसर में विशेष धार्मिक गतिविधियाँ और मेले का आयोजन होता है।'
        ]
      },
      {
        heading: 'महाशिवरात्रि',
        paragraphs: [
          'महाशिवरात्रि मंदिर के प्रमुख धार्मिक पर्वों में से एक है।',
          'इस अवसर पर विशेष पूजा-अर्चना एवं धार्मिक आयोजन होते हैं और आसपास के क्षेत्रों से बड़ी संख्या में श्रद्धालु भगवान कपालेश्वर महादेव के दर्शन के लिए पहुँचते हैं।'
        ]
      },
      {
        heading: 'स्थानीय आस्था और लोकपरंपरा',
        paragraphs: [
          'कपालेश्वर महादेव मंदिर से अनेक स्थानीय मान्यताएँ और लोकपरंपराएँ जुड़ी हुई हैं।',
          'इन्हीं में से एक लोकमान्यता के कारण मंदिर को आसपास के क्षेत्रों में “पील पहलवान का मंदिर” भी कहा जाता है।',
          'ये मान्यताएँ स्थानीय आस्था और पीढ़ियों से चली आ रही परंपराओं का हिस्सा हैं।'
        ]
      },
      {
        heading: 'श्रद्धा की निरंतर परंपरा',
        paragraphs: [
          'समय के साथ क्षेत्र और समाज में अनेक परिवर्तन आए हैं, लेकिन कपालेश्वर महादेव के प्रति लोगों की श्रद्धा आज भी बनी हुई है।',
          'श्रावण के सोमवार हों, महाशिवरात्रि का पावन अवसर हो या सामान्य दिन—श्रद्धालु बाबा कपालेश्वर के दर्शन और आशीर्वाद के लिए यहाँ आते हैं।',
          'यह मंदिर आज भी आस्था, परंपरा और स्थानीय विरासत का महत्वपूर्ण प्रतीक है।'
        ]
      }
    ],
    closingTitle: 'कपालेश्वर महादेव के दर्शन के लिए आपका स्वागत है',
    closing: [
      'इस पवित्र धाम में आइए और भगवान शिव के दर्शन के साथ प्रकृति की शांति एवं इस स्थान की आध्यात्मिक विरासत का अनुभव कीजिए।'
    ],
    mantra: 'ॐ नमः शिवाय',
    harHar: 'हर हर महादेव।',
    readMoreTitle: 'आगे पढ़ें',
    readMoreLead: 'कपालेश्वर महादेव मंदिर के निर्माण और उससे जुड़ी ऐतिहासिक परंपरा के बारे में जानें।',
    readMoreButton: 'मंदिर का इतिहास पढ़ें →'
  },
  en: {
    eyebrow: 'Faith • Nature',
    title: 'About the Temple',
    templeName: 'Shri Kapaleshwar Mahadev Temple',
    subtitle: 'A sacred abode between faith and nature',
    intro: [
      'Shri Kapaleshwar Mahadev Temple in Derapur, Kanpur Dehat, is an important centre of unbroken devotion to Lord Shiva and of local religious tradition.',
      'Standing on the bank of the Sengur river, in scenic woodland on a natural mound about 100 feet high, the temple is also known for its quiet air and natural beauty.',
      'For devotees who come here, the temple is not only a place of darshan and puja, but also a chance to spend some time among nature, peace, and spirituality.'
    ],
    sections: [
      {
        heading: 'Religious significance of the temple',
        paragraphs: [
          'There has long been deep devotion to Kapaleshwar Mahadev in the surrounding regions.',
          'According to local tradition, the Shivling established in the temple is joined to a sacred place, and on the basis of this belief Lord Shiva is worshipped by the name Kapaleshwar Mahadev.',
          'For generations, devotees have come here for jalabhishek, puja, and darshan.'
        ]
      },
      {
        heading: 'The temple in the lap of nature',
        paragraphs: [
          'One special mark of Kapaleshwar Temple is its natural setting.',
          'The woodland around the temple, the Sengur river, and the high natural mound give this place a calm and lovely atmosphere.',
          'Away from the crowd of the city, this place offers devotees spiritual peace and also a chance to come close to nature.'
        ]
      },
      {
        heading: 'The month of Shravan',
        paragraphs: [
          'The month of Shravan holds special importance in the worship of Lord Shiva.',
          'On every Monday of Shravan, large numbers of devotees come to Kapaleshwar Mahadev Temple for darshan and jalabhishek. During this time, special religious activities and a fair are held in the temple premises.'
        ]
      },
      {
        heading: 'Maha Shivaratri',
        paragraphs: [
          'Maha Shivaratri is one of the foremost religious festivals of the temple.',
          'On this occasion special puja and religious gatherings are held, and large numbers of devotees from the surrounding regions come for darshan of Lord Kapaleshwar Mahadev.'
        ]
      },
      {
        heading: 'Local faith and folk tradition',
        paragraphs: [
          'Many local beliefs and folk traditions are joined with Kapaleshwar Mahadev Temple.',
          'Because of one of these folk beliefs, people in the surrounding areas also call the temple “Peel Pahalwan ka Mandir”.',
          'These beliefs are part of local faith and of traditions that have continued for generations.'
        ]
      },
      {
        heading: 'An unbroken tradition of faith',
        paragraphs: [
          'With time, many changes have come in the region and in society, but people’s devotion to Kapaleshwar Mahadev remains to this day.',
          'Whether it is a Monday of Shravan, the sacred occasion of Maha Shivaratri, or an ordinary day—devotees come here for darshan and the blessing of Baba Kapaleshwar.',
          'This temple is still an important symbol of faith, tradition, and local heritage.'
        ]
      }
    ],
    closingTitle: 'You are welcome for darshan of Kapaleshwar Mahadev',
    closing: [
      'Come to this sacred abode and, with darshan of Lord Shiva, experience the peace of nature and the spiritual heritage of this place.'
    ],
    mantra: 'ॐ नमः शिवाय',
    harHar: 'Har Har Mahadev.',
    readMoreTitle: 'Read further',
    readMoreLead: 'Learn about the construction of Kapaleshwar Mahadev Temple and the historical tradition joined with it.',
    readMoreButton: 'Read the temple history →'
  }
};
