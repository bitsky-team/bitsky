import React from 'react'
import {Field} from 'react-final-form'
import {useTranslation} from 'react-i18next'
import {CheckboxContainer, CheckboxInput, CheckboxCheckmark} from '../styles'

export const CheckboxField = () => {
    const [t] = useTranslation()

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
