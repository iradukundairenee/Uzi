import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {userEntity} from './modles/user.entity'
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
imports:[TypeOrmModule.forFeature([userEntity]),
AuthModule
],
providers: [UserService],
controllers: [UserController],
})
export class UserModule {}
