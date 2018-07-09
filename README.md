## 1. 安装NodeJS
### 1.1 下载NVM
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
### 1.2 安装
`source ~/.bashrc`

`nvm install --lts`

## 2. 同步时间
`sudo apt install ntpdate`     #安装ntpdate

`sudo ntpdate ntp1.aliyun.com`      #与时间服务器同步时间

## 3. 下载代码
`git clone https://github.com/alexwishes/google-auth.git`

## 4. 安装依赖
`cd google-auth`

`npm install`

## 5. 更改执行权限
`chmod +x bin/*.sh`

## 6. 执行程序
### 6.1 不带参数默认启动8个实例
`bin/start.sh`
### 6.2 带整型参数指定启动实例数
`bin/start.sh 6` 

### 7. 停止
`bin/stop.sh`
