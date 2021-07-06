//import data
const database = require('./student.js')
//function for data
const getDataFromAPI = (data) =>{
    //promise 
    return new Promise((resolve, reject)=>{
        //kondisi apabila data tidak ditemukan
        if (data.lenght === 0) {
            const error = {
                massage : 'data not found'
            }
            reject(error)
        //apabila ditemukan maka akan ditampilkan
        }else{
            resolve(data)
        }
    })
}
//pemanggilan fungsi
getDataFromAPI(database)
.then((data) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error.massage)
})