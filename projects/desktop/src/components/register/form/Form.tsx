import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { CenteredForm, FormLink, InputsRow } from '../../common/singleForm/index'
import { FirstnameField, LastnameField } from './'
import { EmailField, PasswordField } from '../../login/form'
import { SubmitButton } from '../styles'
import { CheckboxField } from './CheckboxField'

interface IOwnProps {
    handleSubmit: () => void,
    invalid: { termsOfUse: boolean },
}

type IProps = IOwnProps

/**
 * Register form
 */
export const Form = ({handleSubmit, invalid}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    return (
        <CenteredForm onSubmit={handleSubmit}>
            <InputsRow>
                <FirstnameField />
                <LastnameField />
            </InputsRow>
            <InputsRow>
                <EmailField />
                <PasswordField />
            </InputsRow>

            <CheckboxField invalid={invalid.termsOfUse} />

            <SubmitButton type='submit'>{t('register.form.register')}</SubmitButton>
            <FormLink to='/'>{t('register.form.alreadyRegistered')}</FormLink>
        </CenteredForm>
    )
}
