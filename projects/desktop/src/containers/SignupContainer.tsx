import React, { useContext, useReducer, Dispatch } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import axios, { AxiosResponse } from 'axios'
import _ from 'lodash'
import { connect } from 'react-redux'
import { FORM_ERROR } from 'final-form'
import { AnyAction } from 'redux'
import { ThemeContext } from 'styled-components'

import {
    SingleFormContainer,
    BigTitle,
    SignUpBox,
    Logo,
    SFLanguageChooser,
    SignUpForm,
} from '../components'
import { serverURL } from '../constants'
import { error } from '../helpers/logger'
import { IStringTMap, IDangerousHTMLContent } from '../interfaces/generics'
import { IFinalFormRenderProps } from '../interfaces/forms'
import { getLogo } from '../helpers/logo'
import { ITheme } from '../interfaces/theme'

interface IState {
    invalidForm: {
        termsOfUse: boolean;
    };
}

interface IForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    termsOfUse?: boolean;
}

const initialState: IState = {
    invalidForm: {
        termsOfUse: false,
    },
}

const actions: IStringTMap<string> = {
    SET_INVALID_FORM: 'SET_INVALID_FORM',
}

const reducer = (state: typeof initialState, action: AnyAction): IState => {
    switch (action.type) {
    case actions.SET_INVALID_FORM:
        return {
            ...state,
            invalidForm: action.payload,
        }
    default:
        throw new Error('Action type not found')
    }
}

/**
 * Sign Up Container
 *
 * React component connected to the redux store
 * Merges all the sign up form components to create
 * a useable screen
 */
export const SignUpContainer = connect()((): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<AnyAction>] = useReducer(reducer, initialState)
    const {t}: UseTranslationResponse = useTranslation()
    const theme: ITheme = useContext(ThemeContext)

    const getTitleContent = (): IDangerousHTMLContent => ({__html: t('signup.title')})

    const setInvalidForm = (value: object): void => {
        dispatch({type: actions.SET_INVALID_FORM, payload: value})
    }

    const onSubmit = async (values: IForm | AnyObject): Promise<void | object> => {
        const {termsOfUse}: {termsOfUse?: boolean;} = values

        setInvalidForm({
            termsOfUse: !termsOfUse,
        })

        if(termsOfUse) {
            const formData: IForm = _.pick(values, ['email', 'password', 'firstName', 'lastName'])

            try {
                const response: AxiosResponse = await axios.post(
                    `${serverURL}/auth/signup`,
                    formData,
                )

                const {data}: AxiosResponse<any> = response
                localStorage.setItem('token', data.token)
            } catch (e) {
                if (!e.response) {
                    return {
                        [FORM_ERROR]: t('serverError'),
                    }
                }

                switch (e.response.data.message) {
                case 'email_already_taken':
                    return { email: t('signup.error.emailAlreadyTaken')}
                default:
                    error('Error while signup: ')
                    error(e.response)
                    break
                }
            }
        }
    }

    return (
        <SingleFormContainer>
            <SignUpBox>
                <Logo src={getLogo(theme)} alt='Bitsky' />
                <SFLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />
                <FinalForm
                    onSubmit={onSubmit}
                    initialValues={{ termsOfUse: false }}
                    render={({
                        handleSubmit,
                        submitError,
                    }: IFinalFormRenderProps) => <SignUpForm handleSubmit={handleSubmit} invalid={state.invalidForm} submitError={submitError} />}
                />
            </SignUpBox>
        </SingleFormContainer>
    )
})