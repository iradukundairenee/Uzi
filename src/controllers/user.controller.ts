import { Controller,Post,Body,Get, HttpCode } from '@nestjs/common';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {userInterface} from '../user/modles/user.interface';
import{createUserDto } from '../user/modles/dto/create.dto'
import {loginUserDto } from '../user/modles/dto/login.dto'


@Controller('user')
export class UserController {
    constructor(private UserService:UserService){}
    @Post('Signup')
    create(@Body() createUserDto:createUserDto):Observable<userInterface>{
        return this.UserService.createPost(createUserDto);
    }

    @Post('login')
    @HttpCode(200)
    login(@Body() loginUserDto:loginUserDto):Observable<string>{
        return this.UserService.login(loginUserDto);
    }

    @Get('GetAllUsers')
    findAll():Observable<userInterface[]>{
     return   this.UserService.findAllUsers()
    }
}

