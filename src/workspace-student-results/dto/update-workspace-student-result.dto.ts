import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkspaceStudentResultDto } from './create-workspace-student-result.dto';

export class UpdateWorkspaceStudentResultDto extends PartialType(CreateWorkspaceStudentResultDto) {}
