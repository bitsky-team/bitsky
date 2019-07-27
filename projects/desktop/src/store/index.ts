import {combineReducers, createStore} from 'redux'

// Add reducers here
const rootReducer = combineReducers(
    () => null,
)

export type AppState = ReturnType<typeof rootReducer>

export const configureStore = () => {
    return createStore(
        rootReducer,
    )
}
