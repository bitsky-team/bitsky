import expressPromiseRouter from 'express-promise-router'
import { Request, Response, Router } from 'express'
import { authController } from '../controllers'
import { validateBody } from '../middlewares'
import { user as userSchema, login as loginSchema } from '../schemas'
import { User } from '../entities/User'
import bcrypt from 'bcrypt'
import { Boom } from '@hapi/boom'
import { checkError } from '../helpers/error'

export const authRouter: typeof Router = () => {
    const router: Router = expressPromiseRouter()

    router.post('/create', validateBody(userSchema), async (req: Request, res: Response) => {
        const response: string | Boom = await authController.create(req.body)
        checkError(res, response, () => res.json(response))
    })

    router.post('/login', validateBody(loginSchema), async (req: Request, res: Response) => {
        const response: string | Boom = await authController.login(req.body)
        checkError(res, response, () => res.json(response))
    })

    return router
}
