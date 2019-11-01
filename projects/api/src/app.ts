import express, {Application} from 'express'
import { authRouter } from './routes/auth'
import { serverGreetings } from './constants/asciiArts'
import { createConnection } from 'typeorm'
import { commonMiddlewares } from './middlewares'
import {ServerLogger, logLevels, applyMiddleware} from './utils'

const version: string = '0.0.1'
const mode: string = 'Development'
const port : number = 5030

export const startApp = () => {
    const router: Application = express()

    applyMiddleware(commonMiddlewares, router)

    router.use('/auth', authRouter())

    return router
}

createConnection().then(() => {
    startApp().listen(port, () => {
        ServerLogger.log(serverGreetings, logLevels.MISC)
        ServerLogger.log(`Version: ${version}                                     ${mode} mode\n`, logLevels.MISC)
        ServerLogger.log(`Server running on port ${port} !`)
    })
})
