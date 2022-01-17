import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[
  JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn:'1d'},
  }),
],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
