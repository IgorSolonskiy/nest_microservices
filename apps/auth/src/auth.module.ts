import { Module } from '@nestjs/common';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';

import { AuthController } from '~infrastructure/controllers/auth.controller';
import { UserRepository } from '~infrastructure/repositories/user.repository';
import { RepositoriesModule } from '~infrastructure/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [AuthController],
  providers: [
    {
      provide: UseCases.REGISTER,
      useFactory: (userRepository: UserRepository) =>
        new RegisterUseCases(userRepository),
      inject: [UserRepository],
    },
  ],
})
export class AuthModule {}
