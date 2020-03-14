import React from 'react'
import { Field } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { Input } from '../../../'
import { composeValidators, required, validateMinimumLength } from '../../../../constants/validators'

/**
 * Password field of the login for;
 */
export const SFPasswordField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name='password'
            type='password'
            validate={composeValidators(required, validateMinimumLength(8))}
        >
            {({ input, meta: {touched, error, submitError} }) => (
                <Input
                    label={t('login.form.password')}
                    variant='outlined'
                    invalid={touched && (error || submitError) ? error || submitError : false}
                    visibilityFilter={true}
                    {...input}
                />
            )}
        </Field>
    )
}
