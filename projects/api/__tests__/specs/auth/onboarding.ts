import request, { Response } from 'supertest'
import server from '../../../src/app'
import { johnDoe } from '../../mocks/user'
import { IUser } from '../../../src/interfaces'

describe('POST /auth/onboarding', () => {
	it('Invalid birthdate (year < 1900) generates `invalid_birthdate` error message', async () => {
		const data: Partial<IUser> = {
			avatar: 'placeholder',
			username: 'TheTester',
			birthdate: '01/01/1899',
			description: 'My super description',
		}

		// Sending the data
		const signupRes: Response = await request(server).post('/auth/signup').send(johnDoe).expect(200)
		const token: string = signupRes.body.token

		const onboardingRes: Response = await request(server)
			.post('/auth/onboarding')
			.set('Authorization', token)
			.send(data)
			.expect(400)

		expect(onboardingRes.body.message).toBe('invalid_birthdate')
	})

	it('Invalid birthdate (year > actual year) generates `invalid_birthdate` error message', async () => {
		const data: Partial<IUser> = {
			avatar: 'placeholder',
			username: 'TheTester',
			birthdate: '01/01/2900',
			description: 'My super description',
		}

		// Sending the data
		const signupRes: Response = await request(server).post('/auth/signup').send(johnDoe).expect(200)
		const token: string = signupRes.body.token

		const onboardingRes: Response = await request(server)
			.post('/auth/onboarding')
			.set('Authorization', token)
			.send(data)
			.expect(400)

		expect(onboardingRes.body.message).toBe('invalid_birthdate')
	})

	it('Invalid birthdate (incomplete) generates `invalid_birthdate` error message', async () => {
		const data: Partial<IUser> = {
			avatar: 'placeholder',
			username: 'TheTester',
			birthdate: '01/01/199_',
			description: 'My super description',
		}

		// Sending the data
		const signupRes: Response = await request(server).post('/auth/signup').send(johnDoe).expect(200)
		const token: string = signupRes.body.token

		const onboardingRes: Response = await request(server)
			.post('/auth/onboarding')
			.set('Authorization', token)
			.send(data)
			.expect(400)

		expect(onboardingRes.body.message).toBe('invalid_birthdate')
	})

	it('Valid data successfully onboard and generates `username_already_taken` on the second attempt', async () => {
		const data: Partial<IUser> = {
			avatar: 'placeholder',
			username: 'TheTester',
			birthdate: '01/01/1997',
			description: 'My super description',
		}

		// Sending the data
		const signupRes: Response = await request(server).post('/auth/signup').send(johnDoe).expect(200)
		const token: string = signupRes.body.token

		// First onboarding is ok
		await request(server)
			.post('/auth/onboarding')
			.set('Authorization', token)
			.send(data)
			.expect(200)

		// We resend the same data in order to have the username taken error
		const onboardingRes: Response = await request(server)
			.post('/auth/onboarding')
			.set('Authorization', token)
			.send(data)
			.expect(400)

		expect(onboardingRes.body.message).toBe('username_already_taken')
	})
})
