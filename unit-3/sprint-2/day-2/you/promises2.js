//Promise() // this is a function
//new Promise() // construtor function

// promise take a parameter - function(resolve,reject)

let p = new Promise(function(resolve,reject){
    // resolve("resolved");
    reject("rejected") //it will give error in console (no need to worry)
});
console.log(p)

let p2 = new Promise(function(res,rej){
    
})