// async function timeout(){
//     return '1'
// }
// // console.log(timeout());
// timeout().then(result=>{
//     console.log(result);
// })
// console.log('2');
// function timeout(){
//     return new Promise(resolve=>{
//         // setTimeout(()=>{
//         //     console.log(1);
//         //     resolve();
//         // },2000)
//         console.log(1);
//         resolve();
//     })
}
// async function fn(){
//     await new Promise(resolve=>{
//         setTimeout(() => {
//             console.log(3);
//             resolve();
//         }, 3000);
//     });
//     console.log(2);
// }
// fn();
// timeout();
new Promise(
    function(resolve,reject){
        console.log(1);
        resolve();
    }
).then((res)=>{
    console.log(2);
    console.log(res);
},(err)=>{
    console.log(err)
})
