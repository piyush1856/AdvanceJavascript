import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();

let authenticate = JSON.parse(localStorage.getItem("authenticate"));
let detail= JSON.parse(localStorage.getItem("user_details"));
console.log(authenticate);

document.getElementById("checkout").addEventListener("click", function(){
    checkout()
})
let checkout = () => {
    if(authenticate){
        alert("checkout Successfull")
    }else{
        alert("Login to continue")
        window.location.href = "login.html"
    }
}