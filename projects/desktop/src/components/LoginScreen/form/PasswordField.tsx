import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'
import { composeValidators, required, validateMinimumLength } from '../../../constants/validators';
import {useTranslation, UseTranslationResponse} from 'react-i18next'

export const PasswordField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()
    
    return (
        <Field
            name='password'
            type='password'
            validate={composeValidators(required, validateMinimumLength(8))}
        >
            {({ input, meta }) => (
                <Input
                    label={t('login.form.password')}
                    variant='outlined'
                    invalid={meta.touched && meta.error ? meta.error : 0}
                    visibilityFilter={1}
                    {...input}
                />
            )}
        </Field>
    )
}