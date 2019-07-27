import React, {Fragment, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {unregister} from './serviceWorker'
import * as Sentry from '@sentry/browser'
import {Router} from './Router'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {ThemeProvider} from 'styled-components'
import { StylesProvider } from '@material-ui/styles'
import { Normalize } from 'styled-normalize'
import { configureStore } from './store'
import { Provider as StoreProvider } from 'react-redux'
import en from './assets/locales/EN.json'
import fr from './assets/locales/FR.json'

// Initiating Sentry, this tool is used for error catching
Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN})

// Initiating I18n for translation
i18n
  // load locales files in public/locales
  .use(initReactI18next)
  .init({
    resources: {
        en,
        fr,
    },
    lng: localStorage.getItem('language') || undefined,
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
