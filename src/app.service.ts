import { Injectable } from '@nestjs/common';
import { Data } from './Interfaces/app.interface';
import { UpdateDtoData } from './Dtos/updateUser.dto';

@Injectable()
export class AppHello {

  getHello(): string {
    return 'Hello World12344!';
  }
}

export class AppService {
  //TODO: get() post() put()/patch() delete()

  private readonly data: Data[] = [];

  getHello(): string {
    return 'Hello World12344!';
  }

  findAll(): Data[] {
    return this.data;
  }

  findOne() {
    const result = this.data.find(function (word) {
      return word.id === 2;
    });

    return result;
  }

  create(data: Data) {
    this.data.push(data);
    return this.data;
  }

  update(id: number, data: UpdateDtoData) {
    const user = this.data.find(u => u.id === id);
    if (!user) return { message: 'User not found' };

    Object.assign(user, data);
    return user;
  }

  remove(id: number) {
    const index = this.data.findIndex(u => u.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    } else {
      this.data.splice(index, 1);
      return { message: 'successfully', data: this.data };
    }
  }
}