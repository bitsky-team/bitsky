import React from 'react'
import { EmailField, PasswordField, CheckboxField } from './'
import {FormLink, GradientButton} from '../../common/SingleForm'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {LoginForm} from '../styles'

interface IOwnProps {
    handleSubmit: () => void
}

type IProps = IOwnProps

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
