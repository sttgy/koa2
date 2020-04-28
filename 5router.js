const Koa=require('koa')
const app=new Koa();

const Router=require('koa-router');
const router=new Router();

router.get('/abc',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body='nihao';
});
router.get("/text",(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body="TEST";
})
//装载
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {

});

app.listen(3000, () => {
    console.log('服务器启动成功');
});