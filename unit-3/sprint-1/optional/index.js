

function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web${b}`;
}







function storeData(event){
    event.preventDefault();
    document.querySelector("#studentNo").innerHTML = "";

    let form = document.getElementById("student_data");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    // console.log(name,course,unit,image,batch)

    let s1 = new Student(name, course ,unit, image, batch)
    // console.log(s1)

    let data = JSON.parse(localStorage.getItem("students")) || [];
    data.push (s1);
    localStorage.setItem("students", JSON.stringify(data));

    form.reset();
    calculate()
    displaystu();

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