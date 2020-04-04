import React, { Dispatch, useReducer } from 'react'
import { InputAdornment, IconButton } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { AnyAction } from 'redux'

import { InputContainer, InputBorder, InputField, InputWithError, InputError } from '../../../'
import { colors } from '../../../../constants'
import { IStringTMap, IStringAnyMap } from '../../../../interfaces/generics'
import { IInputProps } from '../../../../interfaces/forms'

interface IState {
    visible: boolean;
}

type IOwnProps = IInputProps

type IProps = IOwnProps

const initialState: IState = {
    // Determine if the field content is visible or not (e.g. password)
    visible: false,
}

const actions: IStringTMap<string> = {
    TOGGLE_VISIBILITY: 'TOGGLE_VISIBILITY',
}

const reducer = (state: IStringAnyMap, action: AnyAction): IState => {
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

/**
 * Generic input component
 *
 * Can have a visibility filter which is an eye displayed at the right of the field
 * @param props Compnent's props
 */
export const Input = (props: IInputProps): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<AnyAction>] = useReducer(reducer, initialState)
    const { t }: UseTranslationResponse = useTranslation()

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

            {typeof invalid === 'string'
                ? <InputError data-testid='inputError'>{t(invalid)}</InputError>
                : <InputError data-testid='inputError'>{t(invalid.key, invalid.data)}</InputError>
            }
        </InputWithError>
    )
}
