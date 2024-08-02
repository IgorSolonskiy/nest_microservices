import { UserEntity } from '~domain/entities/user.entity';
import { UserAbstractRepository } from '~domain/repositories/user-abstract.repository';

import { BadException } from '~application/exceptions/bad.exception';

export class RegisterUseCases {
  constructor(private readonly userRepository: UserAbstractRepository) {}

  async execute(data: UserEntity): Promise<UserEntity> {
    const user = await this.userRepository.getUserByEmail(data.email);

    if (user) throw new BadException('User already exists');

    return this.userRepository.create(data);
  }
}
