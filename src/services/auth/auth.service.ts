import { Injectable } from '@nestjs/common';
import { userEntity} from '../../user/modles/user.entity'
import { loginUserDto } from 'src/user/modles/dto/login.dto';


const bcrypt =require('bcrypt');

@Injectable()
export class AuthService {
    async hashPassword(password:string,){
        return await  bcrypt.hash(password,12);
    }
    async comparePassword(password:string,strorePasswordHash:string){
        return  bcrypt.compare(password,strorePasswordHash);
    }

    async mailExist(email:string){
        return await userEntity.findOne({email})
        }

     async usernameExist(username:string){
            return await userEntity.findOne({username})
            }

    async validatepasword(password:string){
        
        return await userEntity.findOne({password})

    }

async findUserByEmail(email){
    return await userEntity.find({
        where:[
            {
                email
            }
        ]
    })
}
    

        
}
