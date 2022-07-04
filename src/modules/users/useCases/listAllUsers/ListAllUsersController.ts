import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(users);
    } catch (err) {
      return response.status(404).send(err.message);
    }
  }
}

export { ListAllUsersController };
