import { Module } from '@nestjs/common';
import { WorkspaceQuizQuestionOptionsService } from './workspace-quiz-question-options.service';
import { WorkspaceQuizQuestionOptionsController } from './workspace-quiz-question-options.controller';

@Module({
  controllers: [WorkspaceQuizQuestionOptionsController],
  providers: [WorkspaceQuizQuestionOptionsService]
})
export class WorkspaceQuizQuestionOptionsModule {}
