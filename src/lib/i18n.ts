import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Theme: "Theme",
      light: "Light",
      dark: "Dark",
      Language: "Language",
      english: "English",
      russian: "Russian",
      espaniol: "Espaniol",
      china: "China",
      Registration: "Registration",
    },
  },
  ru: {
    translation: {
      Theme: "Палитра",
      light: "Светлая",
      dark: "Тёмная",
      Language: "Язык",
      english: "Английский",
      russian: "Русский",
      espaniol: "Испанский",
      china: "Китайский",
      Registration: "Регистрация",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
