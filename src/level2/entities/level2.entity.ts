import { Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";
@Entity('level2')
export class Level2  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;
     
    @Column({default:null})
    level1Id:string;
}
