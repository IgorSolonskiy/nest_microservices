import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { promisify } from 'util';

import { HashAbstractService } from '~domain/services/hash-abstract.service';

const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

@Injectable()
export class HashService implements HashAbstractService {
  #saltRounds = 10;

  hash = (data: string): Promise<string> => hash(data, this.#saltRounds);

  compare = (data: string, hash: string): Promise<boolean> =>
    compare(data, hash);
}
