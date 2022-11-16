window.addEventListener("load" ,()=> {
    getData()
})



let submit = document.getElementById("submit");

submit.addEventListener("click",function(){
    addData()
})

let getData = async () =>{
    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/user");
    let data = await res.json()
    renderDom(data)
}

let renderDom = (data) =>{
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(
        ({Name,Batch,Course,Age,Score,id}) => {
        let card = document.createElement("div");

        let name = document.createElement("h3");
        name.innerText = `Name : ${Name}`;
        let batch = document.createElement("p");
        batch.innerText = `Batch : ${Batch}`;
        let course = document.createElement("p");
        course.innerText = `Course : ${Course}`
        let age = document.createElement("p");
        age.innerText = `Age : : ${Age}`
        let score = document.createElement("h3");
        score.innerText=`Score : ${Score}`

        let remove= document.createElement("Button")
        remove.innerText="remove";
        remove.onclick=()=>{
            removeData(id)
        }

        let update= document.createElement("Button")
        update.innerText="update score";
        update.onclick=()=>{
            updateData(id)
        }

        card.append(name,batch,course,age,score,remove,update);
        container.append(card)

    })
}



let addData = async () => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let score = document.getElementById("score").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    let data = {
        Name:name,
        Batch:batch,
        Score: score,
        Age: age,
        Course: course,
        id: Date.now()

    }

    let res = await fetch("https://young-thicket-70379.herokuapp.com/api/user",{
        method:"POST",
        body: JSON.stringify(data),
        headers :{
            "content-type" : "application/json",
        }
    })

    res=await res.json()
    console.log(res)
    getData()
}

//delete

let removeData = async (id)=>{
    let res = await fetch(`https://young-thicket-70379.herokuapp.com/api/user/${id}`,{
        method : "DELETE",
        // body: JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    getData();
    res= await res.json()
}

let updateData = async (id) => {
    let update = prompt("Update Score")
    
    let data = {Score : update}

    let res = await fetch(`https://young-thicket-70379.herokuapp.com/api/user/${id}`,{
        method : "PATCH",
        body: JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    res=await res.json();
    getData()
}

