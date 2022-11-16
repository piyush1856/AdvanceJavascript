let users = JSON.parse(localStorage.getItem("user")) || [];

class user {
  constructor(n, e, p, u, m, d) {
    this.name = n;
    this.email = e;
    this.password = p;
    this.username = u;
    this.mobile = m;
    this.description = d;
  }

  signup(n, e, p, u, m, d) {
    this.name = n;
    this.email = e;
    this.password = p;
    this.username = u;
    this.mobile = m;
    this.description = d;

    users.push(this);
    // location.href="login.html"

    return this;
  }
}

let data;
let signupform = async () => {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  let password = document.querySelector("#password").value;
  let username = document.querySelector("#uname").value;
  let mobile = document.querySelector("#mobile").value;
  let description = document.querySelector("#description").value;
  console.log(name, email, password);

  data = new user(name, email, password, username, mobile, description);
  let sign_up = data.signup(
    name,
    email,
    password,
    username,
    mobile,
    description
  );

  // console.log(sign_up);
  sign_up = JSON.stringify(sign_up);

  let sign_up_link = `https://masai-api-mocker.herokuapp.com/auth/register`;

  let res = await fetch(sign_up_link, {
    method: "POST",
    body: sign_up,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let res_data = await res.json();

  console.log(res_data);

  location.href="login.html"
};



let loggedIN=false;

let login = async () => {
  event.preventDefault();
  let login_data = {
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value,
  };

  login_data_string=JSON.stringify(login_data)

  let login_link=`https://masai-api-mocker.herokuapp.com/auth/login`;

  let res= await fetch(login_link,{
    method:"POST",
    body:login_data_string,
    headers:{
        "Content-Type": "application/json",
    }
  })
  // console.log(username,password)

  let res_data=await res.json();

  getProfile(login_data.username,res_data.token);
  console.log(res_data.error);

  console.log(login_data.username,res_data.token);

  

  if(res_data.error==false){
    loggedIN=true;
    localStorage.setItem("loggedin",JSON.stringify(loggedIN));
    // location.href="index.html"
  }
};
let Profile=[];
let getProfile=async(userna,token)=>{

    let get_link=`https://masai-api-mocker.herokuapp.com/user/${userna}`;

    console.log(get_link,token);

    let res=await fetch(get_link,{
        method:"GET",
        headers:{
            "Authorization": `Bearer ${token}`,
        }
    })
    
    let res_data=await res.json();
    Profile.push(res_data)
    localStorage.setItem("profile",JSON.stringify(Profile));
  console.log(res_data);
  console.log(res_data.email);
  location.href="index.html"
}