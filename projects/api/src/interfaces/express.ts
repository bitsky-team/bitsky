import { Request } from 'express'

import { IToken } from '../interfaces'

export type RequestUser = IToken

export interface IAuthenticatedRequest extends Request {
	user?: RequestUser
}
