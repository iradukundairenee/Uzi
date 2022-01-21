import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkspaceQuizQuestionDto } from './create-workspace-quiz-question.dto';

export class UpdateWorkspaceQuizQuestionDto extends PartialType(CreateWorkspaceQuizQuestionDto) {}
