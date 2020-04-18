import { Reducer } from 'redux'

import { SET_LANGUAGE, SET_TOKEN } from '../actions/session'
import { ISession, ISessionAction, ISessionReducer } from '../../interfaces/session'

/**
 * Session reducers
 */

export const defaultState: ISession = {
    language: 'en',
}

const reducer: ISessionReducer = {
    [SET_LANGUAGE]: (state: ISession, payload: ISession): ISession => ({
        ...state,
        language: payload.language,
    }),
    [SET_TOKEN]: (state: ISession, payload: ISession): ISession => ({
        ...state,
        token: payload.token,
    }),
}

export const sessionReducer: Reducer<ISession, ISessionAction> = (state: ISession = defaultState, action: ISessionAction): ISession => {
    const handler = reducer[action.type]
    return handler instanceof Function ? handler(state, action.payload) : state
}
