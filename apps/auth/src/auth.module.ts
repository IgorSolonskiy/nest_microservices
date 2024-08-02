import { Module } from '@nestjs/common';

import { UseCases } from '~application/enums/usecases.enum';
import { RegisterUseCases } from '~application/useCases/register.usecases';

import { AuthController } from '~infrastructure/controllers/auth.controller';
import { UserRepository } from '~infrastructure/repositories/user.repository';
import { RepositoriesModule } from '~infrastructure/repositories/repositories.module';
import { ServicesModule } from '~infrastructure/services/services.module';
import { HashService } from '~infrastructure/services/hash/hash.service';

@Module({
  imports: [RepositoriesModule, ServicesModule],
  controllers: [AuthController],
  providers: [
    {
      provide: UseCases.REGISTER,
      inject: [UserRepository, HashService],
      useFactory: (userRepository: UserRepository, hashService: HashService) =>
        new RegisterUseCases(userRepository, hashService),
    },
  ],
})
export class AuthModule {}
