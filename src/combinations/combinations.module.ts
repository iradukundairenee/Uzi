import { Module } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { CombinationsController } from './combinations.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import{Combination} from './entities/combination.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Combination]),
  JwtModule.register({
   secret:'jwtsecret',
    signOptions: { expiresIn: '60s' },
  }),
//   JwtModule.registerAsync({
//     useFactory :()=>({
//     secret:'jwtsecret',
//     signOptions:{expiresIn:'1d'},
//     })
// }),
],
  controllers: [CombinationsController],
  providers: [CombinationsService]
})
export class CombinationsModule {}
