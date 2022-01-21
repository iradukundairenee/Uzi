import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceStudentResultsController } from './workspace-student-results.controller';
import { WorkspaceStudentResultsService } from './workspace-student-results.service';

describe('WorkspaceStudentResultsController', () => {
  let controller: WorkspaceStudentResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceStudentResultsController],
      providers: [WorkspaceStudentResultsService],
    }).compile();

    controller = module.get<WorkspaceStudentResultsController>(WorkspaceStudentResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
