import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();


window.addEventListener("load" ,()=> {
    getData()
})

let getData = async () =>{
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/menu");
    let data = await res.json()
    renderDom(data)
}

let renderDom = (data) =>{
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach((el) => {
        let card = document.createElement("div");

        let Name = document.createElement("h3");
        Name.innerText = `Name : ${el.name}`;
        let Type = document.createElement("p");
        Type.innerText = `Type : ${el.type}`;
        let Price = document.createElement("p");
        Price.innerText = `Price : ${el.price}`
        let img = document.createElement("img");
        img.src = el.image;
        let Rating = document.createElement("h3");
        Rating.innerText=`Rating : ${el.rating}`

        let ADD= document.createElement("Button")
        ADD.innerText="Add To cart";
        ADD.onclick=()=>{
            AddData(el)
        }

        card.append(img,Name,Type,Price,Rating,ADD);
        container.append(card)

    })
};



let AddData = (el) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(el)
    localStorage.setItem("cart", JSON.stringify(cartData));
}