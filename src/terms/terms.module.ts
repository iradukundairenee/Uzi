import { Module } from '@nestjs/common';
import { TermsService } from './terms.service';
import { TermsController } from './terms.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import{Term } from './entities/term.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Term]),
  JwtModule.register({
    secret:'jwtsecret',
    signOptions:{expiresIn:'1d'},
}),
],
  controllers: [TermsController],
  providers: [TermsService]
})
export class TermsModule {}



