import React from 'react'
import {Field} from 'react-final-form'

export const CheckboxField = () => (
    <>
        <Field
            name='remember'
            component='input'
            type='checkbox'
        />
        <label>Se souvenir de moi</label>
    </>
)
