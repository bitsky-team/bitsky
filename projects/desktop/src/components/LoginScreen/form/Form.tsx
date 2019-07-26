import React from 'react'
import { EmailField, PasswordField } from './'
import { CenteredForm, GradientButton } from '../styles'
import { useTranslation } from 'react-i18next'

export const Form = ({handleSubmit}: {handleSubmit: () => void}): JSX.Element => {
    const [t] = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            <EmailField />
            <PasswordField />
            <GradientButton
                type='submit'
                fullWidth
            >
                {t('login.form.login')}
            </GradientButton>
        </CenteredForm>
    )
}
