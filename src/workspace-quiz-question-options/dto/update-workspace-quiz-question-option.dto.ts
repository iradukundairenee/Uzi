import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkspaceQuizQuestionOptionDto } from './create-workspace-quiz-question-option.dto';

export class UpdateWorkspaceQuizQuestionOptionDto extends PartialType(CreateWorkspaceQuizQuestionOptionDto) {}
