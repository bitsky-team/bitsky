import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {LoginScreen} from './components/LoginScreen'
import {RegisterScreen} from './components/RegisterScreen'

export const Router = (): JSX.Element => (
  <BrowserRouter>
      <Route exact path='/' component={LoginScreen} />
      <Route exact path='/register' component={RegisterScreen} />
  </BrowserRouter>
)
