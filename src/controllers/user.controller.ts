import { Controller, Post, Body, Get, HttpCode, Req, UnauthorizedException, UseGuards,Request} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { createUserDto } from '../user/modles/dto/create.dto';
import { loginUserDto } from 'src/user/modles/dto/login.dto';
import { Res } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response} from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/moddles/role.enum';
import {LocalAuthGuard} from '../auth/guards/local-auth.guard'




@Controller('user')
export class UserController {
    constructor(private UserService: UserService,
        private jwtService: JwtService
    ) { }
    @Post('Signup')
    create(@Body() createUserDto: createUserDto){
        return this.UserService.createUser(createUserDto);
    }

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(200)
    async login(@Body() loginUserDto:loginUserDto ) {

        return this.UserService.loginuser(loginUserDto)
    }

  
    @Get('student')
    async findOneStudent(@Req() request: Request) {
        try {
            const bearer = request.headers['authorization'];
            const token =bearer.split(' ')[1];
            const data = await this.jwtService.verify(token);
            if (!data) {
                throw new UnauthorizedException();
            }
            const user = await this.UserService.findOne({ id: data['id'] });

            const { password, ...result } = user;

            return result;
        }
        catch (e) {
            throw new UnauthorizedException();
        }
    }
    
    
    @Get('students')
    async findAllStudents(@Req() request: Request) {
        try {
            const bearer = request.headers['authorization'];
            const token =bearer.split(' ')[1];
            const data = await this.jwtService.verify(token);
            if (!data) {
                throw new UnauthorizedException();
            }
            const user = await this.UserService.findAllUsers();

            return user
        }
        catch (e) {
            throw new UnauthorizedException();
        }
    }



    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt');
        return {
            message: 'logout success'
        }
    }

}

