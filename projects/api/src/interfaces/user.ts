import { User } from '../modules/user/user.entity';

export type UserLogInData = Pick<User, 'email' | 'password'> & {
  remember: boolean;
};

export type UserSignUpData = Pick<
  User,
  'email' | 'password' | 'firstName' | 'lastName'
>;

export type UserOnboardingData = Pick<
  User,
  'username' | 'birthdate' | 'avatar' | 'description'
>;

export type UserFromRequest = Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'email' | 'theme' | 'username'
>;
