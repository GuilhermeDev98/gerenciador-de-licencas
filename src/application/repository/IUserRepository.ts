import User from "../../domain/entity/User";

export default interface IUserRepository{
    getUserById(userId: string): Promise<User | void>
    save(user: User): Promise<void>
}