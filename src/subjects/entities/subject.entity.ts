import { Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";

@Entity('subject')
export class Subject extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;

    @Column({default:null})
    level1Id:string;

    @Column({default:null})
    level2Id:string;
}
