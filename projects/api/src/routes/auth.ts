import expressPromiseRouter from 'express-promise-router'
import { Request, Response, Router } from 'express'
import { authController } from '../controllers'
import { validateBody } from '../middlewares'
import { user as userSchema } from '../schemas'
import { User } from '../entities/User'

export const authRouter: typeof Router = () => {
    const router: Router = expressPromiseRouter()

    router.post('/create', validateBody(userSchema), async (req: Request, res: Response) => {
        try {
            const user: User = await authController.create(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).send(e)
        }
    })

    return router
}
