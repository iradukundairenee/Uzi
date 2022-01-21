import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import{Subject} from './entities/subject.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Subject]),
  JwtModule.register({
    secret:'secret',
    signOptions:{expiresIn:'1d'},
}),
],
  controllers: [SubjectsController],
  providers: [SubjectsService]
})
export class SubjectsModule {}
