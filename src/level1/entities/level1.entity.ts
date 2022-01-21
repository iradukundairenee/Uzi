import { Entity,PrimaryGeneratedColumn,Column,BaseEntity,BeforeInsert} from "typeorm";


@Entity('level1')
export class Level1 extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;

    
}
