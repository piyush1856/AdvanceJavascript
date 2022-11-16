let hotelArr = JSON.parse(localStorage.getItem("hotel")) || [];
let result =JSON.parse(localStorage.getItem("result"))

// console.log(result)

let input = document.getElementById("query");
let q = "";
input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
  
      event.preventDefault();
     
      Search();
    }
  });





let Search = async () => {
    let query = document.getElementById("query").value;
    let data = await getData(query);
    q = query;
    append(data);
   
}

let getData = async(query) => {
    let url = ` https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.hotels)

    return data.hotels
}

let append = (data) => {
    let container = document.getElementById("hotels_list");
    container.innerHTML=null;

    data.forEach((el) => {
        let img = document.createElement("img");
        img.src = el.Images.one;

        let title = document.createElement("h3");
        title.innerText = el.Title;

        let price = document.createElement("p");
        price.innerText = el.Price;

        let rating = document.createElement("p");
        rating.innerText = el.Rating;

        let ac = document.createElement("p");
        ac.innerText = el.Ac;

        let button = document.createElement("button");
        button.setAttribute("class", "book")
        button.innerText = "Book";
        button.addEventListener("click", function(){
            book(el);
        })


        let div = document.createElement("div");
        div.setAttribute("id", "hotel")
        div.append(img,title, price, rating, ac, button )
        container.append(div)


    })
}

let book = (el) =>{
    if(result === true){
        hotelArr.push(el);
        localStorage.setItem("hotel", JSON.stringify(hotelArr));
    }else{
        alert("Log In to continue!")
    }
}

let filterAC = async () => {
    let data = await getData(q);
    // console.log(data)

    data = data.filter((el) => {
        return el.Ac ===true;
    });
    append(data)
}
let filterNAC = async () => {
    let data = await getData(q);
    // console.log(data)

    data = data.filter((el) => {
        return el.Ac === false;
    });
    append(data)
}

let sortL2H = async () => {
    let data = await getData(q);
    // console.log(data)

    data = data.sort((a,b) => {
        return a.Price-b.Price;
    });
    append(data)
}
let sortH2L = async () => {
    let data = await getData(q);
    // console.log(data)

    data = data.sort((a,b) => {
        return b.Price-a.Price;
    });
    append(data)
}
