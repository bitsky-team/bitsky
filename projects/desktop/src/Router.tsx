import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {LoginScreen} from './components/LoginScreen/index'

export const Router = () => (
  <BrowserRouter>
    <Route exact path='/' component={LoginScreen} />
  </BrowserRouter>
)
