import React from 'react'
import { Box, LoginLanguageChooser, Logo } from './styles'
import { SingleFormContainer } from '../common/Containers/SingleFormContainer'
import { BigTitle } from '../common/SingleForm'
import { LeftSide, RightSide } from './parts'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import { Form } from './form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import logo from '../../assets/img/logo-small.png'
import axios, { AxiosResponse } from 'axios'
import { serverURL } from '../../constants'

interface IForm {
    email: string,
    password: string,
}

export const LoginScreen = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => {
        return {__html: t('login.title')};
    }

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
                    console.log('Error while login: ', e.response)
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
                        render={({handleSubmit}) => <Form handleSubmit={handleSubmit} />}
                    />
                </LeftSide>
                <RightSide>
                    <br/>
                </RightSide>
            </Box>
        </SingleFormContainer>
    )
}
