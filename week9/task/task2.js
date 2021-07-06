const getmonth = (callback) =>{
    //set timeout untuk simulasi sebuah proses
    setTimeout(() => {
        let error = false
        //data 
        let month = ["Januari","Februari","Maret","April","Mei",
        "Juni","Juli","Agustus","September","Oktober","November","Desember"];
        //kondisi apabila true
        if(!error){

            callback(null,month) 

        }
        //kondisi apabila false
        else{

            callback(new Error("Sorry Data Not Found",[]))

        }
    }, 3000);
}
//pemanggilan fungsi serta callback
getmonth((kosong,bulan)=>{
    if (kosong== null) { 
        //method yang digunakan apabila true
        cek = bulan.map((e)=>{ 
            return e
        })
        console.log(cek) 
    }else{ 
        console.log(kosong.message)  
    }
})