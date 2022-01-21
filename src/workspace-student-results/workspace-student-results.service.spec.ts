import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceStudentResultsService } from './workspace-student-results.service';

describe('WorkspaceStudentResultsService', () => {
  let service: WorkspaceStudentResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspaceStudentResultsService],
    }).compile();

    service = module.get<WorkspaceStudentResultsService>(WorkspaceStudentResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
