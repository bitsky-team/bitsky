import jwtDecode from 'jwt-decode'

import { getSession } from '../redux/helpers/session'

/**
 * Function who checks if the user has a token set or not
 * @returns boolean
 */
export const isAuthenticated = (): boolean => !!getSession().token

/**
 * Function who retrieves the data from the token set
 * @returns object | undefined
 */
export const getTokenData = (): object | undefined => {
    const token: string | null = getSession().token

    if (!token) {
        return undefined
    }

    return jwtDecode(token)
}
