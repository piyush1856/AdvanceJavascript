// let url = "https://grocery-masai.herokuapp.com/items";

const url ="https://grocery-masai.herokuapp.com/items";

async function getData(){
    
    try{
        let res = await fetch(url);
        let newres = await res.json();
        append(newres.data)
        console.log(newres.data)
    }catch(err){
        console.log(err)
    }
} 
getData()
let cartArr = JSON.parse(localStorage.getItem("cart_items")) || [];

function append(data){
    let container = document.querySelector("#groceries");
    container.innerHTML = null;

    data.forEach(function(el){
        let box = document.createElement("div");
        box.setAttribute("class", "item")
    
        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h3");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.setAttribute("class", "add_to_cart");
        button.innerText = "Add To Cart";
        button.addEventListener("click", function(){
            addToCart(el);
        })

        box.append(image,name,price,button);
        container.append(box)

    })
    
}
function addToCart(el){
    let wallet = +document.querySelector("#wallet").innerText;

    wallet = wallet - el.price;
    if(wallet<0){
        alert("Insufficient balance")
    }else{
        document.querySelector("#wallet").innerText = wallet;
        cartArr.push(el);
        localStorage.setItem("cart_items", JSON.stringify(cartArr));
    }
    
}

