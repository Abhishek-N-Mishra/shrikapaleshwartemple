import type { Lang } from './translations';

export interface HistorySection {
  heading: string;
  paragraphs: string[];
}

export interface HistoryCopy {
  eyebrow: string;
  title: string;
  storyTitle: string;
  intro: string[];
  sections: HistorySection[];
  closingTitle: string;
  closingLead: string;
  closing: string[];
  mantra: string;
  harHar: string;
  readMoreTitle: string;
  readMoreLead: string;
  readMoreButton: string;
}

export const historyCopy: Record<Lang, HistoryCopy> = {
  hi: {
    eyebrow: 'परंपरा • संकल्प',
    title: 'मंदिर का इतिहास',
    storyTitle: 'कपालेश्वर महादेव की ऐतिहासिक यात्रा',
    intro: [
      'कपालेश्वर महादेव मंदिर का इतिहास स्थानीय परंपराओं के अनुसार एक दिव्य स्वप्न, श्रद्धा और संकल्प से जुड़ा हुआ है।',
      'डेरापुर क्षेत्र में सेंगुर नदी के किनारे स्थित इस पवित्र स्थान ने समय के साथ एक महत्वपूर्ण धार्मिक पहचान बनाई और आज यह आसपास के क्षेत्रों के श्रद्धालुओं के लिए आस्था का प्रमुख केंद्र है।'
    ],
    sections: [
      {
        heading: 'एक दिव्य स्वप्न से शुरुआत',
        paragraphs: [
          'स्थानीय परंपरा के अनुसार, तत्कालीन असिस्टेंट कमिश्नर पंडित कनोजी लाल मिश्र को एक दिव्य स्वप्न प्राप्त हुआ।',
          'कहा जाता है कि स्वप्न में उन्हें जंगल के सबसे ऊँचे टीले पर स्थित एक पवित्र समाधि तथा उसके ऊपर स्थापित शिवलिंग के बारे में संकेत मिला।',
          'उन्हें इस पवित्र स्थान पर मंदिर निर्माण करने और समाधि को यथावत रखने का आदेश प्राप्त हुआ।',
          'इस अनुभव के बाद उन्होंने इस स्थान पर मंदिर निर्माण का संकल्प लिया।'
        ]
      },
      {
        heading: 'वर्ष 1894 — मंदिर निर्माण',
        paragraphs: [
          'पंडित कनोजी लाल मिश्र ने अपनी पेंशन लेकर मंदिर निर्माण का कार्य प्रारंभ कराया।',
          'स्थानीय ऐतिहासिक विवरणों के अनुसार, मंदिर का निर्माण वर्ष 1894 में कराया गया।',
          'उन्होंने मंदिर निर्माण को शीघ्र पूरा कराने का प्रयास किया, लेकिन दुर्भाग्यवश मंदिर के पूर्ण होने से पहले ही उनका निधन हो गया।'
        ]
      },
      {
        heading: 'संकल्प को पूरा किया उनके सुपुत्र ने',
        paragraphs: [
          'पंडित कनोजी लाल मिश्र के निधन के बाद उनके सुपुत्र पंडित शिव कुमार मिश्र ने मंदिर निर्माण की जिम्मेदारी संभाली।',
          'उन्होंने अपने पिता के संकल्प को आगे बढ़ाया और मंदिर निर्माण का कार्य पूर्ण कराया।',
          'इस प्रकार मंदिर की स्थापना की कहानी केवल धार्मिक आस्था की कथा नहीं, बल्कि एक पिता के संकल्प और पुत्र द्वारा उस संकल्प को पूरा करने की परंपरा से भी जुड़ी हुई है।'
        ]
      },
      {
        heading: 'मंदिर की संरचना',
        paragraphs: [
          'स्थानीय विवरण के अनुसार, मंदिर निर्माण में शीघ्रता के कारण मूल मठ अपेक्षाकृत छोटा रह गया।',
          'बाद में उसी मठ के ऊपर दूसरा मठ निर्मित किया गया।',
          'समय के साथ मंदिर का वर्तमान स्वरूप विकसित हुआ और यह स्थान स्थानीय धार्मिक जीवन का महत्वपूर्ण हिस्सा बन गया।'
        ]
      },
      {
        heading: 'कपालेश्वर नाम की परंपरा',
        paragraphs: [
          'मंदिर के नामकरण की परंपरा भी इसके इतिहास से जुड़ी हुई है।',
          'स्थानीय मान्यता के अनुसार, जिस स्थान पर मंदिर का निर्माण किया गया, वहाँ भूमि के नीचे पवित्र समाधि और उसके ऊपर शिवलिंग के होने का संकेत प्राप्त हुआ था।',
          'इसी पवित्र शिवलिंग को कपालेश्वर महादेव के रूप में पूजा जाने लगा।'
        ]
      },
      {
        heading: 'पीढ़ियों से चली आ रही आस्था',
        paragraphs: [
          'मंदिर के निर्माण के बाद से यह स्थान आसपास के क्षेत्रों के श्रद्धालुओं के लिए आस्था का केंद्र बना रहा है।',
          'समय के साथ मंदिर की धार्मिक पहचान और अधिक मजबूत हुई। विशेष रूप से श्रावण मास के सोमवार और महाशिवरात्रि के अवसर पर यहाँ बड़ी संख्या में श्रद्धालु एकत्रित होते हैं।',
          'मंदिर से जुड़ी लोकमान्यताएँ भी पीढ़ी-दर-पीढ़ी आगे बढ़ती रही हैं।'
        ]
      },
      {
        heading: 'आज का कपालेश्वर मंदिर',
        paragraphs: [
          'आज कपालेश्वर महादेव मंदिर डेरापुर और आसपास के क्षेत्रों की धार्मिक एवं सांस्कृतिक विरासत का एक महत्वपूर्ण हिस्सा है।',
          'सेंगुर नदी के किनारे प्राकृतिक वातावरण में स्थित यह मंदिर इतिहास, आस्था और स्थानीय परंपराओं को एक साथ संजोए हुए है।',
          'एक दिव्य स्वप्न से शुरू हुआ यह संकल्प आज भी श्रद्धालुओं की आस्था में जीवित है।'
        ]
      }
    ],
    closingTitle: 'एक विरासत, जो आज भी जीवंत है',
    closingLead: '1894 से आज तक — श्रद्धा की यह परंपरा निरंतर आगे बढ़ रही है।',
    closing: [
      'कपालेश्वर महादेव के प्रति भक्तों की आस्था इस मंदिर की सबसे बड़ी विरासत है।'
    ],
    mantra: 'ॐ नमः शिवाय',
    harHar: 'हर हर महादेव।',
    readMoreTitle: 'आगे पढ़ें',
    readMoreLead: 'मंदिर के धार्मिक महत्व, प्राकृतिक परिवेश, पर्वों और वर्तमान स्वरूप के बारे में जानें।',
    readMoreButton: 'मंदिर के बारे में →'
  },
  en: {
    eyebrow: 'Tradition • Resolve',
    title: 'Temple History',
    storyTitle: 'The historical journey of Kapaleshwar Mahadev',
    intro: [
      'According to local traditions, the history of Kapaleshwar Mahadev Temple is joined to a divine dream, to faith, and to a vow.',
      'This sacred place on the bank of the Sengur river in the Derapur region gained an important religious identity over time, and today it is a principal centre of faith for devotees from the surrounding areas.'
    ],
    sections: [
      {
        heading: 'A beginning from a divine dream',
        paragraphs: [
          'According to local tradition, the then Assistant Commissioner, Pandit Kanoji Lal Mishra, received a divine dream.',
          'It is said that in the dream he received a sign of a sacred samadhi on the highest mound in the forest, and of the Shivling established upon it.',
          'He was instructed to build a temple at this sacred place and to keep the samadhi as it was.',
          'After this experience he resolved to build a temple here.'
        ]
      },
      {
        heading: 'The year 1894 — construction of the temple',
        paragraphs: [
          'Pandit Kanoji Lal Mishra began the work of temple construction with his pension.',
          'According to local historical accounts, the temple was built in the year 1894.',
          'He tried to have the construction completed quickly, but sadly he passed away before the temple could be finished.'
        ]
      },
      {
        heading: 'His son completed the vow',
        paragraphs: [
          'After the passing of Pandit Kanoji Lal Mishra, his son Pandit Shiv Kumar Mishra took up the responsibility of building the temple.',
          'He carried forward his father’s vow and completed the construction.',
          'In this way the story of the temple’s founding is not only a tale of religious faith, but is also joined to the tradition of a father’s vow and of a son who fulfilled it.'
        ]
      },
      {
        heading: 'The structure of the temple',
        paragraphs: [
          'According to local account, because the construction was hurried, the original math remained relatively small.',
          'Later a second math was built above that same math.',
          'With time the present form of the temple developed, and this place became an important part of local religious life.'
        ]
      },
      {
        heading: 'The tradition of the name Kapaleshwar',
        paragraphs: [
          'The tradition of the temple’s name is also joined to its history.',
          'According to local belief, at the place where the temple was built, a sign was received of a sacred samadhi beneath the earth and of a Shivling above it.',
          'This sacred Shivling came to be worshipped as Kapaleshwar Mahadev.'
        ]
      },
      {
        heading: 'Faith carried through the generations',
        paragraphs: [
          'From the time of its construction, this place has remained a centre of faith for devotees from the surrounding regions.',
          'With time the temple’s religious identity grew still stronger. Especially on the Mondays of Shravan and on Maha Shivaratri, large numbers of devotees gather here.',
          'Folk beliefs joined to the temple have also been carried forward from generation to generation.'
        ]
      },
      {
        heading: 'Kapaleshwar Temple today',
        paragraphs: [
          'Today Kapaleshwar Mahadev Temple is an important part of the religious and cultural heritage of Derapur and the surrounding regions.',
          'Standing in a natural setting on the bank of the Sengur river, this temple holds together history, faith, and local tradition.',
          'The vow that began with a divine dream still lives in the faith of devotees.'
        ]
      }
    ],
    closingTitle: 'A heritage that is still living',
    closingLead: 'From 1894 to this day — this tradition of faith continues to move forward.',
    closing: [
      'The devotion of bhaktas to Kapaleshwar Mahadev is the greatest heritage of this temple.'
    ],
    mantra: 'ॐ नमः शिवाय',
    harHar: 'Har Har Mahadev.',
    readMoreTitle: 'Read further',
    readMoreLead: 'Learn about the temple’s religious significance, natural setting, festivals, and present form.',
    readMoreButton: 'About the Temple →'
  }
};
