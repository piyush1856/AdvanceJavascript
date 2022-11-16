/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let arr = JSON.parse(localStorage.getItem("user")) || [];

function submit(){
    let image = document.getElementById("user_pic").value;
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let country = document.getElementById("user_country").value;

    let user = new item(image,name,email,country)
    arr.push(user)
    localStorage.setItem("user",JSON.stringify(arr))

    document.getElementById("user_pic").value = null;
    document.getElementById("user_name").value = null;
    document.getElementById("user_email").value = null;

}

function item (i,n,e,c){
    this.image = i;
    this.name=n;
    this.email =e;
    this.country = c;
}
