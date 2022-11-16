let hotelFromLS = JSON.parse(localStorage.getItem("hotel"));

let display = (hotelFromLS) => {
   let container =  document.querySelector("#hotel_details") 
    container.innerHTML = null;

    hotelFromLS.forEach(function(el){
        let img = document.createElement("img");
        img.src = el.Images.one;

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let price = document.createElement("p");
        price.innerText = el.Price;


        // let button = document.createElement("button");
        // button.setAttribute("class", "book")
        // button.innerText = "Book";
        // button.addEventListener("click", function(){
        //     book(el);
        // })


        let div = document.createElement("div");
        div.setAttribute("id", "hotel2")
        div.append(img,title, price)
        container.append(div)

    })
}
display(hotelFromLS)