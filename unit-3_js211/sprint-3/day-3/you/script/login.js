
  import { navBar } from "../components/navbar.js";
  // console.log(navBar)
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

    saveUser(data.username, user_data.token, 600000)
    // getProfile(data.username, user_data.token);



    console.log(user_data);

  };

  // let getProfile = async (username,token) => {
  //   let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
  //     headers: {
  //     Authorization : `Bearer ${token}`,
  //     },  
  //   });
    
  //   res = await res.json();
  //   console.log(res)
  // }


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