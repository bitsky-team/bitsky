import React, { useReducer, Reducer, MouseEvent, Dispatch } from 'react'
import { Button } from '@material-ui/core'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'

import { LanguageChooserContainer, LanguageChooserDialog } from '../../'
import { IStringTMap } from '../../../interfaces/generics'
import { setLanguage } from '../../../redux/actions/session'

interface IState {
    open: boolean
}

const initialState: IState = {
    // Determine if the modal is opened or not
    open: false,
}

const actions: IStringTMap<string> = {
    TOGGLE_DIALOG: 'TOGGLE_DIALOG',
}

interface IDispatchProps {
    setLanguage: (language: string) => Promise<Function>
}

type IProps = IDispatchProps & {
    className?: string
}

/**
 * Reducer who returns a new state depending on the action
 */
const reducer: Reducer<typeof initialState, AnyAction> = (
    state: typeof initialState,
    action: AnyAction
): IState => {
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
const mapDispatchToProps = (dispatch: Function): IDispatchProps => ({
    setLanguage: async (language: string): Promise<Function> => dispatch(setLanguage(language)),
})

export const LanguageChooser = connect(
    null,
    mapDispatchToProps
)(({ className, setLanguage }: IProps): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<AnyAction>] = useReducer(reducer, initialState)
    const { i18n }: UseTranslationResponse = useTranslation()

    /**
     * Method who toggles the dialog state
     */
    const toggleDialog: (event?: MouseEvent) => void = (): void => {
        return dispatch({ type: actions.TOGGLE_DIALOG })
    }

    /**
     * Method who changes the language in redux and in i18n
     * We add it in redux to keep the language chosen by
     * the user when he leaves the app thanks to
     * redux-persist
     * @param language string
     */
    const setSessionLanguage: (language: string) => void = async (
        language: string
    ): Promise<void> => {
        if (language) {
            await setLanguage(language)
            await i18n.changeLanguage(language)
        }
        toggleDialog()
    }

    return (
        <LanguageChooserContainer>
            <LanguageChooserDialog
                open={state.open}
                selectedValue={i18n.language}
                setLanguage={setSessionLanguage}
                onClose={toggleDialog}
            />
            <Button data-testid="translationToggler" className={className} onClick={toggleDialog}>
                {i18n.language}
            </Button>
        </LanguageChooserContainer>
    )
})
