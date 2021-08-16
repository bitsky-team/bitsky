import { Boom } from '@hapi/boom'
import { Response } from 'express'

import { ServerLogger, logLevels } from './../utils/ServerLogger'

/**
 * Function used to log an error in the terminal
 * e.g. when a controller method returns an error
 * By default, as the error is handled by a catch
 * the terminal will not output it
 *
 * @param res Response the Express Response
 * @param data any the data to check
 * @param successCallback Function action to do when there is no error
 * @returns Function | Response
 */
export const checkError = (
	res: Response | Response[],
	data: any,
	successCallback: Function
): Function | Response => {
	const check = (res: Response) => {
		if (data instanceof Boom) {
			const { output: error }: Boom = data
			ServerLogger.log(
				`${error.payload.error} (${error.payload.statusCode.toString()}): ${error.payload.message}`,
				logLevels.ERR
			)
			return res.status(error.statusCode).send(error.payload)
		}
	}

	if (res instanceof Array) {
		for (const r of res) {
			check(r)
		}
	} else {
		check(res)
	}

	return successCallback()
}
