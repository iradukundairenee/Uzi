
import { Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm";

@Entity('level2')
export class Level2 extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;
    
    @Column({default:null})
    level1Id:string;
}



// import {Level1} from '../../level1/entities/level1.entity';


// @Entity('term')
// export class Term  extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     id:number;

//     @Column({default:null})
//     name:string;
    
//     @Column({default:null})
//     level1Id:string;
 
// }