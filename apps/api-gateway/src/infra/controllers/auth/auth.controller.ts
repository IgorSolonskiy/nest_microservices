import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { LoginDto } from '~infra/dto/auth/login.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH') private readonly clientAuth: ClientProxy) {}

  @Post('/login')
  async login(@Body() data: LoginDto) {
    return this.clientAuth.send({ cmd: 'login' }, data);
  }
}
