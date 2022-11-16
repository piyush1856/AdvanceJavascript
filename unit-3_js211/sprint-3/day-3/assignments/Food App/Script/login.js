import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();

let submit_btn = document.getElementById("submit");
submit_btn.onclick = ()=> {
  login();
};

let login = async () => {
    let data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    //let user = data.username;

    // data = JSON.stringify(data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    });
    
    
    
    let user_data = await res.json();
    console.log(user_data)

    let authenticate = {
        token:user_data.token,
        status : true
    }
    
    if(user_data.error ==false){
        localStorage.setItem("authenticate", JSON.stringify(authenticate))
        // localStorage.setItem("token", user_data.token)
        alert("login Successful, You can Checkout")
    }

    saveUser(data.username, user_data.token, 600000)
    



    // console.log(user_data);

};

let saveUser = (username,token , time) => {
    let user = {
      username,
      token
    }
    localStorage.setItem("user_details", JSON.stringify(user));

    setTimeout(() => {
      localStorage.setItem("user_details", JSON.stringify(null));

    }, time)
}