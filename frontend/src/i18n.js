import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locale/en/trans.json';
import thTranslations from './locale/th/trans.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            th: {
                translation: thTranslations,
            },
        },
        lng: 'th',
        fallbackLng: 'th',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
