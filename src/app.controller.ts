import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AddDtoData } from './Dtos/addUser.dto';
import { UpdateDtoData } from './Dtos/updateUser.dto';

@Controller('hello')
export class HelloController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) { }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Post()
  async create(@Body() createDataDto: AddDtoData) {
    return this.appService.create(createDataDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateDtoData) {
    return this.appService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}

