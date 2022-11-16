// GET
//BASE URL - http://localhost:3000/api
//end point : - /todo

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

        h3.innerText=title;
        p.innerText = status;
        toggle.innerText = "Toggle";
        remove.innerText = "Remove";

        div.append(h3,p,toggle,remove);
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
            "content-Type" : "application/json",
        }
    });
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