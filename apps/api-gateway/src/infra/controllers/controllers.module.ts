import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from '~infra/controllers/auth/auth.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class ControllersModule {}
