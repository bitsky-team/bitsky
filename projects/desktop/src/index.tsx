import React, { Fragment, Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { StylesProvider } from '@material-ui/styles'
import { Provider as StoreProvider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { unregister } from './serviceWorker'
import { Router } from './Router'
import { configureStore, persistor } from './redux/store'
import { IReduxState } from './interfaces/redux'
import en from './assets/locales/EN.json'
import fr from './assets/locales/FR.json'
import es from './assets/locales/ES.json'
import nl from './assets/locales/NL.json'

// Initiating Sentry, this tool is used for error catching
Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN })

// Initiating I18n for translation
// Store not rehydrated yet, but we need the language
const getLanguage = (): string | undefined => {
    const persistedStore = JSON.parse(localStorage.getItem('persist:root') ?? '{}')
    const sessionReducer = JSON.parse(persistedStore.sessionReducer ?? '{}')
    return sessionReducer?.language
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            fr,
            es,
            nl,
        },
        lng: getLanguage() ?? 'en',
        fallbackLng: 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    })

const Loader = <Fragment />

// Initiating redux store
const store = configureStore()

// This component will read the hydrated theme from redux
interface IOwnProps {
  children: object;
}
interface IStoreProps {
  mode?: string;
}

type IProps = IOwnProps & IStoreProps

const mapStateToProps = ({themeReducer}: IReduxState): IStoreProps => ({mode: themeReducer.mode})

const ConnectedThemeProvider = connect(mapStateToProps, null)(
    ({children, mode}: IProps) => {
        if (!mode) {
            return Loader
        }

        return (
            <ThemeProvider theme={{mode}}>
                <StylesProvider injectFirst>
                    {children}
                </StylesProvider>
            </ThemeProvider>
        )
    },
)

// TODO: Maybe change Suspense fallback props into a beautiful loading screen
// but if there is a loading at each click, it will be relou
const App = (): JSX.Element => (
    <Suspense fallback={Loader}>
        <Normalize />
        <StoreProvider store={store}>
            <PersistGate loading={Loader} persistor={persistor}>
                <ConnectedThemeProvider>
                    <Router />
                </ConnectedThemeProvider>
            </PersistGate>
        </StoreProvider>
    </Suspense>
)

// Rendering the app
ReactDOM.render(
    <App />,
    document.getElementById('root'),
)

unregister()
