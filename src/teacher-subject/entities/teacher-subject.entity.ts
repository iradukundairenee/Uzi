import { Entity,PrimaryGeneratedColumn,Column,BaseEntity,OneToMany} from "typeorm";
import {Level1} from '../../level1/entities/level1.entity';
import { Level2 } from "src/level2/entities/level2.entity";
import {Subject} from '../../subjects/entities/subject.entity'

@Entity('teacher_subject')
export class TeacherSubject extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    teacher_id:number;

    // @OneToMany(() => Subject, subject => subject.id)
    @Column({default:null})
    subject_id:number;
     

    // @OneToMany(() => Level1, level1 => level1.id)
    @Column({default:null})
    level1Id:number;

    // @OneToMany(() => Level2, level2 => level2.id)
    @Column({default:null})
    level2_id:number;

}
    