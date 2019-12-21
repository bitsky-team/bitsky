/**
 * Theme interfaces
 */

interface ITheme {
    mode: string,
}

interface IThemeAction extends IAction {
    payload: ITheme,
}

interface IThemeReducer {
    [actionType: string]: (state: ITheme, payload: ITheme) => ITheme,
}
