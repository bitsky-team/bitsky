import expressPromiseRouter from 'express-promise-router'
import { Request, Response, Router } from 'express'
import { Boom } from '@hapi/boom'

import { authController } from '../controllers'
import { validateAuthentication, validateBody } from '../middlewares'
import {
    signup as signupSchema,
    login as loginSchema,
    onboarding as onboardingSchema,
} from '../schemas'
import { checkError } from '../helpers/error'
import { IAuthenticatedRequest } from '../interfaces'

/**
 * Authentication Router
 *
 * Set various routes to handle the authentication
 * @returns Router
 */
export const authRouter: typeof Router = (): Router => {
    const router: Router = expressPromiseRouter()

    router.post('/signup', validateBody(signupSchema), async (req: Request, res: Response) => {
        const response: object | Boom = await authController.signup(req.body)
        checkError(res, response, (): Response<string> => res.json(response))
    })

    router.post('/login', validateBody(loginSchema), async (req: Request, res: Response) => {
        const response: object | Boom = await authController.login(req.body)
        checkError(res, response, (): Response<string> => res.json(response))
    })

    router.post('/onboarding', validateAuthentication(), validateBody(onboardingSchema), async (req: IAuthenticatedRequest, res: Response) => {
        const response: object | Boom = await authController.onboarding(req.user!, req.body)
        checkError(res, response, (): Response<string> => res.json(response))
    })

    return router
}
