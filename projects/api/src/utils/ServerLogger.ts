import {Request, Response} from 'express'
import {DateTime} from 'luxon'
import clc from 'cli-color'
import { IStringTMap } from '../interfaces/generic'

export const logLevels: IStringTMap<Number> = {
    'MISC': 0,
    'INFO': 1,
    'WARN': 2,
    'ERR': 3,
}

export class ServerLogger {
    static log(message: String, level = logLevels.INFO) {
        const datetime: String = DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss')

        switch(level) {
            case logLevels.MISC:
                console.log(message)
            break

            case logLevels.INFO:
                console.log(clc.cyanBright(`[bitsky] @ [${datetime}] ${message}`))
            break

            case logLevels.WARN:
                console.log(clc.yellowBright(`[bitsky] @ [${datetime}] ${message}`))
            break

            case logLevels.ERR:
                console.log(clc.redBright(`[bitsky] @ [${datetime}] ${message}`))
            break
        }
    }

    static newRequest() {
        return (req: Request, res: Response, next: () => any) => {
            const authorization = req.get('Authorization')
            const from = req.ip
            ServerLogger.log(`${from} - ${req.method} on ${req.originalUrl} ${authorization ? '(Authorization: ${authorization})' : ''}`)
            next()
        }
    }

    static error() {
        return (err: String, req: Request, res: Response, next: () => any) => {
            res.status(500)
            ServerLogger.log(err, logLevels.ERR)
            next()
        }
    }
}
