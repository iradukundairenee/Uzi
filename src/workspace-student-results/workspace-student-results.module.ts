import { Module } from '@nestjs/common';
import { WorkspaceStudentResultsService } from './workspace-student-results.service';
import { WorkspaceStudentResultsController } from './workspace-student-results.controller';

@Module({
  controllers: [WorkspaceStudentResultsController],
  providers: [WorkspaceStudentResultsService]
})
export class WorkspaceStudentResultsModule {}
