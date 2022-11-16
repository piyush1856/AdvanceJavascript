
// import sidebar from "../component/sidebar.js"
// document.querySelector("#sidebar").innerHTML=sidebar()


detail = () => {
    let el = JSON.parse(localStorage.getItem("detail"));
    let con = document.getElementById("detailed_news")
    let title = document.createElement("h3");
    title.innerText = el.title

    let img = document .createElement("img");
    img.src = el.urlToImage;

    let auth = document.createElement("h4");
    auth.innerText = el.description;

    con.append(img,title,auth)


}

let arr = JSON.parse(localStorage.getItem("user"))
document.getElementById("user_image").src = arr[0].image
document.getElementById("user_name").innerText = arr[0].name
document.getElementById("user_email").innerText = arr[0].email
document.getElementById("user_country").innerText = arr[0].country