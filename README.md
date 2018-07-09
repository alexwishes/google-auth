1. 安装NodeJS
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

2. 更改执行权限
chmod +x bin/*.sh

3. 执行程序
3.1 bin/start.sh  #不带参数默认启动8个实例
3.2 bin/start.sh 6 #带整型参数指定启动实例数

4. 停止
bin/stop.sh
