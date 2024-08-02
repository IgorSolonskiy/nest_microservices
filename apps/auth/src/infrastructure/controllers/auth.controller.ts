import {
  ClassSerializerInterceptor,
  Controller,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';

import { UserModel } from '~infrastructure/models/user.model';

@Controller()
export class AuthController {
  constructor(
    @Inject(UseCases.REGISTER)
    private readonly registerUseCase: RegisterUseCases,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @MessagePattern({ cmd: 'register' })
  async register(data: Omit<UserModel, 'id'>): Promise<UserModel> {
    try {
      return new UserModel(await this.registerUseCase.execute(data));
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
