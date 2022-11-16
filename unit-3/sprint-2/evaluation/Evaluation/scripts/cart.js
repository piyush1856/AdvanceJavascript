let cartfromLS = JSON.parse(localStorage.getItem("cart_items"));
display(cartfromLS);
function display(cartfromLS){
    document.querySelector("#cart").innerHTML ="";

    cartfromLS.forEach(function(el,index){
        let box2 = document.createElement("div");
        box2.setAttribute("class", "food");

        
        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h3");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

       

        let button = document.createElement("button");
        button.setAttribute("class", "remove");
        button.innerText = "Remove";
        button.addEventListener("click", function(){
            remove(index);
        })

        box2.append(image,name,price,button);
        document.querySelector("#cart").append(box2)
    })
}
function total(cartfromLS){
    let total = document.querySelector("#cart_total");
    let totalPrice =0;
    totalPrice = total + cartfromLS.price;
    total.append(totalPrice);
    
}
total(cartfromLS)
function remove(index){
    cartfromLS.splice(index,1)
    localStorage.setItem("cart_items", JSON.stringify(cartfromLS));
    display(cartfromLS)
}