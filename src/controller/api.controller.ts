import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { PeopleService } from '../service/people.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  peopleService: PeopleService;

  @Get('/get_people')
  async getPeople(@Query('uid') uid) {
    const user = await this.peopleService.getPeople({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
