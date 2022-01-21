import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException,UseGuards } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { CreateCombinationDto } from './dto/create-combination.dto';
import { UpdateCombinationDto } from './dto/update-combination.dto';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'



@Controller('combinations')
export class CombinationsController {
  constructor(private readonly combinationsService: CombinationsService,
    private jwtService: JwtService
    ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request: Request,@Body() createCombinationDto: CreateCombinationDto) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
    return this.combinationsService.create(createCombinationDto);
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
  }


 
 @UseGuards(JwtAuthGuard)
 @Get()
 async  findAll(@Req() request: Request) {
  const bearer = request.headers['authorization'];
      
  const token =bearer.split(' ')[1];
  const data = await this.jwtService.verify(token);
  if(data.role =="admin"){
    return this.combinationsService.findAll();
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
  }



  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request: Request,@Param('id') id: string) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){

    return this.combinationsService.findOne(+id);
  }
  else{
    return {
      message:"you are not allowed to access this"
    }
  }
  }


  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Req() request: Request,@Param('id') id: string, @Body() updateCombinationDto: UpdateCombinationDto) {
    const bearer = request.headers['authorization'];
      
    const token =bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if(data.role =="admin"){
    return this.combinationsService.update(+id, updateCombinationDto);
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
      return this.combinationsService.remove(+id);
    }
    else{
      return {
        message:"you are not allowed to access this"
      }
    }
    }
   
}
