import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1720706727271_8392',
  koa: {
    port: 7001,
  },
  // [wenzhi
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: 'localhost', // 数据库ip地址，本地就写localhost
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'web_midway', // 数据库名称
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: true,
        // 扫描entity文件夹
        entities: ['**/entity/*{.ts,.js}'],
      },
    },
  },
  redis: {
    client: {
      port: 6379, // Redis port
      host: '192.168.174.128', // Redis host
      password: 'MyPassword123go',
      db: 0,
    },
  },
  // wenzhi]
  i18n: {
    // 把你的翻译文本放到这里
    localeTable: {
      en_US: require('../locales/en_US'),
      zh_CN: require('../locales/zh_CN'),
    },
  },
  // wenzhi]
} as MidwayConfig;
