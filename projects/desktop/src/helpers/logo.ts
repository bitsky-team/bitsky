import logoClassic from '../assets/img/logo-small-classic.png'
import logoDark from '../assets/img/logo-small-dark.png'
import { ITheme } from './../interfaces/theme'

export const getLogo = (theme: ITheme): string => {
    switch (theme.mode) {
        case 'classic':
            return logoClassic
        case 'dark':
            return logoDark
        default:
            return logoClassic // will be the user's logo if he sets one
    }
}
