import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  logger: Logger;
  constructor() {
    super();
    this.logger = new Logger();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected with Prisma', 'DATABASE');
  }
}
