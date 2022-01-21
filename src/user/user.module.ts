import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {userEntity} from './modles/user.entity'
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';




@Module({
imports:[TypeOrmModule.forFeature([userEntity]),
JwtModule.registerAsync({
    useFactory :()=>({
    secret:'jwtsecret',
    signOptions:{expiresIn:'1d'},
    })

}),
AuthModule,
],
providers: [UserService],
controllers: [UserController],
exports:[UserService]
})
export class UserModule {}
