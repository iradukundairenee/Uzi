import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { Level1Service } from './level1.service';
import { CreateLevel1Dto } from './dto/create-level1.dto';
import { UpdateLevel1Dto } from './dto/update-level1.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('level1')
export class Level1Controller {
  constructor(private readonly level1Service: Level1Service,
    private jwtService: JwtService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request: Request, @Body() createLevel1Dto: CreateLevel1Dto) {

    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
      return this.level1Service.create(createLevel1Dto);
    }
    else {
      return {
        message: "you are not allowed to access this"
      }
    }
  }



  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {

    return this.level1Service.findAll();


  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request: Request, @Param('id') id: string) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == 'admin') {
      return this.level1Service.findOne(+id);
    }
    else {
      return {
        message: "you are not allowed to access this"
      }
    }
  }

  @Patch(':id')
  async update(@Req() request: Request, @Param('id') id: string, @Body() updateLevel1Dto: UpdateLevel1Dto) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == 'admin') {

      return this.level1Service.update(+id, updateLevel1Dto);
    }
    else {
      return {
        message: "you are not allowed to access this"
      }
    }
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() request: Request, @Param('id') id: string) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == 'admin') {
      return this.level1Service.remove(+id);
    } else {
      return {
        message: "you are not allowed to access this"
      }
    }

  }
}
