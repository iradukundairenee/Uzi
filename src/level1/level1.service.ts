import { Injectable } from '@nestjs/common';
import { CreateLevel1Dto } from './dto/create-level1.dto';
import { UpdateLevel1Dto } from './dto/update-level1.dto';
import { Level1 } from './entities/level1.entity'

@Injectable()
export class Level1Service {
  async create(createLevel1Dto: CreateLevel1Dto) {

    const createleve1 = new Level1();
    createleve1.name = createLevel1Dto.name;
    return await createleve1.save();
  }

 async findAll() {
    return await Level1.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} level1`;
  }

  update(id: number, updateLevel1Dto: UpdateLevel1Dto) {
    return `This action updates a #${id} level1`;
  }

  remove(id: number) {
    return `This action removes a #${id} level1`;
  }
}
