import express, { Application } from 'express'
import { createServer, Server } from 'http'
import dotenv from 'dotenv'
import { createConnection, Connection } from 'typeorm'
import _ from 'lodash'

import { authRouter } from './routes/auth'
import { serverGreetings } from './constants/asciiArts'
import { commonMiddlewares } from './middlewares'
import { ServerLogger, logLevels, applyMiddleware } from './utils'

dotenv.config()

const version: string = '0.0.1'
const mode: string = _.upperFirst(process.env.NODE_ENV || 'production')
const port: number = 5030

const app: Application = express()
applyMiddleware(commonMiddlewares, app)

app.use('/auth', authRouter())

const server: Server = createServer(app)

createConnection().then(() => {
    if (!server.listening) {
        server.listen(port, () => {
            ServerLogger.log(serverGreetings, logLevels.MISC)
            ServerLogger.log(`Version: ${version}                                     ${mode} mode\n`, logLevels.MISC)
            ServerLogger.log(`Server running on port ${port}!`)
        })
    }
})

export default server
