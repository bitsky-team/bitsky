import { NestFactory } from '@nestjs/core'
import dotenv from 'dotenv'

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const { version }: { version: string } = require('../package.json')

import { AppModule } from './modules'
import { ServerLogger, logLevels } from './utils/ServerLogger'
import { serverGreetings } from './constants/art'

async function bootstrap(): Promise<void> {
    dotenv.config()

    const app = await NestFactory.create(AppModule, {
        cors: true,
        logger: ['error'],
    })

    app.use(ServerLogger.newRequest())
    app.use(ServerLogger.error())

    const port = process.env.HTTP_PORT ?? 5030

    await app.listen(port)

    ServerLogger.log(serverGreetings, logLevels.MISC)
    ServerLogger.log(
        `Version: ${version}                                     ${process.env.MODE} mode\n`,
        logLevels.MISC
    )
    ServerLogger.log(`Server started on port ${port}`)
}

bootstrap().catch((e: Error) => console.error('Could not start Bitsky API', e))
