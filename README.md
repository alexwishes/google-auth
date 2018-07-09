## 1. 安装NodeJS
### 1.1 下载NVM
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
### 1.2 安装
`source ~/.bashrc`
`nvm install --lts`

## 2. 更改执行权限
`chmod +x bin/*.sh`

## 3. 执行程序
### 3.1 不带参数默认启动8个实例
`bin/start.sh`
### 3.2 带整型参数指定启动实例数
`bin/start.sh 6` 

### 4. 停止
`bin/stop.sh`
