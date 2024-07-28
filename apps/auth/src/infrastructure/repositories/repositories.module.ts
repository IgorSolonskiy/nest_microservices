import { Module } from '@nestjs/common';

import { PrismaModule } from '~libs/common/src';

import { UserRepository } from '~infrastructure/repositories/user.repository';

@Module({
  imports: [PrismaModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}
