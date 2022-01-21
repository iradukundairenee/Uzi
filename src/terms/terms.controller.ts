import { Controller, Get, Post, Body, Patch, Param, Delete,Req,UnauthorizedException } from '@nestjs/common';
import { TermsService } from './terms.service';
import { CreateTermDto } from './dto/create-term.dto';
import { UpdateTermDto } from './dto/update-term.dto';
import {Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('terms')
export class TermsController {
  constructor(private readonly termsService: TermsService,
    private jwtService: JwtService
    ) {}

  @Post()
  async create(@Req() request: Request,@Body() createTermDto: CreateTermDto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.termsService.create(createTermDto);
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
    return this.termsService.findAll();
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
    return this.termsService.findOne(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Patch(':id')
 async  update(@Req() request: Request,@Param('id') id: string, @Body() updateTermDto: UpdateTermDto) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verify(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
    return this.termsService.update(+id, updateTermDto);
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
    return this.termsService.remove(+id);
    }
    catch (e) {
      throw new UnauthorizedException();
    }
  }
}
