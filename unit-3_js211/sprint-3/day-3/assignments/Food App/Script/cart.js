import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();

let cartArr = JSON.parse(localStorage.getItem("cart"));

window.addEventListener("load" ,()=> {
    renderDom(cartArr)
})

let renderDom = (cartArr) =>{
    let container = document.getElementById("container");
    container.innerHTML = null;

    cartArr.forEach((el,index) => {
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
        ADD.innerText="Remove";
        ADD.onclick=()=>{
            Remove(el,index)
        }

        card.append(img,Name,Type,Price,Rating,ADD);
        container.append(card)

    })
};

let Remove = (el,index) => {
    cartArr.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(cartArr));
    renderDom(cartArr)
}