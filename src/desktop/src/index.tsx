import React from 'react'
import ReactDOM from 'react-dom'
import {unregister} from './serviceWorker'
import * as Sentry from '@sentry/browser'
import {Router} from './Router'
import i18n from 'i18next'
import backend from 'i18next-xhr-backend'
import {initReactI18next} from 'react-i18next'

Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN})

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

ReactDOM.render(
  <Router />,
  document.getElementById('root'),
)

unregister()
