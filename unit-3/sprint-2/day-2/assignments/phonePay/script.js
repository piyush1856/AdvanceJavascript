function bankServer(){
    let x = ((Math.random()) <0.5)
    return x
}

// console.log(x)

let image=document.querySelector("#clock");
let status=document.querySelector("#tranStatus")
let date=document.querySelector("#date")
let heading=document.querySelector("#heading")


let payment_promise=new Promise(function(resolve,reject){
    let pin=bankServer();

    setTimeout(function(){
        if(pin){
            resolve("Payment successfull!");
        }else{
            reject("Try again later.")
        }
    },3000)
})




async function content(){
    try{
        let res=await payment_promise;
        console.log(res)
        image.src="https://c.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif"
        status.innerText="Transaction Successful";
        date.innerText="04:15 PM on 05 Jan 2020"
        heading.style.backgroundColor="#5FAA46"
    }catch(err){
        console.log(err)
        image.src="./imges/386.gif"
        status.innerText="Transaction Failed"
        date.innerText="04:15 PM on 05 Jan 2020"
        heading.style.backgroundColor="red"
    }
}
content()