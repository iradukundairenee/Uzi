import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException,UseGuards} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService,
    private jwtService: JwtService
    ) {}

    @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request: Request,@Body() createSubjectDto: CreateSubjectDto) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
  
    return this.subjectsService.create(createSubjectDto);
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
    
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {

  
  
    return this.subjectsService.findAll();
  
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
   
    return this.subjectsService.findOne(+id);
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
    
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
   
    return this.subjectsService.update(+id, updateSubjectDto);
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
    
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() request: Request,@Param('id') id: string) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
      return this.subjectsService.remove(+id);
    }
    else{
      return {
        message:"you are not allowed to access this"
      }
    }
  }
}
