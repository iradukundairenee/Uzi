import { Injectable } from '@nestjs/common';
import { CreateWorkspaceQuizQuestionOptionDto } from './dto/create-workspace-quiz-question-option.dto';
import { UpdateWorkspaceQuizQuestionOptionDto } from './dto/update-workspace-quiz-question-option.dto';

@Injectable()
export class WorkspaceQuizQuestionOptionsService {
  create(createWorkspaceQuizQuestionOptionDto: CreateWorkspaceQuizQuestionOptionDto) {
    return 'This action adds a new workspaceQuizQuestionOption';
  }

  findAll() {
    return `This action returns all workspaceQuizQuestionOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspaceQuizQuestionOption`;
  }

  update(id: number, updateWorkspaceQuizQuestionOptionDto: UpdateWorkspaceQuizQuestionOptionDto) {
    return `This action updates a #${id} workspaceQuizQuestionOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspaceQuizQuestionOption`;
  }
}
