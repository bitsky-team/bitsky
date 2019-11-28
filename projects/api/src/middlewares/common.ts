import { Router, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import parser from 'body-parser'
import compression from 'compression'
import { ServerLogger } from '../utils'

const handleHelmet = (router: Router) => {
    router.use(helmet())
}

const handleCors = (router: Router) => {
    router.use(cors({ credentials: true, origin: true, }))
}

const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.json())
}

const handleCompression = (router: Router) => {
    router.use(compression({
        filter: (req: Request, res: Response) =>
            req.headers['x-no-compression'] ? false : compression.filter(req, res)
    }))
}

const handleNewRequestLog = (router: Router) => {
    router.use(ServerLogger.newRequest())
}

const handleServerErrorLog = (router: Router) => {
    router.use(ServerLogger.error())
}

export const commonMiddlewares: Array<(router: Router) => void> = [
    handleHelmet,
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleNewRequestLog,
    handleServerErrorLog,
]
