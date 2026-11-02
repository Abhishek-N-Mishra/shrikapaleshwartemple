import type { Lang } from './translations';

/**
 * Replace each `image` path with a photograph (e.g. .jpg) when available.
 * Suggested photo filenames match the SVG slugs in assets/images/nearby/.
 */
export const nearbyPlaceImages = {
  ramJankiMandir: 'assets/images/nearby/ram-janki-mandir.svg',
  paliyaWaliKaliMataMandir: 'assets/images/nearby/paliya-wali-kali-mata-mandir.svg',
  panditBaba: 'assets/images/nearby/pandit-baba.svg',
  shreeDeviSaahayHanumanJiMandir: 'assets/images/nearby/shree-devi-saahay-hanuman-ji-mandir.svg'
} as const;

export interface NearbyPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  address?: string;
  distance?: string;
  directionsUrl?: string;
  visitorInfo?: string;
}

export interface NearbyPlacesCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  places: NearbyPlace[];
  addressLabel: string;
  distanceLabel: string;
  directionsLabel: string;
}

const placeNames = {
  ramJanki: 'Ram Janki Mandir',
  paliyaKali: 'Paliya Wali Kali Mata Mandir',
  panditBaba: 'Pandit Baba',
  deviHanuman: 'Shree Devi Saahay, Hanuman Ji Mandir'
} as const;

export const nearbyPlacesCopy: Record<Lang, NearbyPlacesCopy> = {
  en: {
    eyebrow: 'Visit • Heritage',
    title: 'Nearby Places',
    subtitle: 'Explore the surroundings of Shri Kapaleshwar Mahadev Temple',
    intro:
      'A visit to Shri Kapaleshwar Mahadev Temple offers an opportunity to experience devotion, local religious traditions, and the natural surroundings of Derapur, Kanpur Dehat. This page introduces some nearby places of religious interest to help visitors learn about the area\'s spiritual heritage and plan their visit.',
    addressLabel: 'Location',
    distanceLabel: 'Distance',
    directionsLabel: 'Directions',
    places: [
      {
        id: 'ram-janki-mandir',
        name: placeNames.ramJanki,
        description:
          'Discover this local place of religious interest near the Shri Kapaleshwar Mahadev Temple area. More details will be added after verification.',
        image: nearbyPlaceImages.ramJankiMandir,
        imageAlt: 'Ram Janki Mandir, nearby place of religious interest'
      },
      {
        id: 'paliya-wali-kali-mata-mandir',
        name: placeNames.paliyaKali,
        description:
          'A local place of religious interest in the Kapaleshwar Temple area. Further information will be added after verification.',
        image: nearbyPlaceImages.paliyaWaliKaliMataMandir,
        imageAlt: 'Paliya Wali Kali Mata Mandir, nearby place of religious interest'
      },
      {
        id: 'pandit-baba',
        name: placeNames.panditBaba,
        description:
          'Discover this local place of religious interest near the Shri Kapaleshwar Mahadev Temple area. More details will be added after verification.',
        image: nearbyPlaceImages.panditBaba,
        imageAlt: 'Pandit Baba, nearby place of religious interest'
      },
      {
        id: 'shree-devi-saahay-hanuman-ji-mandir',
        name: placeNames.deviHanuman,
        description:
          'A local place of religious interest in the Kapaleshwar Temple area. Further information will be added after verification.',
        image: nearbyPlaceImages.shreeDeviSaahayHanumanJiMandir,
        imageAlt: 'Shree Devi Saahay, Hanuman Ji Mandir, nearby place of religious interest'
      }
    ]
  },
  hi: {
    eyebrow: 'यात्रा • विरासत',
    title: 'आस-पास के स्थल',
    subtitle: 'श्री कपालेश्वर महादेव मंदिर के आसपास के दर्शनीय स्थल',
    intro:
      'श्री कपालेश्वर महादेव मंदिर की यात्रा श्रद्धा, स्थानीय धार्मिक परंपराओं और डेरापुर, कानपुर देहात के प्राकृतिक परिवेश से जुड़ने का अवसर प्रदान करती है। इस पृष्ठ पर आसपास के कुछ धार्मिक स्थलों का परिचय दिया गया है, ताकि श्रद्धालु क्षेत्र की धार्मिक विरासत को जान सकें और अपनी यात्रा की योजना बना सकें।',
    addressLabel: 'स्थान',
    distanceLabel: 'दूरी',
    directionsLabel: 'मार्ग',
    places: [
      {
        id: 'ram-janki-mandir',
        name: placeNames.ramJanki,
        description:
          'श्री कपालेश्वर महादेव मंदिर क्षेत्र के आसपास स्थित इस धार्मिक स्थल के बारे में अधिक जानकारी सत्यापन के बाद जोड़ी जाएगी।',
        image: nearbyPlaceImages.ramJankiMandir,
        imageAlt: 'Ram Janki Mandir, आसपास का धार्मिक स्थल'
      },
      {
        id: 'paliya-wali-kali-mata-mandir',
        name: placeNames.paliyaKali,
        description:
          'कपालेश्वर मंदिर क्षेत्र का एक स्थानीय धार्मिक स्थल। विस्तृत जानकारी सत्यापन के बाद उपलब्ध होगी।',
        image: nearbyPlaceImages.paliyaWaliKaliMataMandir,
        imageAlt: 'Paliya Wali Kali Mata Mandir, आसपास का धार्मिक स्थल'
      },
      {
        id: 'pandit-baba',
        name: placeNames.panditBaba,
        description:
          'श्री कपालेश्वर महादेव मंदिर क्षेत्र के आसपास स्थित इस धार्मिक स्थल के बारे में अधिक जानकारी सत्यापन के बाद जोड़ी जाएगी।',
        image: nearbyPlaceImages.panditBaba,
        imageAlt: 'Pandit Baba, आसपास का धार्मिक स्थल'
      },
      {
        id: 'shree-devi-saahay-hanuman-ji-mandir',
        name: placeNames.deviHanuman,
        description:
          'कपालेश्वर मंदिर क्षेत्र का एक स्थानीय धार्मिक स्थल। विस्तृत जानकारी सत्यापन के बाद उपलब्ध होगी।',
        image: nearbyPlaceImages.shreeDeviSaahayHanumanJiMandir,
        imageAlt: 'Shree Devi Saahay, Hanuman Ji Mandir, आसपास का धार्मिक स्थल'
      }
    ]
  }
};
