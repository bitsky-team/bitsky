import { UserFromRequest } from './user'

export interface AuthenticatedRequest {
    user: UserFromRequest
}
