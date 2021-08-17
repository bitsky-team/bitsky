import { DateTime } from 'luxon';
import jwt from 'jsonwebtoken';

import { User } from '../modules/user/user.entity';
import { secretKey } from '../constants/secret';

export const generateToken = (
  data: Partial<User>,
  remember?: boolean,
): string => {
  const today: number = DateTime.local().toSeconds();
  const dayInSeconds: number = 86400;

  return jwt.sign(
    {
      ...data,
      exp: remember ? today + 30 * dayInSeconds : today + dayInSeconds,
    },
    secretKey,
  );
};
