import React from 'react'
import { Field } from 'react-final-form'
import { Input } from './'

export const EmailField = () => (
    <Field
        name='email'
    >
        {({ input, meta }) => (
            <Input
                label='Adresse email'
                type='email'
                variant='outlined'
                invalid={meta.touched && meta.error}
                {...input}
            />
        )}
    </Field>
)
