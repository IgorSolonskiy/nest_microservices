import { UserAbstractRepository } from '~domain/repositories/user.abstract.repository';

export class ExistsUserUseCases {
  constructor(private readonly userRepository: UserAbstractRepository) {}

  async execute(email: string): Promise<boolean> {
    const user = await this.userRepository.getUserByEmail(email);
    return !!user;
  }
}
