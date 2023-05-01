import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };