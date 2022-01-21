import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy'
import { UserService } from 'src/services/user.service';



@Module({
  imports:[
  PassportModule,
  JwtModule.registerAsync({
    useFactory :()=>({
      secret:'jwtsecret',
      signOptions:{expiresIn:'1d'},
      })
  })
],
  providers: [AuthService,LocalStrategy,UserService],
  exports:[AuthService]
})
export class AuthModule {}
