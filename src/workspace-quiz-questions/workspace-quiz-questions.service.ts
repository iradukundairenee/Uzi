import { Injectable } from '@nestjs/common';
import { CreateWorkspaceQuizQuestionDto } from './dto/create-workspace-quiz-question.dto';
import { UpdateWorkspaceQuizQuestionDto } from './dto/update-workspace-quiz-question.dto';

@Injectable()
export class WorkspaceQuizQuestionsService {
  create(createWorkspaceQuizQuestionDto: CreateWorkspaceQuizQuestionDto) {
    return 'This action adds a new workspaceQuizQuestion';
  }

  findAll() {
    return `This action returns all workspaceQuizQuestions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspaceQuizQuestion`;
  }

  update(id: number, updateWorkspaceQuizQuestionDto: UpdateWorkspaceQuizQuestionDto) {
    return `This action updates a #${id} workspaceQuizQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspaceQuizQuestion`;
  }
}
