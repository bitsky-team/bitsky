import React from 'react'
import { RouteProps } from 'react-router'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { LoginContainer } from './containers/LoginContainer'
import { SignUpContainer } from './containers/SignUpContainer'
import { error } from './helpers/logger'
import { IReduxState } from './interfaces/redux'

/**
 * Component who redirect the user to the root URL
 *
 * @returns JSX.Element
 */
const notAuthenticated = (): JSX.Element => {
    error('You are not authenticated!')
    return <Redirect to='/' />
}

interface IStoreProps {
    auth?: boolean | undefined;
}

/**
 * Component who redirect the user if he doesn't have a token set
 *
 * @returns JSX.Element
 */
type PrivateRouteProps = RouteProps & IStoreProps
const PrivateRoute = ({ auth, component, ...options }: PrivateRouteProps): JSX.Element =>
    <Route {...options} component={auth ? component : notAuthenticated} />

const OnboardingTemporary = (): JSX.Element => {
    return <p>WIP</p>
}

const mapStateToProps = ({sessionReducer}: IReduxState): IStoreProps => ({
    auth: Boolean(sessionReducer.token),
})

export const Router = connect(mapStateToProps, null)(({auth}: IStoreProps): JSX.Element => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={LoginContainer} />
            <Route exact path='/signup' auth={auth} component={SignUpContainer} />
            <PrivateRoute exact path='/onboarding' auth={auth} component={OnboardingTemporary} />
        </BrowserRouter>
    )
})
