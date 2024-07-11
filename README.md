# my_midway_project

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


[midway]: https://midwayjs.org

### 记录

```shell
E:\Desktop\front-learn>npm init midway@latest -y
√ Hello, traveller.
  Which template do you like? · koa-v3 - A web application boilerplate with midway v3(koa)
√ What name would you like to use for the new project? · midway-demo
Successfully created project midway-demo
Get started with the following commands:

$ cd midway-demo
$ npm install
$ npm run dev


Thanks for using Midway

Document ❤ Star: https://github.com/midwayjs/midway


E:\Desktop\front-learn>cd midway-demo

E:\Desktop\front-learn\midway-demo>code .
```

```shell
E:\Desktop\front-learn\midway-demo>pnpm install
Downloading typescript@4.8.4: 11.94 MB/11.94 MB, done
 WARN  6 deprecated subdependencies found: @humanwhocodes/config-array@0.5.0, @humanwhocodes/object-schema@1.2.1, glob@7.2.3, inflight@1.0.6, rimraf@3.0.2, superagent@8.1.2
Packages: +641
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 642, reused 0, downloaded 641, added 641, done

dependencies:
+ @midwayjs/bootstrap 3.16.2
+ @midwayjs/core 3.16.2
+ @midwayjs/info 3.16.4
+ @midwayjs/koa 3.16.4
+ @midwayjs/logger 3.4.2
+ @midwayjs/validate 3.16.4

devDependencies:
+ @midwayjs/mock 3.16.4
+ @types/jest 29.5.12
+ @types/node 14.18.63 (20.14.10 is available)
+ cross-env 6.0.3 (7.0.3 is available)
+ jest 29.7.0
+ mwts 1.3.0
+ mwtsc 1.10.3
+ ts-jest 29.2.2
+ typescript 4.8.4 (5.5.3 is available)

Done in 16.9s
```

### launch.json

> 初始

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\bootstrap.js"
        }
    ]
}
```

> 修改

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [{
        "name": "Midway Local",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceRoot}",
        "runtimeExecutable": "npm",
        "windows": {
            "runtimeExecutable": "npm.cmd"
        },
        "runtimeArgs": [
            "run",
            "dev"
        ],
        "env": {
            "NODE_ENV": "local"
        },
        "console": "integratedTerminal",
        "protocol": "auto",
        "restart": true,
        "port": 7001,
        "autoAttachChildProcesses": true
    }]
}


```

### 封装、继承、多态

```shell
创建实体
创建DTO,前端向后端传送数据的模型
创建service
创建controller

常用封装方法:
封装基础entity的实体类
封装基础service
封装异常公共方法
封装常用校验规则
```
