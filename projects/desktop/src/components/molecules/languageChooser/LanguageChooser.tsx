import React, { useReducer, Reducer, MouseEvent, Dispatch } from 'react'
import { Button } from '@material-ui/core'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { AnyAction } from 'redux'

import { LanguageChooserDialog } from './LanguageChooserDialog'
import { IStringTMap } from '../../../interfaces/generics'

interface IState {
    open: boolean;
}

const initialState: IState = {
    // Determine if the modal is opened or not
    open: false,
}

const actions: IStringTMap<string> = {
    TOGGLE_DIALOG: 'TOGGLE_DIALOG',
}

/**
 * Reducer who returns a new state depending on the action
 */
const reducer: Reducer<typeof initialState, AnyAction> = (state: typeof initialState, action: AnyAction): IState => {
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

/**
 * LanguageChooser component
 *
 * Displays a button who opens the language chooser dialog
 * @param props Component's props
 */
export const LanguageChooser = ({className}: {className?: string;}): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<AnyAction>] = useReducer(reducer, initialState)
    const {i18n}: UseTranslationResponse = useTranslation()

    /**
     * Method who toggle the dialog state
     */
    const toggleDialog: (event?: MouseEvent) => void = (): void => {
        return dispatch({type: actions.TOGGLE_DIALOG})
    }

    /**
     * Method who change the language in the localStorage and in i18n
     * We add it in the language storage to keep the language chosen by
     * the user when he leaves the app
     * @param language string
     */
    const setLanguage: (value: string) => void = async (language: string): Promise<void> => {
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
                setLanguage={setLanguage}
                onClose={toggleDialog}
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
