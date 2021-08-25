import store from '../store'
import { ITheme } from '../../interfaces/theme'

/**
 * Methods who gets the store theme's value
 */
export const getTheme: Function = (): ITheme => ({
    mode: store.getState().themeReducer.mode,
})
export const getRawTheme: Function = (): object => ({
    theme: { mode: store.getState().themeReducer.mode },
})
