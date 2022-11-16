import navbar from "../../component/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let loggedIn = JSON.parse(localStorage.getItem("loggedin"));



let profileDetails = JSON.parse(localStorage.getItem("profile"))||[];

let logout = document.querySelector("#logout");
logout.addEventListener("click", logout1);

let profileNav = document.querySelector("#profile");

let Signup = document.querySelector("#signNav");

let login = document.querySelector("#loginNav");

let Addproduct = document.querySelector("#Addproduct");

let name = sessionStorage.getItem("name");








function logout1() {
  // console.log("name")
  sessionStorage.setItem("name", "");
  localStorage.clear();

  alert("Logged out successfully !!");
  window.location.reload();
}

// console.log(loggedIn)

let product_data = [];
let getData = async () => {
  let res = await fetch(`http://localhost:3000/api/menu`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });
  let res_data = await res.json();

  // res_data=JSON.parse(res_data)

  append(res_data);
  // console.log(res_data);
};

getData();

let append = (res_data) => {
  let container = document.querySelector("#container");
  container.innerHTML = null;

  res_data.forEach(
    ({  name, type, price, image, deliveryTime, id ,rating}) => {

      let el={  name, type, price, image, deliveryTime, id ,rating}

      let box = document.createElement("div");

      let imageDiv = document.createElement("div");

      let img = document.createElement("img");
      img.src = image;

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


      let bookbtn=document.createElement("button");
      bookbtn.innerText="Book Now"
      bookbtn.addEventListener("click",function(){
        cart(el);
      })

      imageDiv.append(img);
      box.append(imageDiv, Id, Name, Type, Price,Rating, DeliveryTime,bookbtn);

      // console.log(el)

      container.append(box);

      // console.log(sold,brandname,name,color,price,image,productBrand,id)
    }
  );
};

let cartArr=[]

let cart=(el)=>{

  cartArr.push(el)

  localStorage.setItem("cartItem",JSON.stringify(cartArr))
  console.log(el)
}







let sortBtn=document.querySelector("#Sort");


let Sort = async () => {
  let Sortvalue=sortBtn.value
  let St;
  let url;
  if(Sortvalue=="Ascending"){
    
    url=`http://localhost:3000/api/menu?_sort=price&_order=asc`
  }
  else if(Sortvalue=="Descending"){
    url=`http://localhost:3000/api/menu?_sort=price&_order=desc`
  }
  else if(Sortvalue==""){
    url=`http://localhost:3000/api/menu`
  }
  // console.log(sortBtn.value);
  let res = await fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });
  let res_data = await res.json();

  // res_data=JSON.parse(res_data)

  append(res_data);
  // console.log(res_data);
};

sortBtn.addEventListener("click",Sort);



let filterbtn=document.querySelector("#filter");


let Filter = async () => {
  let Filtervalue=filterbtn.value
  // console.log(Filtervalue);
  let url;
  if(Filtervalue=="2"){
    
    url=`http://localhost:3000/api/menu?rating_gte=2`
  }
  else if(Filtervalue=="3"){
    url=`http://localhost:3000/api/menu?rating_gte=3`
  }
  else if(Filtervalue=="4"){
    url=`http://localhost:3000/api/menu?rating_gte=4`
  }
  else if(Filtervalue==""){
    url=`http://localhost:3000/api/menu`
  }
  
  let res = await fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });
  let res_data = await res.json();

  // res_data=JSON.parse(res_data)

  append(res_data);
  // console.log(res_data);
};

filterbtn.addEventListener("click",Filter);

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



// console.log(profileDetails[0].description)