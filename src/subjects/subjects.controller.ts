import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException  } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';


@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService,
    private jwtService: JwtService
    ) {}

  @Post()
  async create(@Req() request: Request,@Body() createSubjectDto: CreateSubjectDto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.subjectsService.create(createSubjectDto);
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
    return this.subjectsService.findAll();
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
    return this.subjectsService.findOne(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.subjectsService.update(+id, updateSubjectDto);
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
      return this.subjectsService.remove(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
}
