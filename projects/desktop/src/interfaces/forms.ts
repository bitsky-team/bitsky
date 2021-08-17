import { ThemeSet } from 'styled-theming'
import { TextFieldProps } from '@material-ui/core'
import { InputBaseComponentProps } from '@material-ui/core/InputBase'

/**
 * Form interfaces
 */
export type IInputProps = TextFieldProps & {
    visibilityFilter?: boolean
    invalid: InvalidInputError
    customComponent?: React.ElementType<InputBaseComponentProps>
}

export interface IInputBorderProps {
    borderColor: ThemeSet | null
}

export interface IInputWithErrorProps {
    active: boolean
}

export type InvalidInputError = IInvalidInputErrorObject | string

export interface IInvalidInputErrorObject {
    key: string
    data: string
}

export interface IFinalFormRenderProps {
    handleSubmit: () => void
    submitError: string
}
