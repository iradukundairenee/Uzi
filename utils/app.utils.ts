import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE =/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

const PASSWORD_MESSAGE=`Password should contain upper case ,lower case,number,...`;

const  VALIDATION_PIPE=new ValidationPipe({
    errorHttpStatusCode:HttpStatus.UNPROCESSABLE_ENTITY
})


export const RegularExpression = { 

    PASSWORD_RULE,

};

export const MESSAGE = { 

    PASSWORD_MESSAGE,

};

export const SETTINGS = {

    VALIDATION_PIPE,

}