import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TermsService } from './terms.service';
import { CreateTermDto } from './dto/create-term.dto';
import { UpdateTermDto } from './dto/update-term.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('terms')
export class TermsController {
  constructor(private readonly termsService: TermsService,
    private jwtService: JwtService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request: Request, @Body() createTermDto: CreateTermDto) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
      return this.termsService.create(createTermDto);
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
    
      return this.termsService.findAll();

  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request: Request, @Param('id') id: string) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
      return this.termsService.findOne(+id);
    }
    else {
      return {
        message: "you are not allowed to access this"
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Req() request: Request, @Param('id') id: string, @Body() updateTermDto: UpdateTermDto) {
    const bearer = request.headers['authorization'];

    const token = bearer.split(' ')[1];
    const data = await this.jwtService.verify(token);
    if (data.role == "admin") {
      return this.termsService.update(+id, updateTermDto);
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
    if (data.role == "admin") {

      return this.termsService.remove(+id);
    }
    else {
      return {
        message: "you are not allowed to access this"
      }
    }
  }
}
