import jwtDecode from 'jwt-decode'

/**
 * Function who checks if the user has a token set or not
 * @returns boolean
 */
export const isAuthenticated = (): boolean => !!localStorage.getItem('token')

/**
 * Function who retrieves the data from the token set
 * @returns object | undefined
 */
export const getTokenData = (): object | undefined => {
    const token: string | null = localStorage.getItem('token')

    if (!token) {
        return undefined
    }

    return jwtDecode(token)
}
