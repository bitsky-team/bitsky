import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { Input } from '../../../'
import { composeValidators, required, validateEmail } from '../../../../constants/validators'

/**
 * Email field for the single form
 */
export const SFEmailField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name='email'
            type='email'
            validate={composeValidators(required, validateEmail)}
        >
            {({ input, meta }: FieldRenderProps<any>) => (
                <Input
                    label={t('login.form.emailAddress')}
                    variant='outlined'
                    invalid={meta.touched && (meta.error || meta.submitError) ? meta.error || meta.submitError : false}
                    {...input}
                />
            )}
        </Field>
    )
}
