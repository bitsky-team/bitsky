import { Reducer } from 'redux'

import { SET_THEME } from '../actions/theme'
import { ITheme, IThemeReducer, IThemeAction } from '../../interfaces/theme'

/**
 * Theme reducers
 */

export const defaultState: ITheme = {
    mode: 'classic',
}

const reducer: IThemeReducer = {
    [SET_THEME]: (state: ITheme, payload: ITheme): ITheme => ({
        ...state,
        ...payload,
    }),
}

export const themeReducer: Reducer<ITheme, IThemeAction> = (state: ITheme = defaultState, action: IThemeAction): ITheme => {
    const handler = reducer[action.type]
    return handler ? handler(state, action.payload) : state
}
