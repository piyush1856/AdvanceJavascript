function append(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function(el,index){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText=el.name;

        let course = document.createElement("p");
        course.innerText = el.course;

        let unit = document.createElement("p");
        unit.innerText = el.unit;

        let batch = document.createElement("p");
        batch.innerText = el.batch;

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.addEventListener("click", function(){
            remove(index)
        })

        div.append(img,p,course,unit,batch,button);
        container.append(div)
    });
    

}
append()

function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(el,i){
        if(i === index){
            let trash =JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el)
            localStorage.setItem("trash", JSON.stringify(trash))
        }else{
            return i !== index
        }
        

        
    })
    localStorage.setItem("students", JSON.stringify(newData));
    append();
}

function calculate(){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let obj ={};
    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] =0;
        }
    }

    for(let i=0;i<data.length;i++){
      
        obj[data[i].batch]++;
      
    }

    displaystu(obj);
}
calculate()

function displaystu(obj) {
    let dataArr = [];
  
    for (let i in obj) {
      dataArr.push(i + ":" + obj[i]);
    }
  
    // dataArr.push(obj)
    dataArr.forEach(function (el) {
      let div = document.createElement("div");
      let batch = document.createElement("p");
      batch.innerText = el;
  
      div.append(batch);
      // console.log(batch);
  
      let navbar = document.querySelector("#studentNo");
      navbar.append(div);
    });
}