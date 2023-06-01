import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from './locale/en.json';
import translationAr from './locale/ar.json';
import loadCSS from "loadcss";

const resources = {
    en: {
        translation: translationEn,
    },
    ar: {
        translation: translationAr,
    },
};

const changeLanguage = (lng) => {
    if (lng === 'ar') {
        loadCSS('./components/blogs/arstyle.css');
    } else {
        loadCSS('./components/blogs/enstyle.css');
    }
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        // lng: savedLanguage,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        // detection: {
        //     order: ['localStorage'],
        //     caches: ['localStorage'],
        // },
    });

export { i18n, changeLanguage };
