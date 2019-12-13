import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { CenteredForm, FormLink, InputsRow, CheckboxField, TextField, EmailField, PasswordField } from '../../common/singleForm/index'
import { required, validateMinimumLength } from '../../../constants/validators'
import { SubmitButton } from '../styles'

interface IOwnProps {
    handleSubmit: () => void,
    invalid: { termsOfUse: boolean },
}

type IProps = IOwnProps

/**
 * Register form
 */
export const Form = ({handleSubmit, invalid}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            <InputsRow>
                <TextField
                    name='firstName'
                    label='register.form.firstname'
                    validators={[required, validateMinimumLength(2)]}
                />
                <TextField
                    name='lastName'
                    label='register.form.lastname'
                    validators={[required, validateMinimumLength(2)]}
                />
            </InputsRow>
            <InputsRow>
                <EmailField />
                <PasswordField />
            </InputsRow>

            <CheckboxField
                name='termsOfUse'
                textTranslationKey='register.form.termsOfUse'
                invalid={invalid.termsOfUse}
            />

            <SubmitButton type='submit'>{t('register.form.register')}</SubmitButton>
            <FormLink to='/'>{t('register.form.alreadyRegistered')}</FormLink>
        </CenteredForm>
    )
}
