import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existisEmail = this.usersRepository.findByEmail(email);

    if (!existisEmail) {
      return this.usersRepository.create({ email, name });
    }

    throw new Error("Já existi Email");
    
  }
}

export { CreateUserUseCase };
