import type { Lang } from './translations';

/** Replace with a photo path when available; layout stays the same. */
export const LEGACY_PORTRAIT_PLACEHOLDER = 'assets/images/legacy/portrait-placeholder.svg';

export interface LegacyPerson {
  name: string;
  designation: string;
  note?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  isPresent?: boolean;
}

export interface LegacyCopy {
  eyebrow: string;
  title: string;
  introHeading: string;
  intro: string[];
  lineageHeading: string;
  people: LegacyPerson[];
  closingTitle: string;
  closing: string[];
  readMoreTitle: string;
  readMoreLead: string;
  readMoreButton: string;
}

const personPhotos = {
  tribhuvan: 'assets/images/stewards/shri-tribhuvan-narayan-mishra.png'
} as const;

export const legacyCopy: Record<Lang, LegacyCopy> = {
  en: {
    eyebrow: 'Tradition • Stewardship',
    title: 'Temple Legacy',
    introHeading: 'A Tradition of Faith and Stewardship',
    intro: [
      'Shri Kapaleshwar Mahadev Temple is an important part of the religious and cultural heritage of Derapur, Kanpur Dehat. Its story reflects generations of devotion to Lord Shiva and the continued care of a sacred place that holds significance for devotees from the surrounding region.',
      'The following lineage presents the five Sarvarakars associated with the temple\'s history and continuing tradition.'
    ],
    lineageHeading: 'Lineage of Sarvarakars',
    people: [
      {
        name: 'Pandit Kanoji Lal Mishra',
        designation: 'First Sarvarakar',
        note:
          'According to the temple\'s historical account, Pandit Kanoji Lal Mishra initiated the construction of the temple in 1894.',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'Pandit Kanoji Lal Mishra, First Sarvarakar'
      },
      {
        name: 'Pandit Shiv Kumar Mishra',
        designation: 'Second in the lineage',
        note:
          'According to the temple\'s historical account, Pandit Shiv Kumar Mishra completed the temple construction after his father\'s death.',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'Pandit Shiv Kumar Mishra, Second in the lineage'
      },
      {
        name: 'Pandit Krishna Narayan Mishra',
        designation: 'Third in the lineage',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'Pandit Krishna Narayan Mishra, Third in the lineage'
      },
      {
        name: 'Shri Satish Narayan Mishra',
        designation: 'Fourth in the lineage',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'Shri Satish Narayan Mishra, Fourth in the lineage'
      },
      {
        name: 'Shri Tribhuvan Narayan Mishra',
        designation: 'Present Sarvarakar',
        image: personPhotos.tribhuvan,
        imageAlt: 'Shri Tribhuvan Narayan Mishra, Present Sarvarakar',
        imagePosition: '70% 22%',
        isPresent: true
      }
    ],
    closingTitle: 'Continuing a Tradition of Faith',
    closing: [
      'The legacy of Shri Kapaleshwar Mahadev Temple lives on through continued devotion, the preservation of its traditions, and the care of its sacred premises.'
    ],
    readMoreTitle: 'Read further',
    readMoreLead:
      'Learn about the temple’s religious significance, natural setting, festivals, and present form.',
    readMoreButton: 'About the Temple →'
  },
  hi: {
    eyebrow: 'परंपरा • संरक्षण',
    title: 'मंदिर की विरासत',
    introHeading: 'आस्था और संरक्षण की परंपरा',
    intro: [
      'श्री कपालेश्वर महादेव मंदिर, डेरापुर, कानपुर देहात की धार्मिक और सांस्कृतिक विरासत का एक महत्वपूर्ण हिस्सा है। इसका इतिहास भगवान शिव के प्रति पीढ़ियों से चली आ रही आस्था और मंदिर की परंपराओं के संरक्षण से जुड़ा है।',
      'नीचे मंदिर से संबंधित पाँच सर्वराकारों का क्रम प्रस्तुत किया गया है।'
    ],
    lineageHeading: 'सर्वराकारों की परंपरा',
    people: [
      {
        name: 'पंडित कानोजी लाल मिश्रा',
        designation: 'प्रथम सर्वराकार',
        note:
          'मंदिर के ऐतिहासिक विवरण के अनुसार, पंडित कानोजी लाल मिश्रा ने वर्ष 1894 में मंदिर निर्माण का कार्य आरंभ कराया।',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'पंडित कानोजी लाल मिश्रा, प्रथम सर्वराकार'
      },
      {
        name: 'पंडित शिव कुमार मिश्रा',
        designation: 'परंपरा में दूसरे',
        note:
          'मंदिर के ऐतिहासिक विवरण के अनुसार, अपने पिता के निधन के बाद पंडित शिव कुमार मिश्रा ने मंदिर निर्माण का कार्य पूरा कराया।',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'पंडित शिव कुमार मिश्रा, परंपरा में दूसरे'
      },
      {
        name: 'पंडित कृष्ण नारायण मिश्रा',
        designation: 'परंपरा में तीसरे',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'पंडित कृष्ण नारायण मिश्रा, परंपरा में तीसरे'
      },
      {
        name: 'श्री सतीश नारायण मिश्रा',
        designation: 'परंपरा में चौथे',
        image: LEGACY_PORTRAIT_PLACEHOLDER,
        imageAlt: 'श्री सतीश नारायण मिश्रा, परंपरा में चौथे'
      },
      {
        name: 'श्री त्रिभुवन नारायण मिश्रा',
        designation: 'वर्तमान सर्वराकार',
        image: personPhotos.tribhuvan,
        imageAlt: 'श्री त्रिभुवन नारायण मिश्रा, वर्तमान सर्वराकार',
        imagePosition: '70% 22%',
        isPresent: true
      }
    ],
    closingTitle: 'आस्था की निरंतर परंपरा',
    closing: [
      'श्री कपालेश्वर महादेव मंदिर की विरासत निरंतर आस्था, धार्मिक परंपराओं के संरक्षण और मंदिर परिसर की देखरेख के माध्यम से आगे बढ़ रही है।'
    ],
    readMoreTitle: 'आगे पढ़ें',
    readMoreLead:
      'मंदिर के धार्मिक महत्व, प्राकृतिक परिवेश, पर्वों और वर्तमान स्वरूप के बारे में जानें।',
    readMoreButton: 'मंदिर के बारे में →'
  }
};
