import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceQuizQuestionOptionsController } from './workspace-quiz-question-options.controller';
import { WorkspaceQuizQuestionOptionsService } from './workspace-quiz-question-options.service';

describe('WorkspaceQuizQuestionOptionsController', () => {
  let controller: WorkspaceQuizQuestionOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceQuizQuestionOptionsController],
      providers: [WorkspaceQuizQuestionOptionsService],
    }).compile();

    controller = module.get<WorkspaceQuizQuestionOptionsController>(WorkspaceQuizQuestionOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
