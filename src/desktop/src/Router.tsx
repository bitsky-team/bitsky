import React, {Fragment, Suspense} from 'react'
import {TestScreen} from './screens/TestScreen'
import {BrowserRouter, Route} from 'react-router-dom'

export const Router = () => (
  <Suspense fallback={<Fragment />}>
    <BrowserRouter>
      <Route exact path='/' component={TestScreen} />
    </BrowserRouter>
  </Suspense>
)
