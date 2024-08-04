# my_midway_project

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [midway 文档][midway]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
```

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。


[midway]: https://midwayjs.org

### ubuntu node

https://gitee.com/loyalty-code/nvm

```shell
sudo apt install curl
# 二者选其一，注意wget命令里的-q参数表示--quiet，安静模式，无信息输出，看不到错误，也可去掉该参数
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

```

上面国内不行，手动安装：

```shell
# 关闭并重新打开终端或者运行以下命令来更新环境变量：
export NVM_DIR="$HOME/.nvm" # $HOME git 克隆的目录
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

```shell
nvm --version
nvm install node
nvm use node
```

### (ubuntu) Io.js 这个是很旧的node版本，需要更换镜像源安装！

```shell
Ubuntu安装NVM及简单使用
https://blog.csdn.net/xhp312098226/article/details/131247719
git 手动安装
```

Io.js是基于Node.js的npm兼容平台。io.js团队正在加速开发，现最新版本已升级到v3.3.1，并提供Nightly测试版本。

export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/

windows: nvm ls available
ubuntu: nvm ls-remote

临时用：
// 1. 安装cnpm
npm install -g pnpm --registry=https://registry.npmmirror.com

// 2. 检测是否安装成功
pnpm -v


```shell
# 切换npm镜像仓库
// 1. 清空缓存
npm cache clean --force

// 2. 切换新源
npm config set registry https://registry.npmmirror.com

// 3. 检测是否切换成功
npm config get registry

```

### ubuntu mkdir: cannot create directory ‘/usr/zogzhang/.nvm/alias’: Permission denied

sudo mkdir -p /usr/zogzhang/.nvm/alias
使用sudo命令来获取管理员权限创建目录:
sudo mkdir -p /usr/zogzhang/.nvm/alias
另一个选择是改变目录的所有权:
sudo chown $(whoami) /usr/zogzhang/.nvm

### pnpm install 报错（ubuntu）

```shell
wenzhi@wenzhi-VMware-Virtual-Platform:/usr/zogzhang/midway-wenzhi$ pnpm install --registry=https://registry.npmmirror.com
 EACCES  EACCES: permission denied, open '/usr/zogzhang/midway-wenzhi/_tmp_24776_b85551fa115d2aa5fe70dac00212e059'
```

sudo chown $(whoami) /usr/zogzhang/midway-wenzhi


###  (不管用！目录里的文件也没有权限) VSCode远程连接Remote SSH (SSH) 无法保存的解决办法

未能保存“README.zh-CN.md”: 无法写入文件"vscode-remote://ssh-remote+192.168.174.128/usr/zogzhang/midway-wenzhi/README.zh-CN.md"(NoPermissions (FileSystemError): Error: EACCES: permission denied, open '/usr/zogzhang/midway-wenzhi/README.zh-CN.md')

```shell
在VSCode新建终端 
进入到文件所在的目录
输入如下命令修改文件相关权限，使得ssh有权限修改该文件：
# 例如我的文件夹是 www 就是 chmod 757 www
chmod 757 [文件夹名称]
sudo chmod 757 midway-wenzhi
```

### 其他账户登录后，创建root密码

```shell
sudo passwd -u root # 其他账户登录，创建root密码
sudo passwd root # 设置root用户密码
su root # 切换到root用户
```