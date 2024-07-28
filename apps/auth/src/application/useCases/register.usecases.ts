import { UserEntity } from '~domain/entities/user.entity';
import { UserAbstractRepository } from '~domain/repositories/user.abstract.repository';

export class RegisterUseCases {
  constructor(private readonly userRepository: UserAbstractRepository) {}

  async execute(data: UserEntity): Promise<UserEntity> {
    return this.userRepository.create(data);
  }
}
