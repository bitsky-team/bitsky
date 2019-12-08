import { Reducer } from 'redux'
import { SET_THEME } from '../actions/theme'

/**
 * Theme reducers
 */

export const defaultState: IThemePayload = {
    theme: {
        mode: 'classic',
    },
}

interface IThemeAction extends IAction {
    payload: IThemePayload,
}

interface IThemeReducer {
    [actionType: string]: (state: IThemePayload, payload: IThemePayload) => IThemePayload,
}

const reducer: IThemeReducer = {
    [SET_THEME]: (state: IThemePayload, payload: IThemePayload): IThemePayload => ({
        ...state,
        theme: payload.theme,
    }),
}

export const themeReducer: Reducer<IThemePayload, IThemeAction> = (state: IThemePayload = defaultState, action: IThemeAction): IThemePayload => {
    const handler = reducer[action.type]
    return handler ? handler(state, action.payload) : state
}
