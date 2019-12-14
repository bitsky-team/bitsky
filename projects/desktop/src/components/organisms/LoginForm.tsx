import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import {
    LoginFormContainer,
    FormLink,
    GradientButton,
    SFCheckboxField,
    SFEmailField,
    SFPasswordField,
} from '../'

interface IOwnProps {
    handleSubmit: () => void
}

type IProps = IOwnProps

/**
 * Login form
 *
 * @param props
 */
export const LoginForm = ({handleSubmit}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <SFEmailField />
            <SFPasswordField />
            <SFCheckboxField
                name='remember'
                textTranslationKey='login.form.rememberMe'
            />
            <GradientButton
                type='submit'
                fullWidth
            >
                {t('login.form.login')}
            </GradientButton>
            <FormLink to='/register'>{t('login.form.notRegistered')}</FormLink>
        </LoginFormContainer>
    )
}
