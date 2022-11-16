// payment system
// buffering image --> success image
// pay -> setTimeout -> img.src = success image

function bankServer(){
    //logic
    return true //false;
}

let payment_promise = new Promise(function(resolve, reject){
    let pin = bankServer();

    setTimeout(function(){
        if(pin){
            resolve("Payment Succesfull")
        }else{
            reject("Try again")
        }
    },2000)
    
})
// console.log(payment_promise)



//Handling the promise
//.then .catch
//async await
let image = document.getElementById("pay_img")

// then catch

// payment_promise.then(function(res){
//     console.log(res)
//     image.src = "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif"
// })
// // if bankServer return false .. browser will give error in console
// // so .catch is used for false/reject

// payment_promise.catch(function(rej){
//     console.log(rej)
// })


// aync awaait

async function content(){
    // let res = await payment_promise;

    // console.log(res)
    // browser will give error in case os false value
    // so use try catch in case of async await

    try{
        let res = await payment_promise;

        console.log(res)
        image.src = "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif"
    }catch(err){
        console.log(err)
        image.src = "https://c.tenor.com/qsthhHhdjsQAAAAC/error-windows.gif"
    }

}
content();





