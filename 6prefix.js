const Koa=require('koa');
const app=new Koa();

const Router=require('koa-router');
const router=new Router({
    prefix:'/zhnagwei'
});
router.get('/abc',(ctx,next)=>{
    ctx.body='zhangwei';
});
router.get('/test',(ctx,next)=>{
    ctx.body='TEST';
});
app.use(router.routes())
app.use(router.allowedMethods());
app.use(async ctx=>{

})
app.listen(3000,()=>{
    console.log('服务器已经启动')
})

