import { Injectable } from '@nestjs/common';
import { CreateCombinationDto } from './dto/create-combination.dto';
import { UpdateCombinationDto } from './dto/update-combination.dto';
import{Combination } from './entities/combination.entity'

@Injectable()
export class CombinationsService {
  async create(createCombinationDto: CreateCombinationDto) {

    const createCombination =new Combination();
    createCombination.name = createCombinationDto.name;
    createCombination.level1Id = createCombinationDto.level1Id;
    createCombination.level2Id = createCombinationDto.level2Id;

    return await createCombination.save();
  }


 

  async findAll() {
    return await Combination.find();
  }


  async findOne(id: number) {
    return await Combination.findOne(id);
  }
  async update(id: number, updateCombinationDto: UpdateCombinationDto) {

    return await Combination.update(id, updateCombinationDto);
  }

  async remove(id: number) {
    return await Combination.delete(id);
  }
}
