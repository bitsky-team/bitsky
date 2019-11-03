import { ServerLogger, logLevels } from './../utils/ServerLogger'
import { Boom } from '@hapi/boom'
import { Response } from 'express'

export const checkError = (res: Response, data: any, successCallback: Function) => {
    if (data instanceof Boom) {
        const {output: error}: Boom = data
        ServerLogger.log(
            `${error.payload.error} (${error.payload.statusCode}): ${error.payload.message}`,
            logLevels.ERR,
        )
        return res.status(error.statusCode).send(error.payload)
    }

    return successCallback()
}
