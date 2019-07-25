import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'
import { composeValidators, required, validateEmail } from '../../../constants/validators'

export const EmailField = () => (
    <Field
        name='email'
        type='email'
        validate={composeValidators(required, validateEmail)}
    >
        {({ input, meta }) => (
            <Input
                label='Adresse email'
                variant='outlined'
                invalid={meta.touched && meta.error ? meta.error : 0}
                {...input}
            />
        )}
    </Field>
)
