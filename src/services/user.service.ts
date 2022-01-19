import { HttpException, HttpStatus, Injectable,Body, Options} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import{userEntity} from '../user/modles/user.entity'
import {from,Observable, switchMap, map } from 'rxjs';
import {userInterface} from '../user/modles/user.interface';
import{createUserDto } from '../user/modles/dto/create.dto'
import{AuthService} from '../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(userEntity)
        private readonly userRepository:Repository<userEntity>, 
        private AuthService:AuthService,
        private jwtService:JwtService,
        ){} 
       createUser(user:createUserDto ):Observable<string>{
        
        const jwt=this.jwtService.sign(user);
        return this.mailExist(user.email).pipe(
            switchMap((exists : boolean) => {
                if(!exists){
                    return this.AuthService.hashPassword(user.password).pipe(
                        switchMap((passwordHash:string) =>{
                            const newUser=new userEntity;

                            newUser.names=user.names;
                            newUser.email=user.email;
                            newUser.username=user.username;
                            user.password=passwordHash;
                            return from(this.userRepository.save(user)).pipe(
                                map((savedUser:userInterface)=>{
                                    const {password,...user} =savedUser;
                                    return `signup success${jwt}`;
                                }),
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
    findAllUsers():Observable<userInterface[]>{
       
    return from(this.userRepository.find());
    } 


    
async findOne(condition:any):Promise<userInterface>{
    return this.userRepository.findOne(condition)

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
