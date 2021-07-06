const getDataFromAPI = () =>{
    data = [1, 2, 3, 4, 5]
    return new Promise((resolve, reject)=>{
        if (data.lenght === 0) {
            const error = {
                massage : 'data not found'
            }
            reject(error)
        }else{
            resolve(data)
        }
    })
}
getDataFromAPI()
.then((data) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error.massage)
})