import { Request, Response } from 'express'
import { Schema } from 'joi'
import { ServerLogger, logLevels } from '../utils'

export const validateBody = (schema: Schema) => (req: Request, res: Response, next: Function) => {
    const { error } = schema.validate(req.body, {abortEarly: false})

    if (error) {
        let message = error.details.length > 0
                      ? error.details.reduce((acc, val) => acc + val.message + ', ', '').replace(/,\s*$/, '')
                      : error.details[0].message

        ServerLogger.log('Bad request while validating the request\'s body', logLevels.ERR)
        ServerLogger.log(message, logLevels.ERR)
        ServerLogger.log(`Received data: ${JSON.stringify(req.body)}`, logLevels.ERR)
        return res.status(400).json(message)
    }

    next()
}
