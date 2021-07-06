//import data
const db = require('./invoice')

//function
const invoice = (db) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          //pemanggilan data dengan map
          const totalProduct = db.map(item =>({
              name : item.namaProduct,
              totalvalue : item.price * item.qty
          }))  
          //apabila berhasil     
              resolve(totalProduct)
          //apabila gagal
              reject(new Error('data tidak di temukan'))
      }, 3000);
    })
  }
  //pemanggilan function dan promise
  invoice(db)
.then((resolve)=>{
    console.log(resolve)
}).catch((err)=>{
    console.log(err.message)
}).finally(()=>{
    console.log('selesai')
})

  