const Koa=require('koa');
const App=new Koa;

App.use(async ctx=>{
    //叠加数据
    let data="";
    //监听data事件，收到表单的数据的时候，就会执行。
    ctx.req.on('data',chunk=>{
        data+=chunk;//二进制
    });
    //接收表单提交数据完成后，就会执行次函数。
    ctx.req.on('end',()=>{
        data=decodeURI(data);
        console.log(data);
    });

    ctx.body='123';
});

App.listen(3000,()=>{
    console.log('服务器开启成功')
})