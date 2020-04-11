import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

/**
 * User entity
 * Represents a user in the database
 */
// TODO: Add a uuid column
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    token?: string

    @Column({ default: 'classic'})
    theme?: string
}
