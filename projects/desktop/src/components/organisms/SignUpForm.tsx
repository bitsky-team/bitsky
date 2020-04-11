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
    Alert,
} from '..'
import { required, validateMinimumLength } from '../../constants/validators'

interface IOwnProps {
    handleSubmit: () => void;
    invalid: { termsOfUse: boolean; };
    submitError: string;
}

type IProps = IOwnProps

/**
 * Sign Up form
 */
export const SignUpForm = ({handleSubmit, invalid, submitError}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            {submitError ? <Alert type='danger'>{submitError}</Alert> : ''}
            <InputsRow>
                <SFTextField
                    name='firstName'
                    label='signup.form.firstname'
                    validators={[required, validateMinimumLength(2)]}
                />
                <SFTextField
                    name='lastName'
                    label='signup.form.lastname'
                    validators={[required, validateMinimumLength(2)]}
                />
            </InputsRow>
            <InputsRow>
                <SFEmailField />
                <SFPasswordField />
            </InputsRow>

            <SFCheckboxField
                name='termsOfUse'
                textTranslationKey='signup.form.termsOfUse'
                invalid={invalid.termsOfUse}
            />

            <SubmitButton type='submit'>{t('signup.form.signup')}</SubmitButton>
            <FormLink to='/'>{t('signup.form.alreadySignedUp')}</FormLink>
        </CenteredForm>
    )
}
