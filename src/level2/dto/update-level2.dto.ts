import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel2Dto } from './create-level2.dto';
import {IsNotEmpty,IsString,IsInt,IsDate} from 'class-validator';

export class UpdateLevel2Dto extends PartialType(CreateLevel2Dto) {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    @IsInt()
    level1Id:string;
}
