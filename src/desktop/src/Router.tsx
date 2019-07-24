import React, {Fragment, Suspense} from 'react'
import {TestScreen} from './screens/TestScreen'
import {BrowserRouter, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

export const Router = () => (
  <Suspense fallback={<Fragment />}>
    <ThemeProvider theme={{mode: 'classic'}}>
      <BrowserRouter>
        <Route exact path='/' component={TestScreen} />
      </BrowserRouter>
    </ThemeProvider>
  </Suspense>
)
