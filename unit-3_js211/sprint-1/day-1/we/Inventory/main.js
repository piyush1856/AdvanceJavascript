// let user = {
//     name : "pablo",
//     email: "pablo@gmail.com"
// }

// array is rerquired for multiple things

// Inventory System
// data will be stored in the localStorage
// Fetch this data and append to the dom


function Product (n,p,i){
    this.name =n;
    this.price =p;
    this.image =i;
};

let submit = () => {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    // let obj = {
    //     name,price,image,
    // }
    // console.log(obj)

    // constructor function

    let p = new Product(name,price,image)
    console.log(p)

    let data = JSON.parse(localStorage.getItem("data")) || [];

    data.push(p);
    localStorage.setItem("data",JSON.stringify(data));
    document.getElementById("name").value=null;
};

//1.check whether key is present or not
//2. if not initialize an empty array
// null ---> false

