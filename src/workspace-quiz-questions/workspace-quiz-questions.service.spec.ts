import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceQuizQuestionsService } from './workspace-quiz-questions.service';

describe('WorkspaceQuizQuestionsService', () => {
  let service: WorkspaceQuizQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspaceQuizQuestionsService],
    }).compile();

    service = module.get<WorkspaceQuizQuestionsService>(WorkspaceQuizQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
