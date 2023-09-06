import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as redis from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  public readonly client: redis.RedisClientType;
  private logger: Logger;

  constructor() {
    this.client = redis.createClient({
      url: process.env.REDIS_URL,
    });
    this.logger = new Logger();
  }

  async onModuleInit() {
    await this.client.connect();
    this.logger.log('connected successfully', 'REDIS_STORE');
  }
}
