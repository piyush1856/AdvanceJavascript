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

let cartItem=JSON.parse(localStorage.getItem("cartItem"))||[];

console.log(cartItem)



let append = () => {
    let container = document.querySelector("#cartContainer");
    container.innerHTML = null;
  
    cartItem.forEach(
      ({  name, type, price, image, deliveryTime, id ,rating}) => {
  
        let el={  name, type, price, image, deliveryTime, id ,rating}
  
        let box = document.createElement("div");
  
        let imageDiv = document.createElement("div");
  
        let img = document.createElement("img");
        img.src = image;

        let InfoDiv = document.createElement("div");

        let Id = document.createElement("p");
        Id.innerText = `ID: ${id}`;
  
        let Name = document.createElement("p");
        Name.innerText = `Name: ${name}`;
  
        let Type = document.createElement("p");
        Type.innerText = `Type: ${type}`;
  
        let DeliveryTime = document.createElement("p");
        DeliveryTime.innerText = `DeliveryTime: ${deliveryTime} mins`;
  
        let Price = document.createElement("p");
        Price.innerText = `Price: ₹ ${price} for one`;
        
        let Rating = document.createElement("p");
        Rating.innerText = `Rating:  ${rating}`;
  
  
        let Checkbtn=document.createElement("button");
        Checkbtn.innerText="Checkout"
        Checkbtn.addEventListener("click",function(){
          cart(el);
        })
  
        imageDiv.append(img);
        InfoDiv.append(Id, Name, Type, Price,Rating, DeliveryTime,Checkbtn)
        box.append(imageDiv,InfoDiv );
  
        // console.log(el)
  
        container.append(box);
  
        // console.log(sold,brandname,name,color,price,image,productBrand,id)
      }
    );
  };
  append();

  let cart = ()=>{
    alert("order placed")
  }
















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


