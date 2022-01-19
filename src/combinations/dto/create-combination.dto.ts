import {IsNotEmpty,IsString,IsInt} from 'class-validator';

export class CreateCombinationDto {
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
