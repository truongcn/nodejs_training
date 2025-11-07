import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOne({ where: { Id: id } });
  }

  create(student: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepository.create(student);
    return this.studentRepository.save(newStudent);
  }

  async update(id: number, data: Partial<Student>) {
    const student = await this.studentRepository.findOne({ where: { Id: id } });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    Object.assign(student, data);
    const saved = await this.studentRepository.save(student);

    return { message: 'successfully' };
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
