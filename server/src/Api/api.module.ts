import { Module } from '@nestjs/common';
import ApiController from './api.controller';
import { UrlShortnerService } from './urlShortner.service';
import { CounterService } from './counter.service';

@Module({
  controllers: [ApiController],
  providers: [UrlShortnerService, CounterService],
})
export class ApiModule {}
