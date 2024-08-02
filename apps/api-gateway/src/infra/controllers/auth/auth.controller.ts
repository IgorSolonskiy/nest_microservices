import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { LoginDto } from '~infra/dto/auth/login.dto';
import { RegisterDto } from '~infra/dto/auth/register.dto';
import { ErrorsInterceptor } from '~infra/interceptors/errors.interceptor';

@UseInterceptors(ErrorsInterceptor)
@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH') private readonly clientAuth: ClientProxy) {}

  @Post('/register')
  async register(@Body() data: RegisterDto) {
    return this.clientAuth.send({ cmd: 'register' }, data);
  }

  @Post('/login')
  async login(@Body() data: LoginDto) {
    return this.clientAuth.send({ cmd: 'login' }, data);
  }
}
