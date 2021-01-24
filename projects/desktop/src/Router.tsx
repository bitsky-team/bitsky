import React from 'react'
import { RouteProps } from 'react-router'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { LoginContainer } from './containers/LoginContainer'
import { SignUpContainer } from './containers/SignUpContainer'
import { OnboardingContainer } from './containers/OnboardingContainer'
import { error } from './helpers/logger'
import { IReduxState } from './interfaces/redux'

const NotAuthenticated = (): JSX.Element => {
    error('You are not authenticated!')
    return <Redirect to='/' />
}

const Authenticated = (): JSX.Element => {
    error('You are already authenticated!')
    return <Redirect to='/activity_feed' />
}

interface IStoreProps {
    auth?: boolean | undefined;
}

type PrivateRouteProps = RouteProps & IStoreProps

const AuthenticatedRoute = ({ auth, component, ...options }: PrivateRouteProps): JSX.Element =>
    <Route {...options} component={ auth ? component : NotAuthenticated } />

const NotAuthenticatedRoute = ({ auth, component, ...options }: PrivateRouteProps): JSX.Element =>
    <Route {...options} component={auth ? Authenticated : component } />

const mapStateToProps = ({sessionReducer}: IReduxState): IStoreProps => ({
    auth: Boolean(sessionReducer.token),
})

const X = (): JSX.Element => <p>coucou</p>

export const Router = connect(mapStateToProps, null)(({auth}: IStoreProps): JSX.Element => {
    return (
        <BrowserRouter>
            <NotAuthenticatedRoute exact path='/' component={LoginContainer} />
            <NotAuthenticatedRoute exact path='/signup' component={SignUpContainer} />
            <AuthenticatedRoute exact path='/onboarding' auth={auth} component={OnboardingContainer} />
            <AuthenticatedRoute exact path='/activity_feed' auth={auth} component={X} />
        </BrowserRouter>
    )
})
