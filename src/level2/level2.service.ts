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

  async findOne(id: number) {
    return await Level2.findOne(id);
  }

  async update(id: number, updateLevel2Dto: UpdateLevel2Dto) {

    return await  Level2.update(id, updateLevel2Dto);
  }

  async remove(id: number) {
    return await Level2.delete(id);
  }
}
