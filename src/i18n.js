import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    heroText: "Our most Iconic Cap will be sold as an NFT ",
                }
            },
        },
    })