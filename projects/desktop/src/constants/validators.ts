/**
 * Field validators
 */

export const required = (value: string): string | undefined =>
	value ? undefined : 'fieldError.required'

export const validateEmail = (value: string): string | undefined =>
	/^\S+@\S+$/.test(value) ? undefined : 'fieldError.emailNotValid'

export const validateMinimumLength =
	(minimum: number) =>
	(value: string): object | undefined =>
		value.length >= minimum ? undefined : { key: 'fieldError.tooShort', data: { min: minimum } }

/**
 * Function used to merge multiple validators
 * @param validators array
 */
export const composeValidators =
	(...validators: any[]) =>
	(value: string) =>
		validators.reduce(
			(error: string, validator: (value: string) => boolean) => error || validator(value),
			undefined
		)
