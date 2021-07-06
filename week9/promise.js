const sibuk = 0
const janjian = new Promise((resolve, reject) =>{
    console.log('pending')
    if (sibuk === 1) {
        reject ('maaf sibuk')
    }
    else{
        resolve('saya akan datang')
    }
})
janjian.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject)
}).finally(()=>{
    console.log('selesai')
})