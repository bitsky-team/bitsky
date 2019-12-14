import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import {
    CenteredForm,
    FormLink,
    InputsRow,
    SFCheckboxField,
    SFTextField,
    SFEmailField,
    SFPasswordField,
    SubmitButton,
} from '../'
import { required, validateMinimumLength } from '../../constants/validators'

interface IOwnProps {
    handleSubmit: () => void,
    invalid: { termsOfUse: boolean },
}

type IProps = IOwnProps

/**
 * Register form
 */
export const RegisterForm = ({handleSubmit, invalid}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            <InputsRow>
                <SFTextField
                    name='firstName'
                    label='register.form.firstname'
                    validators={[required, validateMinimumLength(2)]}
                />
                <SFTextField
                    name='lastName'
                    label='register.form.lastname'
                    validators={[required, validateMinimumLength(2)]}
                />
            </InputsRow>
            <InputsRow>
                <SFEmailField />
                <SFPasswordField />
            </InputsRow>

            <SFCheckboxField
                name='termsOfUse'
                textTranslationKey='register.form.termsOfUse'
                invalid={invalid.termsOfUse}
            />

            <SubmitButton type='submit'>{t('register.form.register')}</SubmitButton>
            <FormLink to='/'>{t('register.form.alreadyRegistered')}</FormLink>
        </CenteredForm>
    )
}
