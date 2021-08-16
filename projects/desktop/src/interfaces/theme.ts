/**
 * Theme interfaces
 */

export interface ITheme {
	mode: string
}

export interface IThemeAction {
	type: string
	payload: ITheme
}

export interface IThemeReducer {
	[actionType: string]: (state: ITheme, payload: ITheme) => ITheme
}
