const Koa=require('koa');
const App=new Koa;
const bodyparser=require('koa-bodyparser');
App.use(bodyparser());

App.use(async ctx=>{
    let data=ctx.request.body;
    ctx.body=data;
})

App.listen(3000,()=>{
    console.log('服务已经启动')
})