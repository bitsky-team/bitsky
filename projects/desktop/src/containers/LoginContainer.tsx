import React from 'react'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import axios, { AxiosResponse } from 'axios'
import { connect } from 'react-redux'

import { Box, LoginLanguageChooser, Logo } from '../components/login/styles'
import { SingleFormContainer } from '../components/common/containers/SingleFormContainer'
import { BigTitle } from '../components/common/singleForm'
import { LeftSide, RightSide } from '../components/login/parts'
import { Form } from '../components/login/form'
import logo from '../assets/img/logo-small.png'
import { serverURL } from '../constants'
import { error } from '../helpers/logger'

interface IForm {
    email: string,
    password: string,
}

/**
 * Login Container
 *
 * React component connected to the redux store
 * Merges all the login form components to create
 * a useable screen
 */
export const LoginContainer = connect()((): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => ({__html: t('login.title')})

    const onSubmit = async (values: IForm | AnyObject): Promise<void | object> => {
        try {
            const response: AxiosResponse = await axios.post(
                `${serverURL}/auth/login`,
                values,
            )

            const {data: token}: AxiosResponse<string> = response
            localStorage.setItem('token', token)
        } catch (e) {
            switch (e.response.data.message) {
                case 'user_not_found':
                    return { email: t('login.error.userNotFound')}
                case 'incorrect_password':
                    return { password: t('login.error.incorrectPassword')}
                default:
                    error('Error while login: ')
                    error(e.response)
                    break
            }
        }
    }

    return (
        <SingleFormContainer>
            <Box>
                <LeftSide>
                    <Logo src={logo} alt='Bitsky' />
                    <LoginLanguageChooser />
                    <BigTitle dangerouslySetInnerHTML={getTitleContent()} />

                    <FinalForm
                        onSubmit={onSubmit}
                        initialValues={{ remember: false }}
                        render={({handleSubmit}: {handleSubmit: () => void}) =>
                            <Form handleSubmit={handleSubmit} />}
                    />
                </LeftSide>
                <RightSide>
                    <br/> {/* FIXME */}
                </RightSide>
            </Box>
        </SingleFormContainer>
    )
})
