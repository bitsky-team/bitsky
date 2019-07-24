import React, { useReducer } from 'react'
import {
    InputContainer,
    InputBorder,
    InputField,
} from '../styles';
import {
    InputAdornment,
    IconButton,
} from '@material-ui/core'
import {
    VisibilityOff,
    Visibility,
} from '@material-ui/icons'

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

    return (
        <InputContainer>
            <InputBorder />
            
            {props.visibilityFilter
                ? (
                    <InputField
                        {...props}
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
                        {...props}
                    />
                )
            }
        </InputContainer>
    )
}
