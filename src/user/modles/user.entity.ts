import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";
// import { Role } from '../../auth/moddles/role.enum';
import { IsNotEmpty, IsEmail, Length } from 'class-validator';


@Entity('user')
export class userEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({
        message: 'name is required'
    })
    @Column({ default: null })
    names: string;

    @IsNotEmpty({
        message: 'username is required'
    })
    @Column({ default: null })
    username: string;


    @IsNotEmpty({
        message: 'email is required'
    })
    @IsEmail()
    @Column({ unique: true, default: null })
    email: string;

    @IsNotEmpty({
        message: 'password is required'
    })
    @Length(5, 16)
    @Column({ default: null })
    password: string;


    @Column({ default: 'student' })
    role: string;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();

    }
}

