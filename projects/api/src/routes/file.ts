import expressPromiseRouter from 'express-promise-router'
import { Request, Response, Router } from 'express'
import { Boom } from '@hapi/boom'

import { checkError } from '../helpers/error'
import { fileController } from '../controllers/fileController'

const { upload, compress } = fileController

export const fileRouter: typeof Router = (): Router => {
	const router: Router = expressPromiseRouter()

	router.post('/upload', async (req: Request, res: Response) => {
		const responses = []
		const files = Object.values(req.files ?? {})

		for (const file of files) {
			const response: object | Boom = (await upload(compress(file))) as any
			responses.push(response)
		}

		checkError(res, responses, (): Response<string> => res.status(200).send())
	})

	return router
}
