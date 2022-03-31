import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translationEN.json'
import translationVN from './locales/vn/translationVN.json'

const resources = {
  en: {
    translation: translationEN
  },
  vn: {
    translation: translationVN
  }
}

i18n.use(initReactI18next).init({ resources, lng: 'vn', keySeparator: false, interpolation: { escapeValue: false } })
export default i18n
