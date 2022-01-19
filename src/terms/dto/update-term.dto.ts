import { PartialType } from '@nestjs/mapped-types';
import { CreateTermDto } from './create-term.dto';
import {IsNotEmpty,IsString,IsInt,IsDate} from 'class-validator';

export class UpdateTermDto extends PartialType(CreateTermDto) {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    @IsInt()
    level1Id:string;

    // @IsString()
    // updated: Date;
}
