import React, { Fragment, Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { StylesProvider } from '@material-ui/styles'
import { Provider as StoreProvider } from 'react-redux'

import { unregister } from './serviceWorker'
import { Router } from './Router'
import { configureStore } from './redux/store'
import en from './assets/locales/EN.json'
import fr from './assets/locales/FR.json'
import es from './assets/locales/ES.json'
import nl from './assets/locales/NL.json'

// Initiating Sentry, this tool is used for error catching
Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN})

// Initiating I18n for translation
i18n
  .use(initReactI18next)
  .init({
    resources: {
        en,
        fr,
        es,
        nl,
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })

// Initiating redux store
const store = configureStore()

// TODO: Maybe change Suspense fallback props into a beautiful loading screen
const App = (): JSX.Element => (
  <Suspense fallback={<Fragment />}>
    <Normalize />
    <StoreProvider store={store}>
        <ThemeProvider theme={{mode: 'classic'}}>
            <StylesProvider injectFirst>
                <Router />
            </StylesProvider>
        </ThemeProvider>
    </StoreProvider>
  </Suspense>
)

// Rendering the app
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

unregister()
