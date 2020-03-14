import { ThemeSet } from 'styled-theming'
import { TextFieldProps } from '@material-ui/core'

/**
 * Form interfaces
 */
export type IInputProps = TextFieldProps & {
    visibilityFilter?: boolean,
    invalid: InvalidInputError,
}

export interface IInputBorderProps {
    borderColor: ThemeSet | null
}

export interface IInputWithErrorProps {
    active: boolean
}

export type InvalidInputError = IInvalidInputErrorObject | string

export interface IInvalidInputErrorObject {
    key: string,
    data: string,
}

export interface IFinalFormRenderProps {
    handleSubmit: () => void,
    submitError: string,
}
