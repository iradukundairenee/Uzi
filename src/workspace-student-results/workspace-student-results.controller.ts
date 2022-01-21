import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceStudentResultsService } from './workspace-student-results.service';
import { CreateWorkspaceStudentResultDto } from './dto/create-workspace-student-result.dto';
import { UpdateWorkspaceStudentResultDto } from './dto/update-workspace-student-result.dto';

@Controller('workspace-student-results')
export class WorkspaceStudentResultsController {
  constructor(private readonly workspaceStudentResultsService: WorkspaceStudentResultsService) {}

  @Post()
  create(@Body() createWorkspaceStudentResultDto: CreateWorkspaceStudentResultDto) {
    return this.workspaceStudentResultsService.create(createWorkspaceStudentResultDto);
  }

  @Get()
  findAll() {
    return this.workspaceStudentResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceStudentResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceStudentResultDto: UpdateWorkspaceStudentResultDto) {
    return this.workspaceStudentResultsService.update(+id, updateWorkspaceStudentResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceStudentResultsService.remove(+id);
  }
}
