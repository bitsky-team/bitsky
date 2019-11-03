import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'
import { composeValidators, required, validateEmail } from '../../../constants/validators'
import {useTranslation, UseTranslationResponse} from 'react-i18next'

export const EmailField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name='email'
            type='email'
            validate={composeValidators(required, validateEmail)}
        >
            {({ input, meta }) => (
                <Input
                    label={t('login.form.emailAddress')}
                    variant='outlined'
                    invalid={meta.touched && (meta.error || meta.submitError) ? meta.error || meta.submitError : 0}
                    {...input}
                />
            )}
        </Field>
    )
}
