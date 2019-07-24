import React, {Fragment, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {unregister} from './serviceWorker'
import * as Sentry from '@sentry/browser'
import {Router} from './Router'
import i18n from 'i18next'
import backend from 'i18next-xhr-backend'
import {initReactI18next} from 'react-i18next'
import {ThemeProvider} from 'styled-components'

// Initiating Sentry, this tool is used for error catching
Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN})

// Initiating I18n for translation
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

// TODO: Maybe change Suspense fallback props into a beautiful loading screen
const App = (): JSX.Element => (
  <Suspense fallback={<Fragment />}>
    <ThemeProvider theme={{mode: 'classic'}}>
      <Router />
    </ThemeProvider>
  </Suspense>
)

// Rendering the app
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

unregister()
