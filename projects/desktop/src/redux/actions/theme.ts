/**
 * Theme actions
 */
export const SET_THEME: string = 'SET_THEME'

/**
 * Action who dispatches an action who set the theme
 * @param theme object
 */
export const setTheme: Function = (theme: string): Function => async (dispatch: Function): Promise<Function> =>
    new Promise((resolve: Function): void => {
        resolve(dispatch({
            payload: {
                mode: theme,
            },
            type: SET_THEME,
        }))
    })
