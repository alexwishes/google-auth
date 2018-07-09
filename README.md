# 启动
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

# 使用
## 1. API
### 1.1 生成Key并绑定
`http://localhost:3000/api/generateKey?account={自定义用户名}`

```
{
    "secret_key": "E39C8F89AC3A4BEEA212F01B7301507E",
    "base32": "IUZTSQZYIY4DSQKDGNATIQSFIVATEMJSIYYDCQRXGMYDCNJQG5CQ====",
    "qrcodeUrl": "http://qrcode.kaywa.com/img.php?s=8&d=otpauth%3A%2F%2Ftotp%2FtestUser%3Fsecret%3DIUZTSQZYIY4DSQKDGNATIQSFIVATEMJSIYYDCQRXGMYDCNJQG5CQ%3D%3D%3D%3D",
    "qrcodeStr": "otpauth%3A%2F%2Ftotp%2FtestUser%3Fsecret%3DIUZTSQZYIY4DSQKDGNATIQSFIVATEMJSIYYDCQRXGMYDCNJQG5CQ%3D%3D%3D%3D"
}
```

其中secret_key为共享密钥，base32是secret_key的base32形式，qrcodeUrl提供直接生成的二维码，qrcodeStr为二维码实际内容

### 1.2 验证Code
`http://localhost:3000/api/verify?key=E39C8F89AC3A4BEEA212F01B7301507E&code=522176`

```
{
    "result": false,
    "code": "522176",
    "key": "E39C8F89AC3A4BEEA212F01B7301507E"
}
```

key就是1.1中的secret_key，code就是二次验证生成的code，result表示验证成功或者失败

## 2. 客户端程序
所有支持google-authenticator的客户端都可以

Android：https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1

IOS：https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8
