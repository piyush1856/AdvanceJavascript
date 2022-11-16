// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet = JSON.parse(localStorage.getItem("amount"));
detail = () => {
    
    document.getElementById("wallet").innerText = +(wallet)

    let el = JSON.parse(localStorage.getItem("movie"));

    let card = document.createElement("div");
    card.setAttribute("class", "movie_tab");

    let image = document.createElement("img");
    image.src =el.Poster;

    let h3 = document.createElement("h3");
    h3.innerText = `Title: ${el.Title}`

    card.append(image,h3);
    document.getElementById("movie").append(card)
}

confirm = () => {
    let seat = +document.getElementById("number_of_seats").value;

    let totalAmount = Number(100*seat);
    

    if(totalAmount > Number(wallet)){
        alert("Insufficient Balance!")
    }else{
        alert("Booking successfull!");
        let remaining = Number(wallet) - totalAmount
        localStorage.setItem("amount",JSON.stringify(remaining));
        location.reload();
    }


}
