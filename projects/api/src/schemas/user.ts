import Joi, { Schema } from 'joi'

export const user: Schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export const login: Schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    remember: Joi.boolean().required(),
})
