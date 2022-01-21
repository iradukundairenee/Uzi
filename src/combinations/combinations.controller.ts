import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException,UseGuards } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { CreateCombinationDto } from './dto/create-combination.dto';
import { UpdateCombinationDto } from './dto/update-combination.dto';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';

import {RolesGuard} from '../auth/guards/roles.guard'


@Controller('combinations')
export class CombinationsController {
  constructor(private readonly combinationsService: CombinationsService,
    private jwtService: JwtService
    ) {}

  
  @Post()
  async create(@Req() request: Request,@Body() createCombinationDto: CreateCombinationDto) {
    // try {
    //   const bearer = request.headers['authorization'];
    //   const token =bearer.split(' ')[1];
    //   const data = await this.jwtService.verify(token);
    //   if (!data) {
    //     throw new UnauthorizedException();
      // }
    return this.combinationsService.create(createCombinationDto);
    // }
    // catch (e) {
    //   throw new UnauthorizedException();
    // }
  }



 @Get()
 async  findAll(@Req() request: Request) {
  // try {
  //   const bearer = request.headers['authorization'];
  //   const token =bearer.split(' ')[1];
  //   const data = await this.jwtService.verify(token);
  //   if (!data) {
  //     throw new UnauthorizedException();
  //   }
    return this.combinationsService.findAll();
  // }
  // catch (e) {
  //   return e.message;
  // }
  }

  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.combinationsService.findOne(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateCombinationDto: UpdateCombinationDto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.combinationsService.update(+id, updateCombinationDto);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Delete(':id')
  async remove(@Req() request: Request,@Param('id') id: string) {
    try{
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
      return this.combinationsService.remove(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
}
