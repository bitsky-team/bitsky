import React, { useReducer } from 'react'
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
import { InputError } from '../styles';

const initialState = {
    visible: false,
}

const actions = {
    TOGGLE_VISIBILITY: 'TOGGLE_VISIBILITY',
}

const reducer = (state: IStringAnyMap, action: IAction) => {
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
    const [state, dispatch] = useReducer(reducer, initialState)
    const { visibilityFilter, invalid, value, ...rest } = props
    
    return (
        <InputWithError active={invalid}>
            <InputContainer>
                <InputBorder
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
                <InputError>{invalid}</InputError>
            )}
        </InputWithError>
    )
}
