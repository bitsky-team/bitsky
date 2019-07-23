import React, {Fragment, Suspense} from 'react'
import {App} from './App'

export const Router = () => (
  <Suspense fallback={<Fragment />}>
    <App />
  </Suspense>
)
