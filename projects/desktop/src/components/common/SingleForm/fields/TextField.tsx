import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { Field } from 'react-final-form'

import { composeValidators } from '../../../../constants/validators'
import { Input } from '../atoms/input/Input'

/**
 * Text field for single form
 */
interface IOwnProps {
    name: string,
    label: string,
    validators: any[],
}

type IProps = IOwnProps

export const TextField = ({name, label, validators}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <Field
            name={name}
            type='text'
            validate={composeValidators(...validators)}
        >
            {({ input, meta }) => (
                <Input
                    label={t(label)}
                    variant='outlined'
                    invalid={meta.touched && meta.error ? meta.error : 0}
                    {...input}
                />
            )}
        </Field>
    )
}
