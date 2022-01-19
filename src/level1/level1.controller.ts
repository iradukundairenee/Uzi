import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UnauthorizedException,Res } from '@nestjs/common';
import { Level1Service } from './level1.service';
import { CreateLevel1Dto } from './dto/create-level1.dto';
import { UpdateLevel1Dto } from './dto/update-level1.dto';
import {Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
@Controller('level1')
export class Level1Controller {
  constructor(private readonly level1Service: Level1Service,
    private jwtService: JwtService
  ) { }

  @Post()
  async create(@Body() createLevel1Dto: CreateLevel1Dto) {
    try {
     
      return this.level1Service.create(createLevel1Dto);
    }
    catch (e) {
      return e.message;
    }
  }

  @Get()
  async findAll(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
      return this.level1Service.findAll();
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.level1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevel1Dto: UpdateLevel1Dto) {
    return this.level1Service.update(+id, updateLevel1Dto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.level1Service.remove(+id);
  }
}
