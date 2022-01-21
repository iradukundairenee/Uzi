import { HttpException, HttpStatus, Injectable, Body, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../user/modles/user.entity'
import { from, Observable, switchMap, map } from 'rxjs';
import { userInterface } from '../user/modles/user.interface';
import { createUserDto } from '../user/modles/dto/create.dto'
import { AuthService } from '../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { isEmail } from 'class-validator';
import { loginUserDto } from 'src/user/modles/dto/login.dto';
const bcrypt =require('bcrypt');



@Injectable()
export class UserService {
    constructor(
        private AuthService: AuthService,
        private jwtService: JwtService,
    ) { }
    async createUser(createUserDto: createUserDto){
                    
                    const userEmail= await this.AuthService.mailExist(createUserDto.email);
                    const usernameExist= await this.AuthService.usernameExist(createUserDto.username);
                    if(userEmail){
                        return {
                            message:"email already exist"
                        };

                    }
                    if(usernameExist){
                        return {
                            message:"username already taken"
                        };

                    }
                    const hashed =await  bcrypt.hash(createUserDto.password,12);
                    const createUser=new userEntity();
                    createUser.names = createUserDto.names;
                    createUser.email = createUserDto.email;
                    createUser.username =createUserDto.username;
                    createUser.password =  hashed;
                    createUser.save();
                    const jwt=this.jwtService.sign({id:createUser.id,email:createUser.email,role:createUser.role});
                        return {
                            
                            message:"signup success",
                            token:jwt    
                    }

     
    }

    async loginuser(loginUserDto:loginUserDto){
        
        const user=await  this.AuthService.validateUser(loginUserDto.email,loginUserDto.password);
        

        if (!user[0]){
    
            return {
                message:"invalid credentials"
            }

        } 

        if(this.AuthService.comparePassword(loginUserDto.password,user[0].password)){
       
            return {
                message:"invalid credentials"
            }
         

        }
        else{
            const jwt=this.jwtService.sign({email:loginUserDto.email,password:loginUserDto.password});
            return   {
                
                message:"login success",
                token:jwt    
        }
        }
       
       
        

    }

    findAllUsers(){

       
    }



    async findOne(condition: any){
        return  userEntity.findOne(condition)

    }
  
  
    
       
   

}
