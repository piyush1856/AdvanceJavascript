
function append(){
    let dataNike = JSON.parse(localStorage.getItem("data")) || [];
    let cointainer = document.getElementById("products_data");
    cointainer.innerHTML = null;
    // making cointainer null bacause previous data are already present in dataNike and it will repeate the data if not done null or empty
    dataNike.forEach(function(el,index){
        // started forEach loop to access element if array if objects in data and use them
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let brand = document.createElement("h3");
        brand.innerText = el.brand;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.setAttribute("id", "remove_product")
        button.addEventListener("click",function(){
            remove(index);
        })
        // setting remove function name with the help of pseudo function to add remove button functionality
        div.append(image,brand,name,price,button);
        cointainer.append(div)
        // appending everything to body to appear in web page

    })
}
append();

function remove(index){
    let dataNike = JSON.parse(localStorage.getItem("data")) || [];
    dataNike.splice(index,1)
    localStorage.setItem("data",JSON.stringify(dataNike))
    window.location.reload();

    // removing data and reloading page .. using splice method
}