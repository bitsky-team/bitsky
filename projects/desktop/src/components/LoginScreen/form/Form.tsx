import React from 'react'
import { EmailField, PasswordField } from './'
import { CenteredForm } from '../styles'

export const Form = ({handleSubmit}: {handleSubmit: () => void}) => (
    <CenteredForm onSubmit={handleSubmit}>
        <EmailField />
        <PasswordField />
        <button type='submit'>Test</button>
    </CenteredForm>
)
