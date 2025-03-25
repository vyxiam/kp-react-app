import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './assets/en.json'
import translationVI from './assets/vi.json'

//https://www.youtube.com/watch?v=dltHi9GWMIo
i18n
  .use(LanguageDetector)// Detect language change
  .use(initReactI18next)
  .init({
  debug: false, // turn on dev-console debug
  lng: 'en', // Default Language
  fallbackLng: 'en', // Fallback Language in case of misssing translation
  resources:{
    en:{
      translation: translationEN
    },
    vi:{
      translation: translationVI
    }
  }
})

export default i18n;
