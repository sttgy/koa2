const Koa=require('koa');
const App=new Koa();
const views=require('koa-views');
const path=require('path');
//加载模板
App.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))
App.use(async ctx=>{
    let title="你好,渣男";
    await ctx.render('index',{
        title,
        list:[
           {name:'zhangwei',age:20},
           {name:'liyojng',age:18},
           {name:'javascript',age:40},
           {name:'koa2',age:50}
        ]
    })
})
App.listen(3000,()=>{
    console.log('服务器已经成功启动')
})