import IUserRepository from "../../application/repository/IUserRepository";
import User from "../../domain/entity/User";

export default class UserRepository implements IUserRepository {
  users: User[];
  
  constructor() {
    this.users = [];
  }

  async getUserById(userId: string): Promise<User | void> {
    return this.users.find((user: User) => user.userId === userId);
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
