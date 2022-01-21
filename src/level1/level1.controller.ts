import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UnauthorizedException, } from '@nestjs/common';
import { Level1Service } from './level1.service';
import { CreateLevel1Dto } from './dto/create-level1.dto';
import { UpdateLevel1Dto } from './dto/update-level1.dto';
import {Request } from 'express';
import { JwtService } from '@nestjs/jwt';
@Controller('level1')
export class Level1Controller {
  constructor(private readonly level1Service: Level1Service,
    private jwtService: JwtService
  ) { }

  @Post()
  async create(@Req() request: Request,@Body() createLevel1Dto: CreateLevel1Dto) {
    try {
      const bearer = await  request.headers['authorization'];
      const token = await bearer.split(' ')[1];
      const data = await this.jwtService.verify(token);
      if (!data) {
        throw new UnauthorizedException();
      }
      return this.level1Service.create(createLevel1Dto);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get()
  async findAll(@Req() request: Request) {
    try {
      const bearer = await  request.headers['authorization'];
      const token = await bearer.split(' ')[1];
      const data = await this.jwtService.verify(token);
      if (!data) {
        throw new UnauthorizedException();
      }
      else{
    return this.level1Service.findAll();
      }
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    try {
      const bearer = await  request.headers['authorization'];
      const token = await bearer.split(' ')[1];
      const data = await this.jwtService.verify(token);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level1Service.findOne(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string,@Body() updateLevel1Dto: UpdateLevel1Dto) {
    try {
      const bearer = await  request.headers['authorization'];
      const token = await bearer.split(' ')[1];
      const data = await this.jwtService.verify(token);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level1Service.update(+id, updateLevel1Dto);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
  @Delete(':id')
  async remove(@Req() request: Request,@Param('id') id: string) {
    try {
      const bearer = await  request.headers['authorization'];
      const token = await bearer.split(' ')[1];
      const data = await this.jwtService.verify(token);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level1Service.remove(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
}
