cars = ["BMW","BMW", "Toyota", "Suzuki", "Lamborghini"]

const filterData = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const carFilter = cars.filter((e) => {
            if (e === car){
                return e
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
const getcars = async() =>{
    try{
        const data = await filterData("BMW")
        console.log(data)
    } catch (error){
        console.log(error.message)
    }
}
getcars()
