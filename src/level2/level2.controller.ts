import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException } from '@nestjs/common';
import { Level2Service } from './level2.service';
import { CreateLevel2Dto } from './dto/create-level2.dto';
import { UpdateLevel2Dto } from './dto/update-level2.dto';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';


@Controller('level2')
export class Level2Controller {
  constructor(private readonly level2Service: Level2Service,
    private jwtService: JwtService
    ) {}

  @Post()
  async create(@Req() request: Request,@Body() createLevel2Dto: CreateLevel2Dto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level2Service.create(createLevel2Dto);
    }
    catch (e) {
      throw new UnauthorizedException();
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
    return this.level2Service.findAll();
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level2Service.findOne(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateLevel2Dto: UpdateLevel2Dto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level2Service.update(+id, updateLevel2Dto);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Delete(':id')
  async remove(@Req() request: Request,@Param('id') id: string) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.level2Service.remove(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
}
