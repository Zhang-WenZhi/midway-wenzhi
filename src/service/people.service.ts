import { Provide } from '@midwayjs/core';
import { IPeopleOptions } from '../interface';

@Provide()
export class PeopleService {
  async getPeople(options: IPeopleOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
