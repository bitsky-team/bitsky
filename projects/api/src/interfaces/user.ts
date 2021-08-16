/**
 * User interfaces
 *
 * All the interface related to the user
 * go here
 */

export interface IUser {
	id?: number
	firstName: string
	lastName: string
	email: string
	password: string
	remember?: boolean
	theme?: string
	username?: string
	birthdate?: string
	avatar?: string
	description?: string
	token?: string
}
