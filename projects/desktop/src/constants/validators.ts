export const required = (value: string): string | undefined  => {
    return value ? undefined : 'fieldError.required'
}

export const validateEmail = (value: string): string | undefined => {
    return /^\S+@\S+$/.test(value) ? undefined : 'fieldError.emailNotValid'
}

export const validateMinimumLength =  (minimum: number) => (value: string): object | undefined => {
    return value.length >= minimum ? undefined : {key: `fieldError.tooShort`, data: {min: minimum}}
}

export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error: string, validator: (value: string) => boolean) => error || validator(value), undefined)
