import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

/**
 * The CounterService is responsible for providing the number of
 * how many link entities are there in the database and save it in a redis store
 * as a counter everytime a new entity is created it autoincrement.
 *
 * the counter value will be used to generate a unique hash encode to base62
 */

@Injectable()
export class CounterService {
  private readonly unique_counter_key = 'APP_LINKS_COUNTER';

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getCounterAndAutoIncr(): Promise<number> {
    const key = await this.redis.client.get(this.unique_counter_key);

    if (key === null) {
      const link_count = await this.prisma.links.count();
      await this.redis.client.set(this.unique_counter_key, link_count);
    }

    const newCountValue = await this.redis.client.incr(this.unique_counter_key);
    return newCountValue;
  }
}
