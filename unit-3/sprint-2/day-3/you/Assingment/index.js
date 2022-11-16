// const url="https://www.omdbapi.com/?apikey=f2a62345&s=space&type=movie";

// let input=document.querySelector("#query").value
let Arrdata = [];
let arr = [];

// METHOD 1------------------------------------------------->
async function getData() {
  let input = document.querySelector("#query").value;
  arr = [];
  const url = `https://www.omdbapi.com/?apikey=f2a62345&s=${input}&type=movie`;

  // console.log(url)
  try {
    let res = await fetch(url);
    var data = await res.json();
    data = data.Search;

    append(data);
    // YearSort(data)

    console.log(data);
  } catch (err) {
    console.log(err);
    notFound(err);
  }
}

// METHOD 2------------------------------------------------->
// let input=document.querySelector("#query")

// function fetched(){
//     let inputValue=input.value;
//     const url=`https://www.omdbapi.com/?apikey=f2a62345&s=${inputValue}&type=movie`
//     fetch(url).then(function(res){

//         return res.json()
//     }).then(function(res){
//         let data=res.Search;
//         console.log(data)
//         append(data)
//     }).catch(function(err){
//         notFound(err)
//     })
// }

// getData()

function append(data) {
  let container = document.querySelector("#container");
  container.innerHTML = null;

  //  data.forEach(function(el){

  // let box=document.createElement("div");

  // let imgDiv=document.createElement("div");
  // imgDiv.class="imgdiv"

  // let image=document.createElement("img");
  // image.src=data.Poster

  // let p1=document.createElement("p");
  // p1.innerText=`Title: ${data.Title}`

  // let p2=document.createElement("p");
  // p2.innerText=`Type: ${data.Type}`

  // let p3=document.createElement("p");
  // p3.innerText=`Year: ${data.Year}`

  // let p4=document.createElement("p");
  // p4.innerText=`imdbID: ${data.imdbID}`

  // let p5

  // if(+(data.imdbRating)>8.5){

  //     p5=document.createElement("p");

  //     p5.innerText=`imdbID ratings: ${data.imdbRating} RECOMMENDED `

  // }else{
  //     p5=document.createElement("p");
  //     p5.innerText=`imdbID ratings: ${data.imdbRating}`
  // }

  // imgDiv.append(image)
  // box.append(imgDiv,p1,p2,p3,p4,p5)

  // document.querySelector("#container").append(box)
  // })

  data.forEach(function (el) {
    let box = document.createElement("div");

    let imgDiv = document.createElement("div");
    imgDiv.class = "imgdiv";

    let image = document.createElement("img");
    image.src = el.Poster;

    let p1 = document.createElement("p");
    p1.innerText = `Title: ${el.Title}`;

    let p2 = document.createElement("p");
    p2.innerText = `Type: ${el.Type}`;

    let p3 = document.createElement("p");
    p3.innerText = `Year: ${el.Year}`;

    let p4 = document.createElement("p");
    p4.innerText = `imdbID: ${el.imdbID}`;

    let rating = +(Math.random() * 5 + 5);
    rating = +(Math.round(rating * 10) / 10);
    console.log(rating);
    let p5;

    if (rating > 8.5) {
      p5 = document.createElement("p");

      p5.innerText = `IMDb ratings: ${rating} RECOMMENDED `;
    } else {
      p5 = document.createElement("p");
      p5.innerText = `IMDb ratings: ${rating}`;
    }

    imgDiv.append(image);
    box.append(imgDiv, p1, p2, p3, p4, p5);

    document.querySelector("#container").append(box);
  });
  Arrdata = data;
}

function notFound(err) {
  // console.log("hey")
  let box = document.createElement("div");

  let imgDiv = document.createElement("div");
  imgDiv.class = "errordiv";
  let img = document.createElement("img");
  img.src =
    "https://cdn.dribbble.com/users/724182/screenshots/8587099/media/ef86c4bf895b58c47d1b353eabecad01.gif";
  // let p1=document.createElement("p");
  // p1.innerText=err

  box.append(img);

  document.querySelector("#container").append(box);
}

// Sorting=======================================================>

function YearSort() {
  let selected = document.querySelector("#sortYear").value;
  console.log(selected);

  if (selected == "Ascending") {
    Arrdata.sort(function (a, b) {
      if (a.Year > b.Year) return 1;
      if (a.Year < b.Year) return -1;
      return 0;
    });
  }
  if (selected == "Descending") {
    Arrdata.sort(function (a, b) {
      if (a.Year > b.Year) return -1;
      if (a.Year < b.Year) return 1;
      return 0;
    });
  }

  console.log(Arrdata);

  append(Arrdata);
}

// Filtering=======================================================>

function YearFilter() {
  for (let i = 0; i < Arrdata.length; i++) {
    if (arr.includes(Arrdata[i])) {
      continue;
    } else {
      arr.push(Arrdata[i]);
    }
  }

  let selected = document.querySelector("#filterYear").value;
  let FilterList;
  if (selected == "1999") {
    FilterList = arr.filter(function (el) {
      return el.Year < selected;
    });
  } else {
    FilterList = arr.filter(function (el) {
      return el.Year > selected;
    });
  }
  append(FilterList);
  console.log(arr.length);
}
