import { BadRequestException, Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserEntity } from '~domain/entities/user.entity';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';
import { GetUserByEmailUseCases } from '~application/useCases/getUserByEmail.usecases';

@Controller()
export class AuthController {
  constructor(
    @Inject(UseCases.REGISTER)
    private readonly registerUseCase: RegisterUseCases,
    @Inject(UseCases.GET_USER_BY_EMAIL)
    private readonly getUserByEmailUseCase: GetUserByEmailUseCases,
  ) {}

  @MessagePattern({ cmd: 'register' })
  async register(data: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.getUserByEmailUseCase.execute(data.email);

    if (user) throw new BadRequestException('User already exists');

    return this.registerUseCase.execute(data);
  }
}
