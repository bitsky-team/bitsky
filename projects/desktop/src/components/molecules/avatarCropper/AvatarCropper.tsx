import React, { useReducer, Reducer, Dispatch } from 'react'
import { AnyAction } from 'redux'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { IStringTMap } from '../../../interfaces/generics'
import {
    AvatarCropperDialog,
    AvatarCropperContainer,
    AvatarOverlay,
    AvatarImage,
} from '../../'

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

interface IOwnProps {
    avatar: string;
    setAvatar: Function;
}

type IProps = IOwnProps

/**
 * AvatarCropper component
 *
 * The avatar selector
 */
export const AvatarCropper = ({ avatar, setAvatar }: IProps): JSX.Element => {
    const [state, dispatch]: [IState, Dispatch<AnyAction>] = useReducer(reducer, initialState)
    const { t }: UseTranslationResponse = useTranslation()

    /**
     * Method which toggles the dialog state
     */
    const toggleDialog = (): void =>
        dispatch({type: actions.TOGGLE_DIALOG})

    /**
     * Method which sets the avatar state
     * @param avatar The cropper's result
     */
    const setCropperAvatar = (avatar: string): void => {
        setAvatar(avatar)
        toggleDialog()
    }

    return (
        <>
            <AvatarCropperDialog
                open={state.open}
                setAvatar={setCropperAvatar}
                onClose={toggleDialog}
            />
            <AvatarCropperContainer>
                <AvatarOverlay data-testid="avatarOverlay" onClick={toggleDialog}>{t('dialogs.avatarCropper.modify')}</AvatarOverlay>
                <AvatarImage data-testid="avatar" src={avatar} alt="avatar" />
            </AvatarCropperContainer>
        </>
    )
}