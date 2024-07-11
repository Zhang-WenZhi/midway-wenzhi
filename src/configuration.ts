import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';

// [wenzhi]
import * as orm from '@midwayjs/typeorm';
import * as redis from '@midwayjs/redis';
import * as swagger from '@midwayjs/swagger';
import * as i18n from '@midwayjs/i18n';
import {ValidateErrorFilter} from './filter/validate.error.filter';
import { CommonErrorFilter } from './filter/common.error.filter';
// [wenzhi]

@Configuration({
  imports: [
    koa,
    validate,
    // [wenzhi]
    orm,
    redis,
    // [wenzhi]
    {
      component: swagger,
      enabledEnvironment: ['local']
    },
    // [wenzhi]
    i18n,
    // [wenzhi]
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);

    // [wenzhi]
    this.app.useFilter([ValidateErrorFilter, CommonErrorFilter]);
    // [wenzhi]
  }
}
