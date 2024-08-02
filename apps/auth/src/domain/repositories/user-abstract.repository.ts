import { UserEntity } from '~domain/entities/user.entity';

export abstract class UserAbstractRepository {
  abstract create(data: UserEntity): Promise<UserEntity>;

  abstract getUserByEmail(email: string): Promise<UserEntity | null>;
}
