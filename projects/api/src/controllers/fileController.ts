import util from 'util'
import zlib from 'zlib'
import buffer from 'buffer'

const deflate = util.promisify(zlib.deflate)

export const fileController = {
	compress: async (file: File) => {
		const blob = new buffer.Blob()

		console.log('coucou')
		return file
	},

	upload: (file: File) => {
		console.log('uploaded')
	},
}
