import { Controller, Get, Post, Body, Patch, Param, Delete,Req, UseGuards } from '@nestjs/common';
import { Level2Service } from './level2.service';
import { CreateLevel2Dto } from './dto/create-level2.dto';
import { UpdateLevel2Dto } from './dto/update-level2.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('level2')
export class Level2Controller {
  constructor(private readonly level2Service: Level2Service,
    private jwtService: JwtService
    ) {}

  

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request: Request,@Body() createLevel2Dto: CreateLevel2Dto) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
    return this.level2Service.create(createLevel2Dto);
  }
  else {
    return {
      message: "you are not allowed to access this"
    }
  }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.level2Service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
    return this.level2Service.findOne(+id);
  }
  else {
    return {
      message: "you are not allowed to access this"
    }
  }
  }

  

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateLevel2Dto: UpdateLevel2Dto) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
    return this.level2Service.update(+id, updateLevel2Dto);
  }
  else {
    return {
      message: "you are not allowed to access this"
    }
  }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() request: Request,@Param('id') id: string) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
    return this.level2Service.remove(+id);
  }
  else {
    return {
      message: "you are not allowed to access this"
    }
  }
}
}
