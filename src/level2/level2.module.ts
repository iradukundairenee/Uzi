import { Module } from '@nestjs/common';
import { Level2Service } from './level2.service';
import { Level2Controller } from './level2.controller';

@Module({
  controllers: [Level2Controller],
  providers: [Level2Service]
})
export class Level2Module {}
