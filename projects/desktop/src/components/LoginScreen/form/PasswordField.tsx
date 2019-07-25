import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'
import { composeValidators, required, validateMinimumLength } from '../../../constants/validators';

export const PasswordField = () => (
    <Field
        name='password'
        validate={composeValidators(required, validateMinimumLength(8))}
    >
        {({ input, meta }) => (
            <Input
                label='Mot de passe'
                variant='outlined'
                invalid={meta.touched && meta.error ? meta.error : 0}
                visibilityFilter={1}
                {...input}
            />
        )}
    </Field>
)
