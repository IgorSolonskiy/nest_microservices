import { UserEntity } from '~domain/entities/user.entity';

export abstract class UserAbstractRepository {
  abstract create(data: Partial<UserEntity>): Promise<UserEntity>;

  abstract getUserByEmail(email: string): Promise<UserEntity | null>;
}
