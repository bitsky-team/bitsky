import React from 'react'
import { EmailField, PasswordField, CheckboxField } from './'
import {CenteredForm, FormLink, GradientButton} from '../styles'
import {useTranslation, UseTranslationResponse} from 'react-i18next'

interface ILoginFormProps {
    handleSubmit: () => void
}

export const Form = ({handleSubmit}: ILoginFormProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
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
        </CenteredForm>
    )
}
