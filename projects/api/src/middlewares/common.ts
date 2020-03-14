import { Router, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import parser from 'body-parser'
import compression from 'compression'

import { ServerLogger } from '../utils'

/**
 * Helmet middleware
 *
 * Secure the Express apps by setting various HTTP headers
 * As the authors say: "It's not a silver bullet, but it can help!"
 * @param router the application
 */
const handleHelmet = (router: Router) => {
    router.use(helmet())
}

/**
 * CORS middleware
 *
 * Enable cross-origin requests
 * @param router the application
 */
const handleCors = (router: Router) => {
    router.use(cors({ credentials: true, origin: true }))
}

/**
 * BodyParser middleware
 *
 * Enable some data types to be used as a body request
 * @param router the application
 */
const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.json())
}

/**
 * Compression middleware
 *
 * Returns the compression middleware using the given options.
 * The middleware will attempt to compress response bodies for
 * all request that traverse through the middleware, based on the given options.
 *
 * This middleware will never compress responses that include a Cache-Control or x-no-compression header
 * with the no-transform directive, as compressing will transform the body.
 * @param router the application
 */
const handleCompression = (router: Router) => {
    router.use(compression({
        filter: (req: Request, res: Response) =>
            req.headers['x-no-compression'] ? false : compression.filter(req, res),
    }))
}

/**
 * New Request middleware
 *
 * Log every request in the terminal
 * @param router the application
 */
const handleNewRequestLog = (router: Router) => {
    router.use(ServerLogger.newRequest())
}

/**
 * Error Handling middleware
 *
 * Log every error in the terminal
 * @param router the application
 */
const handleServerErrorLog = (router: Router) => {
    router.use(ServerLogger.error())
}

/**
 * Exporting all the middlewares into an array
 * which will be iterated when applying it
 */
export const commonMiddlewares: ((router: Router) => void)[] = [
    handleHelmet,
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleNewRequestLog,
    handleServerErrorLog,
]
