import { ITheme } from '../interfaces/theme'
import { ISession } from '../interfaces/session'

export interface IReduxState {
    themeReducer: ITheme
    sessionReducer: ISession
}
