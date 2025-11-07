import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from 'src/entities/student.entity';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Post()
  create(@Body() body) {
    return this.studentService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Student>) {
    return this.studentService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
