import React from 'react'
import {CenteredForm, FormLink, InputsRow} from '../../common/SingleForm'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {FirstnameField, LastnameField} from './'
import {EmailField, PasswordField} from '../../LoginScreen/form'
import {SubmitButton} from '../styles'
import {CheckboxField} from './CheckboxField'

interface IOwnProps {
    handleSubmit: () => void
}

type IProps = IOwnProps

export const Form = ({handleSubmit}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            <InputsRow>
                <FirstnameField />
                <LastnameField />
            </InputsRow>
            <InputsRow>
                <EmailField />
                <PasswordField />
            </InputsRow>

            <CheckboxField />

            <SubmitButton type='submit'>{t('register.form.register')}</SubmitButton>
            <FormLink to='/'>{t('register.form.alreadyRegistered')}</FormLink>
        </CenteredForm>
    )
}
