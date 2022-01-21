import { Module } from '@nestjs/common';
import { WorkspaceQuizQuestionsService } from './workspace-quiz-questions.service';
import { WorkspaceQuizQuestionsController } from './workspace-quiz-questions.controller';

@Module({
  controllers: [WorkspaceQuizQuestionsController],
  providers: [WorkspaceQuizQuestionsService]
})
export class WorkspaceQuizQuestionsModule {}
