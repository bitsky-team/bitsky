import { Request } from '@nestjs/common';

import { UserFromRequest } from './user';

export interface AuthenticatedRequest extends Request {
  user: UserFromRequest;
}
