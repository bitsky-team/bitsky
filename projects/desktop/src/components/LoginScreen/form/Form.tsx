import React from 'react'
import { EmailField, PasswordField } from './'
import { CenteredForm, GradientButton } from '../styles'

export const Form = ({handleSubmit}: {handleSubmit: () => void}) => (
    <CenteredForm onSubmit={handleSubmit}>
        <EmailField />
        <PasswordField />
        <GradientButton
            type='submit'
            fullWidth
        >
            Connexion
        </GradientButton>
    </CenteredForm>
)
