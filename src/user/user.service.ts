import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    // console.log('id', id);
    return `This action returns a #${id} user`;
  }

  searchData(query: string) {
    console.log('query from service:', query);
    return { msg: `The search Query is:  ${query}` };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
