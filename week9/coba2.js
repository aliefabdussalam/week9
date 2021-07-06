cars = ["BMW","BMW", "Toyota", "Suzuki", "Lamborghini"]

const filterData = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const carFilter = cars.filter((e) => {
            if (e === car){
                return e + console.log(e)
            }
           
        })
       
        if (carFilter.length >= 1) {
            resolve('data ditemukan')
        }else {
            reject(new Error('pesan data tidak di temukan'))
        }
      // buatlah sebuah proses filter
      // ketika data tidak ditemukan maka kirim error, pesan data tidak di temukan
    }, 3000);
  })
}

filterData("BMW")
.then((resolve)=>{
    console.log(resolve)
}).catch((err)=>{
    console.log(err.message)
}).finally(()=>{
    console.log('selesai')
})
