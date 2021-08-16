/**
 * Session actions
 */
export const SET_LANGUAGE: string = 'SET_LANGUAGE'
export const SET_TOKEN: string = 'SET_TOKEN'

/**
 * Action who dispatches an action who set the language
 * @param language string
 */
export const setLanguage: Function =
	(language: string): Function =>
	async (dispatch: Function): Promise<Function> =>
		new Promise((resolve: Function): void => {
			resolve(
				dispatch({
					payload: { language },
					type: SET_LANGUAGE,
				})
			)
		})

/**
 * Action who dispatches an action who set the token
 * @param token string
 */
export const setToken: Function =
	(token: string): Function =>
	async (dispatch: Function): Promise<Function> =>
		new Promise((resolve: Function): void => {
			resolve(
				dispatch({
					payload: { token },
					type: SET_TOKEN,
				})
			)
		})
