import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user.admin) {
      const users = this.usersRepository.list();
      return users;
    }

    throw new Error("Usuario não é admin");
  }
}

export { ListAllUsersUseCase };
