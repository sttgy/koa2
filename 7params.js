const Koa=require('koa');
const App=new Koa();

const Router=require('koa-router');
const router=new Router({
    prefix:'/zhangwei'
});

router.get('/abc',(ctx,next)=>{
    ctx.body=ctx.query;
});
router.get('/text',(ctx,next)=>{
    ctx.body="张伟";
});
//装载
App.use(router.routes());
App.use(router.allowedMethods());

App.use(async ctx=>{

})

App.listen(3000,()=>{
    console.log('服务已经启动')
})