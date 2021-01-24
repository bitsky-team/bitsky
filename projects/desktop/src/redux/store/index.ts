import { combineReducers, createStore, Reducer, applyMiddleware, Store, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'

import { themeReducer, sessionReducer } from '../reducers'
import { IReduxState } from '../../interfaces/redux'
import { IThemeAction } from './../../interfaces/theme'
import { ISessionAction } from './../../interfaces/session'

type ReducerAction = IThemeAction
                    | ISessionAction

// Add reducers here
const rootReducer: Reducer<IReduxState, ReducerAction> = combineReducers({
    themeReducer,
    sessionReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer)

export type AppState = ReturnType<typeof rootReducer>

const extensionCompose: any | undefined = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = extensionCompose ?? compose

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)

export const configureStore = (): Store => store

export default store
