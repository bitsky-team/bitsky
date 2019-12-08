import React from 'react'
import { Field } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { Input } from './'
import { composeValidators, required, validateEmail } from '../../../constants/validators'

/**
 * Email field of the login form
 */
// TODO: can be refactored into a generic component
export const EmailField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name='email'
            type='email'
            validate={composeValidators(required, validateEmail)}
        >
            {({ input, meta: {touched, error, submitError} }) => (
                <Input
                    label={t('login.form.emailAddress')}
                    variant='outlined'
                    invalid={touched && (error || submitError) ? error || submitError : false}
                    {...input}
                />
            )}
        </Field>
    )
}
