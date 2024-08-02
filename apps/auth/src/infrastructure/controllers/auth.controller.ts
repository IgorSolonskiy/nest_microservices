import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { UserEntity } from '~domain/entities/user.entity';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';

@Controller()
export class AuthController {
  constructor(
    @Inject(UseCases.REGISTER)
    private readonly registerUseCase: RegisterUseCases,
  ) {}

  @MessagePattern({ cmd: 'register' })
  async register(data: UserEntity): Promise<UserEntity> {
    try {
      return await this.registerUseCase.execute(data);
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
