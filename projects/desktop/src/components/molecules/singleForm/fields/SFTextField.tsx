import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { Field, FieldRenderProps } from 'react-final-form'

import { composeValidators } from '../../../../constants/validators'
import { Input } from '../../../'

/**
 * Text field for single form
 */
interface IOwnProps {
	name: string
	label: string
	validators: any[]
	customComponent?: any
	multiline?: boolean
}

type IProps = IOwnProps

export const SFTextField = ({
	name,
	label,
	validators,
	customComponent,
	multiline,
}: IProps): JSX.Element => {
	const { t }: UseTranslationResponse = useTranslation()

	return (
		<Field name={name} type="text" validate={composeValidators(...validators)}>
			{({ input, meta }: FieldRenderProps<any>) => (
				<Input
					label={t(label)}
					variant="outlined"
					invalid={
						meta.touched && (meta.error || meta.submitError)
							? meta.error || meta.submitError
							: false
					}
					customComponent={customComponent}
					multiline={multiline}
					{...input}
				/>
			)}
		</Field>
	)
}
