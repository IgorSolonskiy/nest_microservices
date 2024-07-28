import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '~libs/common/src';

import { UserEntity } from '~domain/entities/user.entity';
import { UserAbstractRepository } from '~domain/repositories/user.abstract.repository';

@Injectable()
export class UserRepository implements UserAbstractRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
