export const required = (value: string): string | undefined  => {
    // TODO: Error translation
    return value ? undefined : 'required'
}

export const validateEmail = (value: string): string | undefined => {
    // TODO: Error translation
    return /^\S+@\S+$/.test(value) ? undefined : 'Incorrect email'
}

export const validateMinimumLength =  (minimum: number) => (value: string): string | undefined => {
    // TODO: Error translation
    return value.length >= minimum ? undefined : `This is too short ! (min. ${minimum} characters)`
}

export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error: string, validator: (value: string) => boolean) => error || validator(value), undefined)
