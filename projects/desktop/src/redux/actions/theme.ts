export const SET_THEME: string = 'SET_THEME'

export const setTheme: Function = (theme: object): Function => (dispatch: Function): Promise<Function> =>
    new Promise((resolve: Function): void => {
        resolve(dispatch({
            payload: {
                theme,
            },
            type: SET_THEME,
        }))
    })
