import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.studentService.create(body);
  }
}
