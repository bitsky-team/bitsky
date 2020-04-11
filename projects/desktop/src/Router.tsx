import React from 'react'
import { RouteProps } from 'react-router'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { LoginContainer } from './containers/LoginContainer'
import { SignUpContainer } from './containers/SignUpContainer'
import { isAuthenticated } from './helpers/auth'
import { error } from './helpers/logger'

/**
 * Component who redirect the user to the root URL
 *
 * @returns JSX.Element
 */
const notAuthenticated = (): JSX.Element => {
    error('You are not authenticated!')
    return <Redirect to='/' />
}

/**
 * Component who redirect the user if he doesn't have a token set
 *
 * @returns JSX.Element
 */
const PrivateRoute = ({ component, ...options }: RouteProps): JSX.Element => {
    const finalComponent = isAuthenticated() ? component : notAuthenticated
    return <Route {...options} component={finalComponent} />
}

const OnboardingTemporary = (): JSX.Element => {
    return <p>WIP</p>
}

export const Router = (): JSX.Element => (
    <BrowserRouter>
        <Route exact path='/' component={LoginContainer} />
        <Route exact path='/signup' component={SignUpContainer} />
        <PrivateRoute exact path='/onboarding' component={OnboardingTemporary} />
    </BrowserRouter>
)
