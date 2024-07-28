import { UserEntity } from '~domain/entities/user.entity';
import { UserAbstractRepository } from '~domain/repositories/user.abstract.repository';

export class GetUserByEmailUseCases {
  constructor(private readonly userRepository: UserAbstractRepository) {}

  async execute(email: string): Promise<UserEntity> {
    return this.userRepository.getUserByEmail(email);
  }
}
