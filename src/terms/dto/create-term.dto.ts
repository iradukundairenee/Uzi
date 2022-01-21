import {IsNotEmpty,IsString,IsInt} from 'class-validator';
export class CreateTermDto {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    // @IsInt()
    level1Id:string;

}
