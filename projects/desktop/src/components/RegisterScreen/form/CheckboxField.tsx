import React from 'react'
import {Field} from 'react-final-form'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {CheckboxContainer, CheckboxInput, CheckboxCheckmark} from '../../common/SingleForm'

export const CheckboxField = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <>
            <Field
                name='termsOfUse'
                component='input'
                type='checkbox'
            >
                {({input}) => (
                    <CheckboxContainer>
                        {t('register.form.termsOfUse')}
                        <CheckboxInput {...input} />
                        <CheckboxCheckmark />
                    </CheckboxContainer>
                )}
            </Field>
        </>
    )
}
