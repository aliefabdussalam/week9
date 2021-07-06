//import fetch 
const fetch = require('node-fetch');
//fetch dengan url yang diperlukan
fetch('https://jsonplaceholder.typicode.com/users')
//pemanggilan then 
.then(res => res.json())
//method for each untuk pemanggilan element dengan id yang sama
.then(json => json.forEach((item, index) => {
  console.log(`${index} : ${item.name}`);
}))

  