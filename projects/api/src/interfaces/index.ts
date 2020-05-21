/**
 * Exporting all the interfaces to minimize
 * the imports path
 */

export {
    IStringTMap,
    IStringAnyMap,
} from './generic'

export {
    IUser,
} from './user'

export {
    RequestUser,
    IAuthenticatedRequest,
} from './express'

export {
    IToken
} from './token'