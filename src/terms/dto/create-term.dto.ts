import {IsNotEmpty,IsString,IsInt,IsDate} from 'class-validator';
export class CreateTermDto {
    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    @IsInt()
    level1Id:string;

    // @IsString()
    // created:Date;
}
