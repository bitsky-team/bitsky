import {getConnection, getRepository} from 'typeorm'
import {User} from '../entities'

export const authController = {
    create: async (data: object) => {
        const repository = getRepository(User)
        const user: User = repository.create(data)
        await repository.save(user)
        delete user.password
        return user
    }
}
