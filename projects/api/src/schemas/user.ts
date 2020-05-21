import Joi, { Schema } from 'joi'

/**
 * User schema used for sign up
 */
export const signup: Schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

/**
 * User schema used for login
 */
export const login: Schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    remember: Joi.boolean().required(),
})

/**
 * Schema used for onboarding
 */
export const onboarding: Schema = Joi.object({
    username: Joi.string().required(),
    birthdate: Joi.string().required(),
    avatar: Joi.string().required(),
    description: Joi.string().required(),
})

