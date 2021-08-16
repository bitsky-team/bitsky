import { Response } from 'express'
import jwt from 'jsonwebtoken'

import { ServerLogger, logLevels } from '../utils'
import { secretKey } from '../constants/secret'
import { IAuthenticatedRequest, IToken } from '../interfaces'

/**
 * Authentication validation middleware
 *
 * Checks if the body's token exists and is valid
 * @param req Express Request
 * @param res Express Response
 * @param next Callback to call to continue the flow
 */
export const validateAuthentication =
	() => (req: IAuthenticatedRequest, res: Response, next: Function) => {
		const token: string = String(req.headers['x-access-token'] ?? req.headers.authorization ?? '')

		if (!token) {
			ServerLogger.log('Trying to access to a private route without token', logLevels.ERR)
			return res.status(403).json('no_token_provided')
		}

		try {
			req.user = jwt.verify(token, secretKey) as IToken
			next()
		} catch {
			ServerLogger.log('Trying to access to a private route with an invalid token', logLevels.ERR)
			return res.status(403).json('invalid_token')
		}
	}
