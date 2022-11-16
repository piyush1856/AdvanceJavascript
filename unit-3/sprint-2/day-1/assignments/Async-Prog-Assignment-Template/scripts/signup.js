let form = document.querySelector("form");
form.addEventListener("submit", myfunction);

let dataArr = JSON.parse(localStorage.getItem("signUp")) || [];

function myfunction(e) {
  event.preventDefault();

  let name = form.name.value;
  let contact = form.contact.value;
  let email = form.email.value;
  let password = form.password.value;

  let person = new signup(name, contact, email, password);
  

  if(checkMail(person.email)==true){
    dataArr.push(person);
    localStorage.setItem("signUp", JSON.stringify(dataArr));
    alert(
        "Successfully Signed Up, Click on Sign In to start with Your account"
      );
      location.href = "login.html";
  }else{
        alert("Account Already Exits");
  }
  
//   console.log(person.email);
}

function signup(n, c, e, p) {
  this.name = n;
  this.contact = c;
  this.email = e;
  this.password = p;
}

function checkMail(mail) {
  let filtered = dataArr.filter(function (el) {
    return el.email == mail;
  });

  console.log(filtered);
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
    
}
