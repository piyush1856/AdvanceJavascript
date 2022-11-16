import navbar from "../../component/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();


let loggedIn = JSON.parse(localStorage.getItem("loggedin")) || [];
let logout = document.querySelector("#logout");
logout.addEventListener("click", logout1);

let profileDetails = JSON.parse(localStorage.getItem("profile"));

let profileNav=document.querySelector("#profile");

let login = document.querySelector("#loginNav");

let Signup = document.querySelector("#signNav");


let Addproduct = document.querySelector("#Addproduct");

let name = sessionStorage.getItem("name");

if (loggedIn == false || loggedIn == null) {
  logout.style.display = "none";
  profileNav.style.display = "none";
  Addproduct.style.display="none"
  console.log("non");
  // alert("Please login first");
} else {
  login.style.display = "none";
  Signup.style.display = "none"
}


if(profileDetails!=[]||profileDetails!=null||profileDetails!=undefined){
  if (profileDetails[0].description == "Admin") {
    Addproduct.style.display="block"
    console.log("non");
    // alert("Please login first");
  } else {
    Addproduct.style.display="none"
  }

  // console.log("hey")
}
else{
  Addproduct.style.display="none"
}

function logout1() {
  // console.log("name")
  sessionStorage.setItem("name", "");
  localStorage.clear();

  alert("Logged out successfully !!");
  window.location.reload();
}

let Profile=JSON.parse(localStorage.getItem("profile"))||[];


Profile.forEach(({description,email,mobile,name,token,username}) => {

    
    let container=document.querySelector("#container");
    container.innerHTML=null;

    let dname=document.createElement("p");
    dname.innerText=`Name: ${name}`;

    let demail=document.createElement("p");
    demail.innerText=`Email: ${email}`;

    let dusername=document.createElement("p");
    dusername.innerText=`Username: ${username}`;

    let dmobile=document.createElement("p");
    dmobile.innerText=`Mobile: ${mobile}`;

    let dtoken=document.createElement("p");
    dtoken.innerText=`Token: ${token}`;

    let Ddescription=document.createElement("p");
    Ddescription.innerText=`Description: ${description}`;

    

    container.append(dname,demail,dusername,dmobile,dtoken,Ddescription)
});









