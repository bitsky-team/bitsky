import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {LoginScreen} from './components/LoginScreen'

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Route exact path='/' component={LoginScreen} />
  </BrowserRouter>
)
