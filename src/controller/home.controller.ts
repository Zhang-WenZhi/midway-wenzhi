import { Controller, Get, Inject, Post, Body } from '@midwayjs/core';
import { RedisService } from '@midwayjs/redis';
import { MidwayI18nService } from '@midwayjs/i18n';
// wenzhi
import { ILogger } from '@midwayjs/logger';
import { CommonError } from '../common/common.error';
import { UserDTO } from '../dto/user.dto';
import { R } from '../common/base.error.util';
// wenzhi

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  /** 代码中使用redis服务 */
  // 自动注入redis服务
  @Inject()
  redisService: RedisService;

  @Get('/home_redis')
  async homeRedis(): Promise<string> {
    // 设置值
    await this.redisService.set('foo', 'bar');
    // 获取值
    return await this.redisService.get('foo');
  }

  // 自动注入i18n服务
  @Inject()
  i18nService: MidwayI18nService;

  @Get('/home_i18n')
  async homeI18n(): Promise<string> {
    // 获取值
    return this.i18nService.translate('hello', {
      locale: 'en_US',
    });
  }

  // wenzhi
  // 封装公共业务异常方法 测试
  @Inject()
  logger: ILogger;

  @Post('/home_common_error')
  async homeCommonError(): Promise<void> {
    throw new CommonError('error');
  }

  // 日志
  @Post('/home_ilogger')
  async homeILogger(@Body() user: UserDTO): Promise<void> {
    this.logger.info('hello');
    console.log(user);
  }

  // 封装异常公共方法 测试
  @Post('/home_base_error_util')
  async homeBaseErrorUtil(): Promise<void> {
    // throw new CommonError('error');
    throw R.error('error');
  }
  // wenzhi

}
