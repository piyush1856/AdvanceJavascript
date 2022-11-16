// GET
//BASE URL - http://localhost:3000/api
//end point : - /todo

// const { async } = require("regenerator-runtime");

// const { async } = require("regenerator-runtime");

window.addEventListener("load" ,()=> {
    getData()
})

let getData = async()=> {
    let res = await fetch("https://floating-hollows-64193.herokuapp.com/api/todo");
    let data = await res.json();
    renderDom(data)
    console.log(data)
}

let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({title , id, status}) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let toggle = document.createElement("button");
        toggle.onclick=()=> {
            toggleTodo(id);
        }
        let remove = document.createElement("button");
        remove.onclick=()=> {
            deteteTodo(id)
        }

        let edit_button = document.createElement("button");
        edit_button.onclick = ()=> {
            edit(id)
        }
        edit_button.innerText = "Edit Title";

        h3.innerText=title;
        p.innerText = status;
        toggle.innerText = "Toggle";
        remove.innerText = "Remove";

        div.append(h3,p,toggle,remove, edit_button);
        container.append(div)
    })
};

// CRUD :- create(post), read(get), update(put & patch), delete(delete);

let addTodo = async() => {
    //get data from user

    let todo = document.getElementById("todo").value;

    let data = {
        title : todo,
        status : false,
        id : Date.now()
    };

    let res = await fetch("https://floating-hollows-64193.herokuapp.com/api/todo",{
        method : "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",
        }
    });
    // document.getElementById("todo").value="";
    getData();

    res =await res.json()
    console.log(res)

};


//update --> put and patch request

let toggleTodo = async (id) => {
    let todo = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo/${id}`);
    todo = await todo.json();

    // console.log(todo)

    let data = {status: !todo.status};

    let res = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo/${id}`,{
        method : "PATCH",
        body: JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    getData();
    res= await res.json()
}

//PUT - replaces
//patch - modifies


deteteTodo = async(id) => {
    // let todo = await fetch(`http://localhost:3000/api/todo/${id}`);
    // todo = await todo.json();

    // // console.log(todo)

    // let data = {status: !todo.status};

    let res = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo/${id}`,{
        method : "DELETE",
        // body: JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    getData();
    res= await res.json()

}

let edit = async (id) => {
    let todo = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo/${id}`);

    let new_title = window.prompt("Enter new title")

    let data = {title: new_title || todo.title};

    let res = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo/${id}`,{
        method : "PATCH",
        body: JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    getData();
}

// filter data for status true (?status=true)
// https://floating-hollows-64193.herokuapp.com/api/todo?status=true

let filter = async () => {
    let value = document .getElementById("filter").value;

    if(value !== "select"){
        let res = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo?status=${value}`)

        res = await res.json()

        renderDom(res)
    }else if (value === "select"){
        let res = await fetch(`https://floating-hollows-64193.herokuapp.com/api/todo`)

        res = await res.json()

        renderDom(res)
    }
}

//for pagination and limit of element per page
//https://floating-hollows-64193.herokuapp.com/api/todo??_page=1&_limit=2
    