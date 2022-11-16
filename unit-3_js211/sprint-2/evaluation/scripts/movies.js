// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
walletamount = () => {
    let wallet = JSON.parse(localStorage.getItem("amount"));
    document.getElementById("wallet").innerText = +(wallet)
}

async function getData() {
    let query = document.getElementById("search").value;
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=1487ce35&s=${query}`;

   
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.Search);
    append(data.Search)
    
}
let id;

function debounce (func,delay){
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(function(){
        func();
    },delay)
}

function append(data){
    let container = document.getElementById("movies");
    container.innerHTML=null;

    data.forEach(function(el){
        let card = document.createElement("div");
        card.setAttribute("class", "movie_tab");

        let image = document.createElement("img");
        image.src =el.Poster;

        let h3 = document.createElement("h3");
        h3.innerText = `Title: ${el.Title}`

        let button = document.createElement("button");
        button.innerText = "Book Now";
        button.addEventListener("click" ,function(){
            book(el);
        })

        card.append(image,h3,button);
        container.append(card)
    })
}
function book(el){
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href= "checkout.html"
}