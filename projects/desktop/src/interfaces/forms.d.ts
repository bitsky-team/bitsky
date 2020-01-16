/**
 * Form interfaces
 */
type IInputProps = TextFieldProps & { visibilityFilter?: boolean }

interface IInputBorderProps {
    borderColor: ThemeSet | null
}

interface IInputWithErrorProps {
    active: boolean
}

type InvalidInputError = IInvalidInputErrrorObject | string

interface IInvalidInputErrrorObject {
    key: string,
    data: string,
}

interface IFinalFormRenderProps {
    handleSubmit: () => void,
    submitError: string,
}
