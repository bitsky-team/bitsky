import { Request, Response } from 'express'
import { DateTime } from 'luxon'
import clc from 'cli-color'
import { IStringTMap } from '../interfaces/generic'

/**
 * More explicit way to identify a log level
 */
export const logLevels: IStringTMap<number> = {
    MISC: 0,
    INFO: 1,
    WARN: 2,
    ERR: 3,
}

/**
 * Function who disable the no-console tslint rule
 * used to avoid doing it a lot
 *
 * @param message string
 */
const log = (message: string) => {
    // tslint:disable-next-line: no-console
    console.log(message)
}

/**
 * Class ServerLogger
 *
 * This class is used to display things
 * in the terminal
 */
export class ServerLogger {

    /**
     * Method who logs a given message with a given color in the terminal
     *
     * @param message string the message to log
     * @param level number will determine the color of the message
     */
    static log(message: string, level: number = logLevels.INFO) {
        const datetime: string = DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss')

        switch(level) {
            case logLevels.MISC:
                log(message)
                break

            case logLevels.INFO:
                log(clc.cyanBright(`[bitsky] @ [${datetime}] ${message}`))
                break

            case logLevels.WARN:
                log(clc.yellowBright(`[bitsky] @ [${datetime}] ${message}`))
                break

            case logLevels.ERR:
                log(clc.redBright(`[bitsky] @ [${datetime}] ${message}`))
                break

            default:
                throw new Error('Unknown log level')
        }
    }

    /**
     * Method who log a request into the terminal
     *
     * @returns Function a middleware
     */
    static newRequest() {
        return (req: Request, _: Response, next: () => any) => {
            const authorization = req.get('Authorization')
            const from = req.ip
            ServerLogger.log(`${from} - ${req.method} on ${req.originalUrl} ${authorization ? `(Authorization: ${authorization})` : ''}`)
            next()
        }
    }

    /**
     * Method who log an error into the terminal
     *
     * @returns Function a middleware
     */
    static error() {
        return (err: string, _: Request, res: Response, next: () => any) => {
            res.status(500)
            ServerLogger.log(err, logLevels.ERR)
            next()
        }
    }
}
