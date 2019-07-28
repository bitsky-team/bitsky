import React, {useReducer} from 'react'
import { Button } from '@material-ui/core'
import {LanguageChooserDialog} from './LanguageChooserDialog'
import { useTranslation } from 'react-i18next'

const initialState = {
    open: false,
}

const actions = {
    TOGGLE_DIALOG: 'TOGGLE_DIALOG',
}

const reducer = (state: typeof initialState, action: IAction) => {
    switch (action.type) {
        case actions.TOGGLE_DIALOG:
            return {
                ...state,
                open: !state.open,
            }
        default:
            throw new Error('Action type not found')
    }
}

export const LanguageChooser = ({className}: {className?: string}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {i18n} = useTranslation()

    const toggleDialog = () => {
        dispatch({type: actions.TOGGLE_DIALOG})
    }

    const setLanguage = async (language: string) => {
        if (language) {
            localStorage.setItem('language', language)
            await i18n.changeLanguage(language)
        }
        toggleDialog()
    }

    return (
        <>
            <LanguageChooserDialog
                open={state.open}
                selectedValue={i18n.language}
                onClose={setLanguage}
            />
            <Button
                data-testid='translationToggler'
                className={className}
                onClick={toggleDialog}
            >
                {i18n.language}
            </Button>
        </>
    )
}
