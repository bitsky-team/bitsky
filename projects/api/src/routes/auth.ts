import expressPromiseRouter from 'express-promise-router'
import { Request, Response, Router } from 'express'
import { Boom } from '@hapi/boom'

import { authController } from '../controllers'
import { validateBody } from '../middlewares'
import { user as userSchema, login as loginSchema } from '../schemas'
import { checkError } from '../helpers/error'

/**
 * Authentication Router
 *
 * Set various routes to handle the authentication
 * @returns Router
 */
export const authRouter: typeof Router = (): Router => {
    const router: Router = expressPromiseRouter()

    router.post('/create', validateBody(userSchema), async (req: Request, res: Response) => {
        const response: object | Boom = await authController.create(req.body)
        checkError(res, response, () => res.json(response))
    })

    router.post('/login', validateBody(loginSchema), async (req: Request, res: Response) => {
        const response: object | Boom = await authController.login(req.body)
        checkError(res, response, () => res.json(response))
    })

    return router
}
