// Store the wallet amount to your local storage with key "amount"
let wallet = JSON.parse(localStorage.getItem("amount"))||[];
document.getElementById("wallet").textContent = +wallet;

let addToWallet = () => {
    let amount = +document.getElementById("amount").value;
    let currentmoney = JSON.parse(localStorage.getItem("amount"))||[];
    amount=Number(amount)+Number(currentmoney)
    localStorage.setItem("amount",JSON.stringify(amount));
    // let newamount = +(wallet +amount);
    display()
    
    
    // walletAmount.innerText = Number(amount);
    // document.getElementById("wallet").textContent = newamount
    
    // document.getElementById("amount").value="";
   
}

let display = () => {
    let getamount = JSON.parse(localStorage.getItem("amount"))||[];
    let walletvalue = document.getElementById("wallet")
    walletvalue.innerText =Number(getamount);
}
display()


