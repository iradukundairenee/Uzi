import { Injectable } from '@nestjs/common';
import {Observable,from, of} from 'rxjs';

const bcrypt =require('bcrypt');

@Injectable()
export class AuthService {
    hashPassword(password:string,):Observable<string>{
        return from(<string>(bcrypt.hash(password,12)));
    }
    comparePassword(password:string,strorePasswordHash:string):Observable<any | boolean>{
        return of<any |boolean>(bcrypt.compare(password,strorePasswordHash));
    }
}
