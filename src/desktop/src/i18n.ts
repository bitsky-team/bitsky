import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import backend from 'i18next-xhr-backend'

i18n
  // load locales files in public/locales
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
