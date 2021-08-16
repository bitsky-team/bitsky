/**
 * Method who logs an error and disable the tslint rule
 * to avoid doing it a lot of times
 * @param msg string
 */
export const error: (msg: string) => void = (msg: string) => {
	// tslint:disable-next-line: no-console
	console.error(msg)
}
