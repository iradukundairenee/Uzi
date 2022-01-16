import { Injectable } from '@nestjs/common';
import {Observable,from} from 'rxjs';
const bcrypt =require('bcrypt');

@Injectable()
export class AuthService {
    hashPassword(password:string,):Observable<string>{

        return from(<string>(bcrypt.hash(password,12)));

    }

    comparePassword(password:string,strorePasswordHash:string):Observable<any>{

        return from(bcrypt.compare(password,strorePasswordHash));

    }
}
