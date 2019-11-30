import React from 'react'
import { Field } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { CheckboxContainer, CheckboxInput, CheckboxCheckmark } from '../../common/singleForm'

export const CheckboxField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <>
            <Field
                name='remember'
                component='input'
                type='checkbox'
            >
                {({input}) => (
                    <CheckboxContainer>
                        {t('login.form.rememberMe')}
                        <CheckboxInput {...input} />
                        <CheckboxCheckmark />
                    </CheckboxContainer>
                )}
            </Field>
        </>
    )
}
