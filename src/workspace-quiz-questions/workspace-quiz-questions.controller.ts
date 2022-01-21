import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceQuizQuestionsService } from './workspace-quiz-questions.service';
import { CreateWorkspaceQuizQuestionDto } from './dto/create-workspace-quiz-question.dto';
import { UpdateWorkspaceQuizQuestionDto } from './dto/update-workspace-quiz-question.dto';

@Controller('workspace-quiz-questions')
export class WorkspaceQuizQuestionsController {
  constructor(private readonly workspaceQuizQuestionsService: WorkspaceQuizQuestionsService) {}

  @Post()
  create(@Body() createWorkspaceQuizQuestionDto: CreateWorkspaceQuizQuestionDto) {
    return this.workspaceQuizQuestionsService.create(createWorkspaceQuizQuestionDto);
  }

  @Get()
  findAll() {
    return this.workspaceQuizQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceQuizQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceQuizQuestionDto: UpdateWorkspaceQuizQuestionDto) {
    return this.workspaceQuizQuestionsService.update(+id, updateWorkspaceQuizQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceQuizQuestionsService.remove(+id);
  }
}
