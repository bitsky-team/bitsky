import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import {
    LoginFormContainer,
    FormLink,
    GradientButton,
    SFCheckboxField,
    SFEmailField,
    SFPasswordField,
    Alert,
} from '../'

interface IOwnProps {
    handleSubmit: () => void;
    submitError: string;
}

type IProps = IOwnProps

/**
 * Login form
 *
 * @param props
 */
export const LoginForm = ({handleSubmit, submitError}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            {submitError ? <Alert type='danger'>{submitError}</Alert> : ''}
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
            <FormLink to='/signup'>{t('login.form.notSignedUp')}</FormLink>
        </LoginFormContainer>
    )
}
