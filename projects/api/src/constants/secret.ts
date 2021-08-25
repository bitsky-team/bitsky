/**
 * This file contains all the secret keys used in the API
 */

// Key used to secure the JWT (jwt.io)
export const secretKey: string = process.env.SECRET ?? 'NO_KEY'
