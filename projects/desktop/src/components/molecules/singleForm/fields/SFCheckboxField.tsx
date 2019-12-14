import React from 'react'
import { Field } from 'react-final-form'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { CheckboxContainer, CheckboxInput, CheckboxCheckmark } from '../../../index'

/**
 * Checkbox input for single forms
 */
interface IOwnProps {
    name: string,
    textTranslationKey: string,
    invalid?: boolean,
}

type IProps = IOwnProps

export const SFCheckboxField = ({name, textTranslationKey, invalid }: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <>
            <Field
                name={name}
                component='input'
                type='checkbox'
            >
                {({input}) => (
                    <CheckboxContainer pose={invalid ? 'invalid' : 'valid'}>
                        {t(textTranslationKey)}
                        <CheckboxInput {...input} />
                        <CheckboxCheckmark />
                    </CheckboxContainer>
                )}
            </Field>
        </>
    )
}
