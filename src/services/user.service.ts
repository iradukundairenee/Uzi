import { HttpException, HttpStatus, Injectable, Body, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../user/modles/user.entity'
import { from, Observable, switchMap, map } from 'rxjs';
import { userInterface } from '../user/modles/user.interface';
import { createUserDto } from '../user/modles/dto/create.dto'
import { AuthService } from '../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

import { loginUserDto } from 'src/user/modles/dto/login.dto';
const bcrypt = require('bcrypt');



@Injectable()
export class UserService {
    constructor(
        private AuthService: AuthService,
        private jwtService: JwtService,
    ) { }
    async createUser(createUserDto: createUserDto) {

        const userEmail = await this.AuthService.mailExist(createUserDto.email);
        const usernameExist = await this.AuthService.usernameExist(createUserDto.username);
        if (userEmail) {
            return {
                message: "email already exist"
            };

        }
        if (usernameExist) {
            return {
                message: "username already taken"
            };

        } else {
            const hashed = await bcrypt.hash(createUserDto.password, 12);
            const createUser = new userEntity();
            createUser.names = createUserDto.names;
            createUser.email = createUserDto.email;
            createUser.username = createUserDto.username;
            createUser.password = hashed;
            createUser.save();
            const jwt = this.jwtService.sign({ id: createUser.id, email: createUser.email, role: createUser.role });
            return {

                message: "signup success",
                // token: jwt
            }

        }
    }

    async loginuser(loginUserDto: loginUserDto) {

        const user = await this.AuthService.findUserByEmail(loginUserDto.email);
        if (user[0]) {
            const valid = await this.AuthService.comparePassword(loginUserDto.password, user[0].password);
            if (valid) {
                const jwt = this.jwtService.sign({ id: user[0].id, email: user[0].email, role: user[0].role });
                return {

                    message: "login success",
                    token: jwt
                }

            } else {
                return {
                    message: "invalid credentials"
                }
            }

        }
        else {
            return {
                message: "invalid credentials"
            }
        }












    }


    async findAllUsers() {

        return await userEntity.find();

    }










}
