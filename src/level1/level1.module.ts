import { Module } from '@nestjs/common';
import { Level1Service } from './level1.service';
import { Level1Controller } from './level1.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Level1} from './entities/level1.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Level1]),
  JwtModule.registerAsync({
    useFactory :()=>({
    secret:'jwtsecret',
    signOptions:{expiresIn:'1d'},
    })

}),
],
  controllers: [Level1Controller],
  providers: [Level1Service]
})
export class Level1Module {}
