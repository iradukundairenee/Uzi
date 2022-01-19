import {IsNotEmpty,IsString,IsInt} from 'class-validator';

export class CreateSubjectDto {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    @IsInt()
    level1Id:string;

    @IsNotEmpty()
    @IsInt()
    level2Id:string;
}
