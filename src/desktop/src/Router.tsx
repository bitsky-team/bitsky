import React from 'react'
import {TestScreen} from './screens/TestScreen'
import {BrowserRouter, Route} from 'react-router-dom'

export const Router = () => (
  <BrowserRouter>
    <Route exact path='/' component={TestScreen} />
  </BrowserRouter>
)
