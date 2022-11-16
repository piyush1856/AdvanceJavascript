// Use deployed URL.
window.addEventListener("load", ()=> {
    getData();
})

let getData = async () => {
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product");
    let data = await res.json();
    renderDom(data);
}



let postData = async ()=>{
    let name = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let delivery = document.getElementById("delivery").value;
    let image = document.getElementById("image").value;
    
    let data = {
        Name: name,
        Price:price,
        Description:description,
        Delivery: delivery,
        Image:image,
        id:Date.now()
    }
    // console.log(data)

    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product",{
        method : "POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type" : "application/json"
        }
    })
    getData();
    document.getElementById("name").value= null;
    document.getElementById("price").value = null;
    document.getElementById("description").value = null;
    document.getElementById("delivery").value = null;
    document.getElementById("image").value = null;
}

let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML=null;

    data.forEach(({Name,Price,Description,Delivery,Image,id})=>{
        let card = document.createElement("div");
        card.setAttribute("class", "item");

        let image = document.createElement("img");
        image.src=Image;

        let name = document.createElement("h3");
        name.innerText = Name;

        let price = document.createElement("p");
        price.innerText = Number(Price);
        price.setAttribute("class", "product_price");

        let delivery = document.createElement("p");
        delivery.innerText = `Delivery By : ${Delivery}`;
        delivery.setAttribute("class", "product_delivery");

        let description = document.createElement("p");
        description.innerText = Description;

        let button_div = document.createElement("div")
        button_div.setAttribute("class", "button")

        let remove = document.createElement("button")
        remove.innerText = "Remove";
        remove.setAttribute("class", "remove_item");
        remove.onclick=()=> {
            removeData(id);
        };

        let update = document.createElement("button")
        update.innerText = "Update Price";
        update.setAttribute("class", "update_price");
        update.onclick=()=> {
            updateData(id);
        };

        button_div.append(remove,update);
        card.append(image,name,price,delivery,description, button_div);
        container.append(card);
    });
};

let removeData = async (id)=> {
    let res = await fetch(`https://young-thicket-70379.herokuapp.com/api/product/${id}`,{
        method:"DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    getData()
};

let updateData = async (id) => {
    let update = window.prompt("Enter new price");
    let data = {Price: +update};

    let res = await fetch(`https://young-thicket-70379.herokuapp.com/api/product/${id}`,{
        method:"PATCH",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    getData();
}

let low2high = async () => {
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product?_sort=Price&_order=asc");
    let data = await res.json();
    renderDom(data);
};

let high2low = async () => {
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product?_sort=Price&_order=desc");
    let data = await res.json();
    renderDom(data);
};

let greater = async () => {
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product?Price_gte=4001");
    let data = await res.json();
    renderDom(data);
};

let lesser = async () => {
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/product?Price_lte=4000");
    let data = await res.json();
    renderDom(data);
};


