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
//pemanggilan fungsi
cekhariKerja("minggu")
//pemanggilan promise
.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject.message)
}).finally(()=>{
    console.log('selesai')
})