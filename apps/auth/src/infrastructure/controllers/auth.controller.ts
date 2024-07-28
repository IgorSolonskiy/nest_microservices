import { BadRequestException, Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserEntity } from '~domain/entities/user.entity';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';
import { ExistsUserUseCases } from '~application/useCases/exists-user.usecases';

@Controller()
export class AuthController {
  constructor(
    @Inject(UseCases.REGISTER)
    private readonly registerUseCase: RegisterUseCases,
    @Inject(UseCases.EXISTS_USER)
    private readonly existsUserUseCases: ExistsUserUseCases,
  ) {}

  @MessagePattern({ cmd: 'register' })
  async register(data: UserEntity): Promise<UserEntity> {
    const user = await this.existsUserUseCases.execute(data.email);

    if (user) throw new BadRequestException('User already exists');

    return this.registerUseCase.execute(data);
  }
}
