import { combineReducers, createStore } from 'redux'
import { themeReducer } from '../reducers'

// Add reducers here
const rootReducer = combineReducers({
    themeReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(
    rootReducer,
    // This is needed to enable the chrome redux debug tool
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)

export const configureStore = () => {
    return store
}

export default store
