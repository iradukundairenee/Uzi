import { Entity,PrimaryGeneratedColumn,Column,BaseEntity,OneToMany,JoinTable} from "typeorm";
export class Workspace {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;
}
