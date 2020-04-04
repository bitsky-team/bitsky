import { Router } from 'express'

type Wrapper = ((router: Router) => void)

/**
 * Function who apply a bunch of middlewares on an app
 *
 * @param middleware the array of middlewares to iterate on
 * @param router the app where to apply the middleware
 */
export const applyMiddleware = (middleware: Wrapper[], router: Router): void => {
    for (const m of middleware) {
        m(router)
    }
}
