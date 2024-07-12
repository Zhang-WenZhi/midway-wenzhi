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

### vscode 连接虚拟机

```shell
sudo apt update
sudo apt install openssh-server
sudo apt-get install ssh # 也行
# apt-get install ssh # 没权限

# vim 没有被发现 # 要安装 sudo apt install vim
sudo vi /etc/ssh/sshd_config
sudo nano /etc/ssh/sshd_config # 也行 # Ctrl + X键退出nano编辑器 # Ctrl + H来退出而不保存 # Ctrl + C 然后按 Y 
# sshd_config 没有 PermitRootLogin yes # 安装ssh，即看不见PermitRootLogin
# ssh_config 也没有 PermitRootLogin yes # 安装ssh后，sshd_config里有，ssh_config没有
# 确认退出 # Ctrl + S来保存
PermitRootLogin yes
# service sshd restart # sudo systemctl restart sshd # 没有sshd服务
service ssh restart
sudo systemctl restart ssh # 也行
ssh name@ip -A
```

### ubantu安装node nvm

https://github.com/nvm-sh/nvm/releases

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.39.7/install.sh | bash
```

```
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

nvm ls-remote

```

```shell
# 通过git手动安装
sudo apt install git
cd ~/
git clone https://github.com/nvm-sh/nvm.git .nvm
cd ~/.nvm
git checkout v0.39.7
./nvm.sh
```

```shell
# gedit或vim修改~/.bashrc和~/.profile
sudo gedit ~/.bashrc
sudo gedit ~/.profile

# NVM_DIR对应的是自己真实存放nvm的目录
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc
source ~/.profile
```

### ubantu 目录结构说明

```shell
├── bin # 可执行文件
├── boot # 启动文件
├── dev # 设备文件
├── etc # 配置文件
├── home # 用户目录
├── lib # 库文件
├── media # 媒体文件
├── mnt # 挂载文件
├── opt # 可选文件
├── proc # 进程文件
├── root # root用户目录
├── sbin # 系统管理文件
├── srv # 服务文件
├── sys # 系统文件
├── tmp # 临时文件
├── usr # 用户文件
└── var # 变量文件
```

```shell
/bin 和 /sbin: 这些目录包含系统级别的可执行程序。/bin目录包含基本的系统命令，而/sbin则包含系统管理员使用的系统命令。
/etc: 这个目录包含系统配置文件，几乎所有系统级别的配置文件都存储在这里，包括网络配置、服务配置、用户账户配置等。
/var: 包含变量数据，包括日志文件、临时文件、邮件和其他经常变化的数据。
/usr: 用户的应用程序和文件通常安装在此处，包括用户级别的命令和数据。
/home: 个人用户的家目录，包括桌面、文档、音乐等个人文件。
/boot: 包含Linux内核和引导文件的目录。
/lib 和 /lib64: 这些目录包含系统库文件，用于支持系统运行时。
/proc 和 /sys: 这两个是虚拟文件系统，/proc提供有关系统内核状态和进程信息的详细信息，而/sys提供有关系统硬件和内核信息的详细信息。
/dev: 包含系统中所有设备文件的目录。
此外，Ubuntu系统中还有一些特殊的目录，如：

/root: 超级用户的home目录。
/tmp: 应用放临时文件的地方。
/opt: 可以用来存储不用package manager管理的软件，即存放不是用包管理器安装的软件的地方。
/media 和 /mnt: 分别是外部设备和临时挂载点的目录，用于挂载如U盘和网络文件系统等设备。
```


### git CVE 版本更新

```shell
git -v
# 或者
git --version


# <=2.17.1更新命令：
git update

# >2.17.1更新命令：
git update-git-for-windows

# Mac
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew upgrade git

# Debian的系统（如Ubuntu）
sudo apt-get update
sudo apt-get install --only-upgrade git

# RPM的系统（如Fedora或CentOS）
sudo yum update git
sudo dnf update git # 使用的是dnf
```