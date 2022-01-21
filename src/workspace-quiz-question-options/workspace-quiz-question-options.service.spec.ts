import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceQuizQuestionOptionsService } from './workspace-quiz-question-options.service';

describe('WorkspaceQuizQuestionOptionsService', () => {
  let service: WorkspaceQuizQuestionOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspaceQuizQuestionOptionsService],
    }).compile();

    service = module.get<WorkspaceQuizQuestionOptionsService>(WorkspaceQuizQuestionOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
