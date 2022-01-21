import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { Level1Module } from './level1/level1.module';
import { TermsModule } from './terms/terms.module';
import { CombinationsModule } from './combinations/combinations.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeacherSubjectModule } from './teacher-subject/teacher-subject.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { WorkspaceQuizQuestionsModule } from './workspace-quiz-questions/workspace-quiz-questions.module';
import { WorkspaceQuizQuestionOptionsModule } from './workspace-quiz-question-options/workspace-quiz-question-options.module';
import { WorkspaceStudentResultsModule } from './workspace-student-results/workspace-student-results.module';
import { Level2Module } from './level2/level2.module';







@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.POSTGRES_HOST,
      port:parseInt(<string>process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
    Level1Module,
    TermsModule,
    CombinationsModule,
    SubjectsModule,
    TeacherSubjectModule,
    WorkspacesModule,
    WorkspaceQuizQuestionsModule,
    WorkspaceQuizQuestionOptionsModule,
    WorkspaceStudentResultsModule,
    Level2Module
  ],
  controllers: [AppController],
  providers: [
    AppService,
   ],
})
export class AppModule {}
