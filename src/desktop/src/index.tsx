import React from 'react'
import ReactDOM from 'react-dom'
import {unregister} from './serviceWorker'
import * as Sentry from '@sentry/browser'
import './i18n'
import {Router} from './Router'

Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN});

ReactDOM.render(
  <Router />,
  document.getElementById('root'),
)

unregister()
