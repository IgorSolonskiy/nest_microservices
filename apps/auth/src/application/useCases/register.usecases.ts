import { UserEntity } from '~domain/entities/user.entity';
import { UserAbstractRepository } from '~domain/repositories/user-abstract.repository';
import { HashAbstractService } from '~domain/services/hash-abstract.service';

import { BadException } from '~application/exceptions/bad.exception';

export class RegisterUseCases {
  constructor(
    private readonly userRepository: UserAbstractRepository,
    private readonly hashService: HashAbstractService,
  ) {}

  async execute(data: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    const user = await this.userRepository.getUserByEmail(data.email);

    if (user) throw new BadException('User already exists');

    const password = await this.hashService.hash(data.password);

    return this.userRepository.create({ ...data, password });
  }
}
