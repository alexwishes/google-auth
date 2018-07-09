const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const cors = require('koa2-cors');

const genKey = require('./modules/genUUID')
const otp = require('./modules/verify')

let page = new Router()
page.get('/404', async ( ctx )=>{
    ctx.body = '404 page!'
}).get('/generateKey', async ( ctx )=>{
    account = ctx.query.account;
    key = genKey.uuid.generateUUID();
    b32 = genKey.uuid.base32(key);
    qrcodeUrl = 'http://qrcode.kaywa.com/img.php?s=8&d=' + encodeURIComponent('otpauth://totp/'+account+'?secret=' + b32);
    qrcodeStr = encodeURIComponent('otpauth://totp/'+account+'?secret=' + b32);
    ctx.body = {"secret_key":key,"base32":b32,"qrcodeUrl":qrcodeUrl,"qrcodeStr":qrcodeStr};
}).get('/verify',async(ctx)=>{
    param = ctx.query;
    ctx.body = {"result":otp.totp.verify(param.code,param.key),"code":param.code,"key":param.key}
})

// Deal with CORS's problem
app.use(cors())

let router = new Router()
router.use('/api', page.routes(), page.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})
