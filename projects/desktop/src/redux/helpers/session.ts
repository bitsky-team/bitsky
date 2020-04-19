import store from '../store'
import { ISession } from '../../interfaces/session'

/**
 * Methods who gets the store session's value
 */
export const getSession: Function = (): ISession => store.getState().sessionReducer
