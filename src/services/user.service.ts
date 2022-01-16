import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import{userEntity} from '../user/modles/user.entity'
import {from,Observable, switchMap, map } from 'rxjs';
import {userInterface} from '../user/modles/user.interface';
import{createUserDto } from '../user/modles/dto/create.dto'
import{AuthService} from '../services/auth/auth.service'
import {loginUserDto } from '../user/modles/dto/login.dto'



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(userEntity)
        private readonly userRepository:Repository<userEntity>, 
        private AuthService:AuthService

        ){} 

       createPost(user:createUserDto ):Observable<userInterface>{

        return this.mailExist(user.email).pipe(
            switchMap((exists : boolean) => {
                if(!exists){
                    
                    return this.AuthService.hashPassword(user.password).pipe(
                        switchMap((passwordHash:string) =>{
                            user.password=passwordHash;
                            return from(this.userRepository.save(user)).pipe(
                                map((savedUser:userInterface)=>{
                                    const {password,...user} =savedUser;
                                    return user;
                                })
                            );
                        })
                    )
                    
                }
                else{
                    throw new HttpException('email already exist',HttpStatus.CONFLICT);
                }
            })
        )
 }
 login(loginUserDto:loginUserDto):Observable<string>{
     return this.findUserByEmail(loginUserDto.email).pipe(
         switchMap((user:userInterface)=> {
             if(user){
            return  this.validatePassword(loginUserDto.password,user.password).pipe(
                      map((passwordsMatches:boolean)=>{
                        if(passwordsMatches){
                            return "login success";
                        }
                        else{
                           throw new HttpException('login failed',HttpStatus.UNAUTHORIZED);
                        }})
 )
             }else{
                 throw new HttpException('user not found',HttpStatus.UNAUTHORIZED);
             }   
       }
     ))
 }
    findAllUsers():Observable<userInterface[]>{
    return from(this.userRepository.find());
    }


 
private findUserByEmail(email:string):Observable<userInterface>{
        return from(this.userRepository.findOne({email},{select:['id','names','username','email','password']}));
    }
 private validatePassword(password:string,strorePasswordHash:string):Observable<boolean>{

     return this.AuthService.comparePassword(password,strorePasswordHash);

 }

 private mailExist(email:string):Observable<boolean>{

    return from(this.userRepository.findOne({email})).pipe(
        map((user:userInterface)=>{

            if(user){
                return true;
            }
            else{
                return false;
            }
        })
    )

 }

}
