import express, { Application } from 'express'
import { createServer, Server } from 'http'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import _ from 'lodash'

import { authRouter } from './routes/auth'
import { serverGreetings } from './constants/asciiArts'
import { commonMiddlewares } from './middlewares'
import { ServerLogger, logLevels, applyMiddleware } from './utils'

// Loading env variables
dotenv.config()

// Defining the server options
const version: string = '0.0.1'
const mode: string = _.upperFirst(process.env.NODE_ENV || 'production')
const port: number = 5030

// Creating an app and applying the middlewares on it
const app: Application = express()
applyMiddleware(commonMiddlewares, app)

// Applying the routers on the app
app.use('/auth', authRouter())

// Creating a server from the app
const server: Server = createServer(app)

// Injecting TypeORM and launch the server
createConnection().then(() => {
    if (!server.listening) {
        server.listen(port, () => {
            ServerLogger.log(serverGreetings, logLevels.MISC)
            ServerLogger.log(`Version: ${version}                                     ${mode} mode\n`, logLevels.MISC)
            ServerLogger.log(`Server running on port ${port}!`)
        })
    }
})

// Exporting the server for testing purpose
export default server
