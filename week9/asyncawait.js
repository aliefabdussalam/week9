const fecthdata = ()=>{
    const data = [0, 1, 2, 2, 3, 4, 5]
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
         resolve(data)  
       
        }, 3000);
    })
}
const filter = (data) =>{
    const hasil = data.filter((e)=>{
       return e > 1 
    })
    return hasil
}

const getData = async() =>{
    const data = await fecthdata(filter)
    const filterData = await filter(data)
    console.log(filterData)
}
getData()