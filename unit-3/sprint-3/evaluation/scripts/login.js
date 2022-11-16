let user = JSON.parse(localStorage.getItem("users")) || [];
class User {
    constructor(e,p){
 
        this.email=e;
        this.password = p;
    }

    login(email,password){
  
        let res = false;
        let count =0;

        user.forEach(ele =>{
            if(email == ele.email && password == ele.password){
                res = true;
                count++;
            }
        })
        if(res ==true && count>0){
            alert("Login successful!")
            localStorage.setItem("result", JSON.stringify(res));
        }else{
            alert("Wrong credentials")
            localStorage.setItem("result", JSON.stringify(res));
        }

        user.push(this);
        localStorage.setItem("users", JSON.stringify(user));
    }
}

let data;

let signIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    data = new User (email,password)
    data.login(email,password)
}