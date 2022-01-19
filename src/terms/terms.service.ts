import { Injectable } from '@nestjs/common';
import { CreateTermDto } from './dto/create-term.dto';
import { UpdateTermDto } from './dto/update-term.dto';
import { Term } from '../terms/entities/term.entity'

@Injectable()
export class TermsService {

  async create(createTermDto: CreateTermDto) {

    const createTerm = new Term();
    createTerm.name = createTermDto.name;
    createTerm.level1Id = createTermDto.level1Id;
    return await createTerm.save();

  }

  async findAll() {
    return await Term.find();
  }

  async findOne(id: number) {
    return await Term.findOne(id);
  }

  async update(id: number, updateTermDto: UpdateTermDto) {

    return await Term.update(id, updateTermDto);
  }

  async remove(id: number) {
    return await Term.delete(id);
  }
}
