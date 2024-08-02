import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

import { UserEntity } from '~domain/entities/user.entity';

export class UserModel implements UserEntity, User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  email: string;
  name: string;

  @Exclude()
  password: string;
}
