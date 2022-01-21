import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceQuizQuestionsController } from './workspace-quiz-questions.controller';
import { WorkspaceQuizQuestionsService } from './workspace-quiz-questions.service';

describe('WorkspaceQuizQuestionsController', () => {
  let controller: WorkspaceQuizQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceQuizQuestionsController],
      providers: [WorkspaceQuizQuestionsService],
    }).compile();

    controller = module.get<WorkspaceQuizQuestionsController>(WorkspaceQuizQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
