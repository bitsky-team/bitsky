import jwtDecode from 'jwt-decode'

import { IToken } from '../interfaces/token'
import { getSession } from '../redux/helpers/session'

/**
 * Function who retrieves the data from the token set
 * @returns object | undefined
 */
export const getTokenData = (): IToken | undefined => {
    const token: string | null = getSession().token

    if (!token) {
        return undefined
    }

    return jwtDecode(token)
}
