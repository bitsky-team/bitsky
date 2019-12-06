import store from '../store'

/**
 * Methods who gets the store theme's value
 */
export const getRawTheme: Function = (): IThemePayload => ({ theme: store.getState().themeReducer.theme })
export const getTheme: Function = (): ITheme => store.getState().themeReducer.theme.mode
