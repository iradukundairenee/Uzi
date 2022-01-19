import {IsNotEmpty, IsString} from 'class-validator';
export class CreateLevel1Dto {

    @IsNotEmpty()
    @IsString()
    name:string;
}
