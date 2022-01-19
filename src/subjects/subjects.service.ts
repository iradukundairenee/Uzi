import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import{Subject} from './entities/subject.entity'

@Injectable()
export class SubjectsService {
  
  async create(createSubjectDto: CreateSubjectDto) {

    const createSubject= new Subject();
    createSubject.name = createSubjectDto.name;
    createSubject.level1Id = createSubjectDto.level1Id;
    createSubject.level2Id =  createSubjectDto.level2Id;
    return await createSubject.save();

  }

  async findAll() {
    return await Subject.find();
  }

  async findOne(id: number) {
    return await Subject.findOne(id);
  }

  
  async update(id: number, updateSubjectDto: UpdateSubjectDto) {

    return await Subject.update(id, updateSubjectDto);
  }

  async remove(id: number) {
    return await Subject.delete(id);
  }
}
