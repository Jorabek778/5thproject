const row = document.querySelector('.row')

fetch("https://jsonplaceholder.typicode.com/photos")
.then((res)=> res.json())
.then(data=>{


 let box = 
 `
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[0].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[1].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[2].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[3].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[4].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[5].url}" alt="img"></div> 
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[6].url}" alt="img"></div>
 <div class="col-3 col-sm-12 col-md-6 col-lg-6 col-xl-3">  <img class="w-100 h-100 p-1" src="${data[7].url}" alt="img"></div>
 `
 row.innerHTML += box
    
})
.catch(()=> console.log("NOT FOUND"))