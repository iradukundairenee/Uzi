import { Module } from '@nestjs/common';
import { Level2Service } from './level2.service';
import { Level2Controller } from './level2.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level2 } from './entities/level2.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Level2]),
  JwtModule.register({
    secret:'secret',
    signOptions:{expiresIn:'1d'},
}),
],
  controllers: [Level2Controller],
  providers: [Level2Service]
})
export class Level2Module {}
