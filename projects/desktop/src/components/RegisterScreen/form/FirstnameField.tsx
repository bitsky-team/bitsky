import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {Field} from 'react-final-form'
import {composeValidators, required, validateMinimumLength} from '../../../constants/validators'
import {Input} from '../../LoginScreen/form'
import React from 'react'

export const FirstnameField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name='firstname'
            type='text'
            validate={composeValidators(required, validateMinimumLength(2))}
        >
            {({ input, meta }) => (
                <Input
                    label={t('register.form.firstname')}
                    variant='outlined'
                    invalid={meta.touched && meta.error ? meta.error : 0}
                    {...input}
                />
            )}
        </Field>
    )
}