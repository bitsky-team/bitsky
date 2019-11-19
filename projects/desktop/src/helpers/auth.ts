import jwtDecode from 'jwt-decode'

export const isAuthenticated = (): boolean => !!localStorage.getItem('token')

export const getTokenData = (): object | undefined => {
    const token: string | null = localStorage.getItem('token')

    if (!token) {
        return undefined
    }

    return jwtDecode(token)
}
