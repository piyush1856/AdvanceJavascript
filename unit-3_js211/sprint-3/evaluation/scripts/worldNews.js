


let enterFun = document.querySelector("#search_box");
let q="";
enterFun.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        enterF();
    }
})

let enterF = async() => {
    let query = document.querySelector("#search_box").value;
    let data = await searchData(query)
    append(data)
    
    
    
}

let searchData = async(query) => {
    let url =`https://masai-mock-api-2.herokuapp.com/news?q=${query}`;
    let res = await fetch(url);
    let data = await res.json()
   
    return data.articles;
}

let append = (data) => {
    let container = document.querySelector("#news_result");
    container.innerHTML = null;

    data.forEach((el) => {
        let title = document.createElement("p");
        title.innerText = el.title

        let img = document .createElement("img");
        img.src = el.urlToImage;

        let auth = document.createElement("p");
        auth.innerText = el.author

        let card = document.createElement("div");
     card.setAttribute("class", "news")
    card.addEventListener("click",function(){
        detail(el)
    })

    card.append(img,title,auth);
    container.append(card)
    })
}

let loading = async()=> {
    let arr = JSON.parse(localStorage.getItem("user"))
    let country = arr[0].country

    let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${country}`;

    let res = await fetch(url);
    let data = await res.json()

    append(data.articles)

}

let countryNews = async (id)=> {
    let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${id}`
    let res = await fetch(url);
    let data = await res.json()

    append(data.articles)

}

let detail = (el) => {
    localStorage.setItem("detail", JSON.stringify(el));
    window.location.href = "news.html"
}

let arr = JSON.parse(localStorage.getItem("user"))
document.getElementById("user_image").src = arr[0].image
document.getElementById("user_name").innerText = arr[0].name
document.getElementById("user_email").innerText = arr[0].email
document.getElementById("user_country").innerText = arr[0].country