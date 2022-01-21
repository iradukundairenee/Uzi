import { Controller, Post, Body, Get, HttpCode, Req, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { createUserDto } from '../user/modles/dto/create.dto';
import { loginUserDto } from 'src/user/modles/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'




@Controller('user')
export class UserController {
    constructor(private UserService: UserService,
        private jwtService: JwtService
    ) { }
    @Post('Signup')
    create(@Body() createUserDto: createUserDto) {
        return this.UserService.createUser(createUserDto);
    }

    @Post('login')
    @HttpCode(200)
    login(@Body() loginUserDto: loginUserDto) {

        return this.UserService.loginuser(loginUserDto)


    }





    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Req() request: Request) {
        const bearer = request.headers['authorization'];

        const token = bearer.split(' ')[1];
        const data = await this.jwtService.verify(token);
        if (data.role == 'admin') {
        return this.UserService.findAllUsers();
    } else {
        return {
          message: "you are not allowed to access this"
        }
      }
    }



}

