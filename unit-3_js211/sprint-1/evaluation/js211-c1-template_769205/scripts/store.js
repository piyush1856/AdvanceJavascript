let data = JSON.parse(localStorage.getItem("mobile_data")) || [];

display();

function display(){
    data.forEach(function (el,index){
        
        let box = document.createElement("div");
        box.setAttribute("class","mobile");

        let brand = document.createElement("p");
        brand.innerText = el.brand;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let image = document.createElement("img");
        image.src = el.image;

        let btn = document.createElement("button");
        btn.setAttribute("class","remove");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            removeD(el,index);
        })

        box.append(image,brand,name,price,btn);
        document.querySelector("#mobile_list").append(box)

    })
}

function removeD(el,index){
    data.splice(index,1);

    localStorage.setItem("mobile_data",JSON.stringify(data));
    event.target.parentElement.remove();
}

function apple(){
    data.filter((el) => {
        return el.brand == apple
    })
    document.querySelector("#mobile_list").innerHTML =null;
    display()
}
function oneplus(){
    data.filter((el) => {
        return el.brand == oneplus
    })
    document.querySelector("#mobile_list").innerHTML =null;
    display()
}
function nokia(){
    data.filter((el) => {
        return el.brand == nokia
    })
    document.querySelector("#mobile_list").innerHTML =null;
    display()
}
function sort1(){
    data.sort((a,b) => {
        return a.price-b.price;
    })
    document.querySelector("#mobile_list").innerHTML =null;
    display()
}
function sort2(){
    data.sort((a,b) => {
        return b.price-a.price;
    })
    document.querySelector("#mobile_list").innerHTML =null;
    display()
}