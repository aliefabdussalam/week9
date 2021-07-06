const conectDB = () => {
    console.log("1. connect db")
  }
  const fetch = (cb1, cb2) => {
    setTimeout(() => {
      console.log("2. fetch data from db")
      cb1(cb2)
    }, 3000);
  }
  const filter = (cb2) => {
    setTimeout(() => {
      console.log("3. filter data")
      cb2()
    }, 3000);
  }
  const result = () => {
    console.log("4. result data")
  }

conectDB()
fetch(filter, result)

