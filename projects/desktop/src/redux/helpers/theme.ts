import store from '../store'

export const getRawTheme: Function = (): IThemePayload => ({ theme: store.getState().themeReducer.theme })
export const getTheme: Function = (): ITheme => store.getState().themeReducer.theme.mode
