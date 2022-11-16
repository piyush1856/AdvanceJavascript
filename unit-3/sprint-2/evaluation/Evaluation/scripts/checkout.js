let button = document.querySelector("#submit");
button.addEventListener("click", function(e){
    e.preventDefault()
    getAlert()
})

function getAlert(){
    let count =0;

    let id = setInterval(function(){
        if(count ==0){
            alert("Your order is confirmed")
        }
        else if(count ==3){
            alert("Your order is being Packed")
        }
        else if(count ==8){
            alert("Your order is in transit")
        }
        else if(count ==10){
            alert("Your order is out for delivery")
        }
        else if(count ==12){
            alert("Order delivered")
        }
        count++;
    },1000)
}