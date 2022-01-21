import { Injectable } from '@nestjs/common';
import { CreateWorkspaceStudentResultDto } from './dto/create-workspace-student-result.dto';
import { UpdateWorkspaceStudentResultDto } from './dto/update-workspace-student-result.dto';

@Injectable()
export class WorkspaceStudentResultsService {
  create(createWorkspaceStudentResultDto: CreateWorkspaceStudentResultDto) {
    return 'This action adds a new workspaceStudentResult';
  }

  findAll() {
    return `This action returns all workspaceStudentResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspaceStudentResult`;
  }

  update(id: number, updateWorkspaceStudentResultDto: UpdateWorkspaceStudentResultDto) {
    return `This action updates a #${id} workspaceStudentResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspaceStudentResult`;
  }
}
