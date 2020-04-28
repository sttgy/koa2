const Koa=require('koa');
const App=new Koa();



App.use(async ctx => {
    if(ctx.url==='/zhangwei'){
        ctx.cookies.set(
            'name','zhangwei',{
                domian:'localhost',
                path:'/zhangwei',
                maxAge:24*60*60*1000,
                expires:new Date('2020-5-1'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body='设置成功';
    }else{
        ctx.body='设置失败';
    }
});


App.listen(3000,()=>{
    console.log('服务器已经启动')
})