import jwtDecode from 'jwt-decode'

import { getSession } from '../redux/helpers/session'

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
