import { Controller,Post,Body,Get, HttpCode, BadRequestException, Req, UnauthorizedException,  } from '@nestjs/common';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {userInterface} from '../user/modles/user.interface';
import{createUserDto } from '../user/modles/dto/create.dto';
import { Res } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response,Request} from 'express';



@Controller('user')
export class UserController {
    constructor(private UserService:UserService,
        private jwtService:JwtService
        ){}
    @Post('Signup')
    create(@Body() createUserDto:createUserDto):Observable<string>{
        return this.UserService.createUser(createUserDto);
    }
   @Post('login')
   @HttpCode(200)
   async login(
       @Body('email') email:string,
       @Body('password') password:string,
       @Res({passthrough:true}) response:Response
   ){
       
    const user=await this.UserService.findOne({email});
    if(!user){
        throw new BadRequestException('invalid credentials');
    }

    if(!await bcrypt.compare(password,user.password)){
        throw new BadRequestException('invalid credentials');
    }

    const jwt =this.jwtService.sign({id:user.id})

    response.cookie('jwt',jwt,{httpOnly:true});
    
    return {
        message:" login sucess",
        token:jwt
    }
}


@Get('student')
async findOneStudent(@Req() request:Request){
try{const cookie=request.cookies['jwt'];
const data=await this.jwtService.verify(cookie);
            if(!data){
                throw new UnauthorizedException();
            }
     const user=await this.UserService.findOne({id:data['id']});

     const{password, ...result}=user;
        
            return result
        }
        catch(e){
            throw new UnauthorizedException();
        }
    }

    @Get('students')
async findAllStudents(@Req() request:Request){
try{const cookie=request.cookies['jwt'];
const data=await this.jwtService.verify(cookie);
            if(!data){
                throw new UnauthorizedException();
            }
     const user=await this.UserService.findAllUsers();

            return user
        }
        catch(e){
            throw new UnauthorizedException();
        }
    }



@Post('logout')
async logout(@Res({passthrough:true}) response:Response){
    response.clearCookie('jwt');
    return {
        message:'logout success'
    }
}

}

