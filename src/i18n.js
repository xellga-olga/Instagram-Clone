import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)        // определяет язык из браузера/локального хранилища
  .use(initReactI18next)        // подключаем к React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'en',          // язык по умолчанию
    interpolation: {
      escapeValue: false,       // для React не нужно экранирование
    },
    detection: {
      // можно настроить, откуда брать язык: localStorage, cookie и т.д.
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;