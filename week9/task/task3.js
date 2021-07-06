const getStudent = (student) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
        
      const dataStudent = ['thoriq', 'zodan', 'munif', 'musa', 'sholeh', 'ikhwan']
      let cek = dataStudent.filter ((e) =>{
          if (e === student){
            return e
        }
      }) 
      if (dataStudent.length >= 1) {
          resolve('murid' +" "+ student)
      }else {
          reject(new Error('murid tidak ditemukan'))
      }
    }, 3000);
    })
}

getStudent('zodan')
.then((resolve)=>{
    console.log(resolve)
}).catch((err)=>{
    console.log(err.message)
}).finally(()=>{
    console.log('selesai')
})
