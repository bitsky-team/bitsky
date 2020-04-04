import { Request, Response } from 'express'
import { Schema, ValidationError, ValidationErrorItem } from 'joi'

import { ServerLogger, logLevels } from '../utils'

/**
 * Body validation closure
 *
 * Determines if a request's body is following a given schema's rules
 * @param schema Schema the schema to compare
 * @returns Function (a middleware)
 */
export const validateBody = (schema: Schema) => (req: Request, res: Response, next: Function) => {
    const { error }: {error: ValidationError;} = schema.validate(req.body, {abortEarly: false})

    if (error !== null) {
        const message: string = error.details.length > 0
            ? error.details.reduce((acc: string, val: ValidationErrorItem) => acc + val.message + ', ', '').replace(/,\s*$/, '')
            : error.details[0].message

        ServerLogger.log('Bad request while validating the request\'s body', logLevels.ERR)
        ServerLogger.log(message, logLevels.ERR)
        ServerLogger.log(`Received data: ${JSON.stringify(req.body)}`, logLevels.ERR)
        return res.status(400).json(message)
    }

    next()
}
