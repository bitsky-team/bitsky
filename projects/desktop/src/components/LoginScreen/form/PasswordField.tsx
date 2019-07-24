import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'

export const PasswordField = () => (
    <Field
        name='password'
    >
        {({ input, meta }) => (
            <Input
                label='Mot de passe'
                variant='outlined'
                invalid={meta.touched && meta.error}
                visibilityFilter
                {...input}
            />
        )}
    </Field>
)
