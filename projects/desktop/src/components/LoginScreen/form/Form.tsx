import React from 'react'
import { EmailField, PasswordField, CheckboxField } from './'
import {CenteredForm, FormLink, GradientButton} from '../styles'
import { useTranslation } from 'react-i18next'

export const Form = ({handleSubmit}: {handleSubmit: () => void}): JSX.Element => {
    const [t] = useTranslation()

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
