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
