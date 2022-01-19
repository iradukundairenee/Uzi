import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel2Dto } from './create-level2.dto';

export class UpdateLevel2Dto extends PartialType(CreateLevel2Dto) {}
