import {IsNotEmpty,IsString} from 'class-validator';
export class CreateLevel2Dto {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    // @IsInt()
    level1Id:string;
}



