import React, { useContext } from 'react'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import axios, { AxiosResponse } from 'axios'
import { connect } from 'react-redux'
import { FORM_ERROR } from 'final-form'
import { ThemeContext } from 'styled-components'

import {
    LoginBox,
    SFLanguageChooser,
    Logo,
    SingleFormContainer,
    BigTitle,
    LeftSide,
    RightSide,
    LoginForm,
} from '../components'
import { serverURL } from '../constants'
import { error } from '../helpers/logger'
import { setTheme } from '../redux/actions/theme'
import { setToken } from '../redux/actions/session'
import { IDangerousHTMLContent } from '../interfaces/generics'
import { IFinalFormRenderProps } from '../interfaces/forms'
import { getLogo } from '../helpers/logo'
import { ITheme } from '../interfaces/theme'

interface IForm {
    email: string;
    password: string;
}

interface IDispatchProps {
    setTheme: (theme: string) => Promise<Function>;
    setToken: (token: string) => Promise<Function>;
}

type IProps = IDispatchProps

/**
 * Login Container
 *
 * React component connected to the redux store
 * Merges all the login form components to create
 * a useable screen
 */

const mapDispatchToProps = (dispatch: Function): IDispatchProps => ({
    setTheme: async (theme: string): Promise<Function> => dispatch(setTheme(theme)),
    setToken: async (token: string): Promise<Function> => dispatch(setToken(token)),
})

export const LoginContainer = connect(null, mapDispatchToProps)(({setTheme, setToken}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()
    const theme: ITheme = useContext(ThemeContext)
    const getTitleContent = (): IDangerousHTMLContent => ({__html: t('login.title')})

    const onSubmit = async (values: IForm | AnyObject): Promise<void | object> => {
        try {
            const response: AxiosResponse = await axios.post(
                `${serverURL}/auth/login`,
                values,
            )

            const {data}: AxiosResponse<any> = response
            await setToken(data.token)
            await setTheme(data.theme)
        } catch (e) {
            if (!e.response) {
                return {
                    [FORM_ERROR]: t('serverError'),
                }
            }

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
            <LoginBox>
                <LeftSide>
                    <Logo src={getLogo(theme)} alt='Bitsky' />
                    <SFLanguageChooser />
                    <BigTitle dangerouslySetInnerHTML={getTitleContent()} />

                    <FinalForm
                        onSubmit={onSubmit}
                        initialValues={{ remember: false }}
                        render={({
                            handleSubmit,
                            submitError,
                        }: IFinalFormRenderProps) => <LoginForm handleSubmit={handleSubmit} submitError={submitError} />}
                    />
                </LeftSide>
                <RightSide>
                    <br/> {/* FIXME */}
                </RightSide>
            </LoginBox>
        </SingleFormContainer>
    )
})
