import React, { useReducer } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import axios, { AxiosResponse } from 'axios'
import _ from 'lodash'
import { connect } from 'react-redux'

import {
    SingleFormContainer,
    BigTitle,
    RegisterBox,
    Logo,
    SFLanguageChooser,
    RegisterForm,
} from '../components'
import logo from '../assets/img/logo-small.png'
import { serverURL } from '../constants'
import { error } from '../helpers/logger'
import { FORM_ERROR } from 'final-form'

interface IState {
    invalidForm: {
        termsOfUse: boolean,
    },
}

interface IForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    termsOfUse?: boolean,
}

const initialState: IState = {
    invalidForm: {
        termsOfUse: false,
    },
}

const actions: IStringTMap<string> = {
    SET_INVALID_FORM: 'SET_INVALID_FORM',
}

const reducer = (state: typeof initialState, action: IAction): IState => {
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
 * Register Container
 *
 * React component connected to the redux store
 * Merges all the register form components to create
 * a useable screen
 */
export const RegisterContainer = connect()((): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => ({__html: t('register.title')})

    const setInvalidForm = (value: object): void => {
        dispatch({type: actions.SET_INVALID_FORM, payload: value})
    }

    const onSubmit = async (values: IForm | AnyObject): Promise<void | object> => {
        const {termsOfUse}: {termsOfUse?: boolean} = values

        setInvalidForm({
            termsOfUse: !termsOfUse,
        })

        if(termsOfUse) {
            const data: IForm = _.pick(values, ['email', 'password', 'firstName', 'lastName'])

            try {
                const response: AxiosResponse = await axios.post(
                    `${serverURL}/auth/create`,
                    data,
                )

                const {data: {token}}: AxiosResponse<any> = response
                localStorage.setItem('token', token)
            } catch (e) {
                if (!e.response) {
                    return {
                        [FORM_ERROR]: t('serverError'),
                    }
                }

                switch (e.response.data.message) {
                    case 'email_already_taken':
                        return { email: t('register.error.emailAlreadyTaken')}
                    default:
                        error('Error while register: ')
                        error(e.response)
                        break
                }
            }
        }
    }

    return (
        <SingleFormContainer>
            <RegisterBox>
                <Logo src={logo} alt='Bitsky' />
                <SFLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />
                <FinalForm
                    onSubmit={onSubmit}
                    initialValues={{ termsOfUse: false }}
                    render={({
                        handleSubmit,
                        submitError,
                    }: IFinalFormRenderProps) => <RegisterForm handleSubmit={handleSubmit} invalid={state.invalidForm} submitError={submitError} />}
                />
            </RegisterBox>
        </SingleFormContainer>
    )
})
