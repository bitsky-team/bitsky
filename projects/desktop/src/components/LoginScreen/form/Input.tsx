import React, {Dispatch, useReducer} from 'react'
import {
    InputContainer,
    InputBorder,
    InputField,
    InputWithError,
} from '../styles';
import {
    InputAdornment,
    IconButton,
} from '@material-ui/core'
import {
    VisibilityOff,
    Visibility,
} from '@material-ui/icons'
import { colors } from '../../../constants'
import { InputError } from '../styles'
import {useTranslation, UseTranslationResponse} from 'react-i18next'

interface IState {
    visible: boolean,
}
interface IProps {
    visibilityFilter: boolean,
    invalid: InvalidInputError,
    value: string,
}

const initialState: IState = {
    visible: false,
}

const actions: IStringTMap<string> = {
    TOGGLE_VISIBILITY: 'TOGGLE_VISIBILITY',
}

const reducer = (state: IStringAnyMap, action: IAction): IState => {
    switch (action.type) {
        case actions.TOGGLE_VISIBILITY:
            return {
                ...state,
                visible: !state.visible,
            }
        default:
            throw new Error('Action type not found')
    }
}

export const Input = (props: IInputProps): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<IAction>] = useReducer(reducer, initialState)
    const {t}: UseTranslationResponse = useTranslation()

    const { visibilityFilter, invalid, value, ...rest }: IProps = props
    
    return (
        <InputWithError
            data-testid='input'
            active={Boolean(invalid)}
        >
            <InputContainer>
                <InputBorder
                    data-testid='inputBorder'
                    borderColor={invalid ? colors.error : !value ? colors.grey : null}
                />
                
                {visibilityFilter
                    ? (
                        <InputField
                            {...rest}
                            value={value}
                            type={state.visible ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            edge='end'
                                            onClick={() => dispatch({type: actions.TOGGLE_VISIBILITY})}
                                        >
                                            {state.visible ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )
                    : (
                        <InputField
                            {...rest}
                            value={value}
                        />
                    )
                }
            </InputContainer>

            {Boolean(invalid) && (
                typeof invalid === 'string'
                    ? <InputError data-testid='inputError'>{t(invalid)}</InputError>
                    : <InputError data-testid='inputError'>{t(invalid.key, invalid.data)}</InputError>
            )}
        </InputWithError>
    )
}
