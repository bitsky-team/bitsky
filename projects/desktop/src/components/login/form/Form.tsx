import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { EmailField, PasswordField, CheckboxField } from './'
import { FormLink, GradientButton } from '../../common/singleForm/index'
import { LoginForm } from '../styles'

interface IOwnProps {
    handleSubmit: () => void
}

type IProps = IOwnProps

/**
 * Login form
 *
 * @param props
 */
export const Form = ({handleSubmit}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <LoginForm onSubmit={handleSubmit}>
            <EmailField />
            <PasswordField />
            <CheckboxField />
            <GradientButton
                type='submit'
                fullWidth
            >
                {t('login.form.login')}
            </GradientButton>
            <FormLink to='/register'>{t('login.form.notRegistered')}</FormLink>
        </LoginForm>
    )
}
