import React, { useReducer } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { SingleFormContainer } from '../common/Containers/SingleFormContainer'
import {  BigTitle } from '../common/SingleForm'
import { Box, Logo, RegisterLanguageChooser } from './styles'
import logo from '../../assets/img/logo-small.png'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import { Form } from './form'
import axios, { AxiosResponse } from 'axios'
import { serverURL } from '../../constants'
import _ from 'lodash'

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

export const RegisterScreen = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => {
        return {__html: t('register.title')};
    }

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

                const {data: token}: AxiosResponse<string> = response
                localStorage.setItem('token', token)
            } catch (e) {
                switch (e.response.data.message) {
                    case 'email_already_taken':
                        return { email: t('register.error.emailAlreadyTaken')}
                    default:
                        console.log('Error while register: ', e.response)
                        break
                }
            }
        }
    }

    return (
        <SingleFormContainer>
            <Box>
                <Logo src={logo} alt='Bitsky' />
                <RegisterLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />
                <FinalForm
                    onSubmit={onSubmit}
                    initialValues={{ termsOfUse: false }}
                    render={({handleSubmit}) => <Form handleSubmit={handleSubmit} invalid={state.invalidForm} />}
                />
            </Box>
        </SingleFormContainer>
    )
}
