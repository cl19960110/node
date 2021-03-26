// function guess大小() {
    //   let num = 2
    //   return new Promise((resolve, reject) => {
    //     if (num > 3) {
    //         console.log('大');
    //         resolve('then中的大')
    //         console.log('大2');
    //     } else {
    //         console.log('小');
    //         reject('then中的小')
    //         console.log('小2');
    //     }
    //     console.log('开始啦1');
    //     setTimeout(() => {
    //         resolve(11111)
    //         console.log(123);
    //     }, 000);
    //     console.log('开始啦2');
    //     setTimeout(() => {
    //         console.log(66666666);
    //     }, 2000);
    //   })
    // }

    // guess大小().then(
    //     res=>{
    //         console.log(res);
    //         return new Promise((resolve,reject)=>{
    //             resolve (33333)
    //         })
    //     },
    //     rej=>{
    //         console.log(rej);
    //     }
    // )
    // .then(res=>{
    //     console.log(res);
    // })
