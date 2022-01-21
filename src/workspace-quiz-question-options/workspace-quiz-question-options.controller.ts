import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceQuizQuestionOptionsService } from './workspace-quiz-question-options.service';
import { CreateWorkspaceQuizQuestionOptionDto } from './dto/create-workspace-quiz-question-option.dto';
import { UpdateWorkspaceQuizQuestionOptionDto } from './dto/update-workspace-quiz-question-option.dto';

@Controller('workspace-quiz-question-options')
export class WorkspaceQuizQuestionOptionsController {
  constructor(private readonly workspaceQuizQuestionOptionsService: WorkspaceQuizQuestionOptionsService) {}

  @Post()
  create(@Body() createWorkspaceQuizQuestionOptionDto: CreateWorkspaceQuizQuestionOptionDto) {
    return this.workspaceQuizQuestionOptionsService.create(createWorkspaceQuizQuestionOptionDto);
  }

  @Get()
  findAll() {
    return this.workspaceQuizQuestionOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceQuizQuestionOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceQuizQuestionOptionDto: UpdateWorkspaceQuizQuestionOptionDto) {
    return this.workspaceQuizQuestionOptionsService.update(+id, updateWorkspaceQuizQuestionOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceQuizQuestionOptionsService.remove(+id);
  }
}
