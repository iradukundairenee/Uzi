import { Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";

@Entity('combination')
export class Combination  extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;
     
    @Column({default:null})
    level1Id:string;

    @Column({default:null})
    level2Id:string;
}
