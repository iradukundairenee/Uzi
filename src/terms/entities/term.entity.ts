
import { Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";

@Entity('term')
export class Term  extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;
     
    @Column({default:null})
    level1Id:string;
    
    
    // @Column({default: null, type: 'date'}) 
    // created:Date; 

    // @Column({default: null, type: 'date'}) 
    // updated:Date; 

   
}