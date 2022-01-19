import { Injectable } from '@nestjs/common';
import { CreateLevel2Dto } from './dto/create-level2.dto';
import { UpdateLevel2Dto } from './dto/update-level2.dto';
import{Level2} from './entities/level2.entity'

@Injectable()
export class Level2Service {
  async create(createLevel2Dto: CreateLevel2Dto) {

    const createLevel2=new Level2();
    createLevel2.name = createLevel2Dto.name;
    createLevel2.level1Id =createLevel2Dto.level1Id;
    return await createLevel2.save();

  }
   async findAll() {
    return await Level2.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} level2`;
  }

  update(id: number, updateLevel2Dto: UpdateLevel2Dto) {
    return `This action updates a #${id} level2`;
  }

  remove(id: number) {
    return `This action removes a #${id} level2`;
  }
}
