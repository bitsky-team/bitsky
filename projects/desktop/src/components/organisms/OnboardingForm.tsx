import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { CenteredForm, InputsRow, SFTextField, SFDateField, SubmitButton, Alert } from '..'
import { required, validateMinimumLength } from '../../constants/validators'

interface IOwnProps {
	handleSubmit: () => void
	submitError: string
}

type IProps = IOwnProps

export const OnboardingForm = ({ handleSubmit, submitError }: IProps): JSX.Element => {
	const { t }: UseTranslationResponse = useTranslation()

	return (
		<CenteredForm onSubmit={handleSubmit}>
			{submitError ? <Alert type="danger">{submitError}</Alert> : ''}
			<InputsRow>
				<SFTextField
					name="username"
					label="onboarding.form.username"
					validators={[required, validateMinimumLength(2)]}
				/>
				<SFDateField name="birthdate" label="onboarding.form.birthdate" validators={[required]} />
			</InputsRow>
			<SFTextField
				name="description"
				label="onboarding.form.description"
				validators={[required, validateMinimumLength(5)]}
				multiline
			/>
			<SubmitButton type="submit">{t('onboarding.form.finish')}</SubmitButton>
		</CenteredForm>
	)
}
