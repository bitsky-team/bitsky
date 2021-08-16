import express, { Application } from 'express'
import { createServer, Server } from 'http'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import _ from 'lodash'

import { authRouter } from './routes/auth'
import { fileRouter } from './routes/file'
import { serverGreetings } from './constants/asciiArts'
import { commonMiddlewares } from './middlewares'
import { ServerLogger, logLevels, applyMiddleware } from './utils'
import { testConfig, productionConfig } from './database'

// Loading env variables
dotenv.config()

// Defining the server options
const version: string = '0.0.1'
const mode: string = _.upperFirst(process.env.NODE_ENV ?? 'production')
const port: number = 5030

// Creating an app and applying the middlewares on it
const app: Application = express()
applyMiddleware(commonMiddlewares, app)

// Applying the routers on the app
app.use('/auth', authRouter())
app.use('/file', fileRouter())

// Creating a server from the app
const server: Server = createServer(app)
const databaseConfig = process.env.NODE_ENV === 'test' ? testConfig : productionConfig

// Injecting TypeORM and launch the server
export const launch = async (greetings: boolean = true): Promise<void> => {
	return createConnection(databaseConfig).then(() => {
		if (!server.listening) {
			server.listen(port, () => {
				if (greetings) {
					ServerLogger.log(serverGreetings, logLevels.MISC)
					ServerLogger.log(
						`Version: ${version}                                     ${mode} mode\n`,
						logLevels.MISC
					)
					ServerLogger.log(`Server running on port ${port.toString()}!`)
				}
			})
		}
	})
}

if (process.env.NODE_ENV !== 'test') {
	launch().catch((e: Error) => console.error(e))
}

// Exporting the server for testing purpose
export default server
