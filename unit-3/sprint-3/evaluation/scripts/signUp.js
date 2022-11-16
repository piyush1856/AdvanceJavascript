let user = JSON.parse(localStorage.getItem("users")) || [];
class User {
    constructor(n,e,p){
        this.name =n;
        this.email=e;
        this.password = p;
    }

    signup(n,e,p){
        this.name =n
        this.email = e
        this.password = p;

        user.push(this);
        localStorage.setItem("users", JSON.stringify(user));
    }
}


let data;

let signUp = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    data = new User (name,email,password)
    data.signup(name,email,password)
}