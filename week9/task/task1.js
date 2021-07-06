const cekhariKerja = (day) =>{
    //promise
    return new Promise ((resolve, reject) =>{
        //set timeout untuk simulasi sebuah proses
        setTimeout(() => {
            //data
            const dataDay = ['senin', 'selasa', "rabu", "kamis", "jumat"]
            //method seleksi yang digunakan
            let cek = dataDay.find((item)=>{
                //dia akan mereturn item true apabila item sama dengan day
                return item === day
            })
            //jika true maka akan melalui tahap resolve
            if (cek){
                resolve(cek)
            //jika false akan melalui reject
            }else {
                reject (new Error('hari ini bukan hari kerja'))
            }
        }, 3000);
    })
} 
const gethari = async() =>{
    //try akan dilakukan apabila hasilnya true
    try{
        const data = await cekhariKerja("sabtu")
        console.log(data)
    //cath akan dilakukan apabila false    
    } catch (error){
        console.log(error.message)
    }
}
gethari()