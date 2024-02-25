import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./en.json";
import fr from "./fr.json";

const LOCALE_PERSISTENCE_KEY = "language";

interface LanguageDetectorOptions {
  async: boolean;
  detect: (callback: (locale: string) => void) => void;
  init: () => void;
  cacheUserLanguage: (locale: string) => void;
  type: "languageDetector";
}

const languageDetector: LanguageDetectorOptions = {
  type: "languageDetector",

  async: true,

  detect: async (callback) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

    if (!persistedLocale) {
      callback("en");
    } else {
      callback(persistedLocale);
    }
  },

  init: () => {},

  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
