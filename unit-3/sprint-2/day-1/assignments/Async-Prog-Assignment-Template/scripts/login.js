document.querySelector("form").addEventListener("submit", login);

let dataArrLs = JSON.parse(localStorage.getItem("signUp")) || [];

function login() {
  event.preventDefault();

  let emailLP = document.querySelector("#email").value;
  let passwordLP = document.querySelector("#password").value;

  let flag = false;

  for (let i = 0; i < dataArrLs.length; i++) {
    if (emailLP == dataArrLs[i].email && passwordLP == dataArrLs[i].password) {
      flag = true;
      break;
    }
  }

  if (flag == true) {
    window.location.href="./index.html"
  } else {
    alert("Invalid Credentials or Sign up");
  }
}
