import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHello {

  getHello(): string {
    return 'Hello World12344!';
  }
}

export class AppService {
  //TODO: get() post() put()/patch() delete()

  private data = [
    {
      id: 1,
      name: "TruongNV",
      dob: "",
      city: ""
    },
    {
      id: 2,
      name: "TruongNV2",
      dob: "",
      city: ""
    }
  ];

  getHello(): string {
    return 'Hello World12344!';
  }

  findAll() {
    return this.data;
  }

  postUser() {
    const newObject = { id: 3, name: "Test3", dob: "", city: ""};
    this.data.push(newObject);
    console.log(this.data);
    return this.data;

    //  const newObject = { id: 3, name: "Test3", dob: "", city: ""};
    // let newObject2 = this.data.concat(newObject)
    // return newObject2;
  }
}