// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=0ce03a63abac8356df08f187c56616eb

let lat = "";
let lon = "";

async function getData() {
  let city = document.querySelector("#query").value;
  let units = "metric";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ce03a63abac8356df08f187c56616eb&units=${units}`;

  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    append(data);
  } catch (err) {
    console.log(err);
  }
  document.querySelector("#query").value=null
}

// Show the weather details of that city on Left hand side. Show min temp, max temp, wind,
// clounds, sunrise, sunset etc.

// Use logos or icons while showing the data. ( you can show logo of sunrise, sunset etc )
//  Searchbar should be on top.

function append(data) {
  let url = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  let container = document.querySelector("#container");
  container.innerHTML = null;

  let h2 = document.createElement("h2");
  h2.innerText = data.name;

  let temp = document.createElement("p");

  // temp.innerText = `Temp:- ${
  //   Math.round((+data.main.temp - 273) * 100) / 100
  // }°C`;

  temp.innerText = `Temp:- ${+data.main.temp}°C`;

  let min_temp = document.createElement("p");
  min_temp.innerText = `Temp:- ${+data.main.temp_min}°C`;

  let max_temp = document.createElement("p");
  max_temp.innerText = `Temp:- ${+data.main.temp_max}°C`;

  let wind = document.createElement("p");
  wind.innerText = `Deg: ${data.wind.deg} , Speed: ${data.wind.speed}`;

  let clounds = document.createElement("p");
  clounds.innerText = `Clouds: ${data.clouds.all}`;

  let sundiv = document.createElement("div");
  sundiv.id = "sundiv";

  let sunriseDiv = document.createElement("div");
  sunriseDiv.id = "sunrise";
  let riseimg = document.createElement("img");
  riseimg.src = "https://cdn-icons-png.flaticon.com/512/577/577600.png";

  let sunsetDiv = document.createElement("div");
  sunsetDiv.id = "sunset";
  let setimg = document.createElement("img");
  setimg.src = "https://cdn-icons-png.flaticon.com/512/2924/2924900.png";

  let risetime = new Date(data.sys.sunrise * 1000);
  let setime = new Date(data.sys.sunset * 1000);

  let sunrise = document.createElement("p");
  sunrise.innerText = `Sunrise: ${risetime}`;

  let sunset = document.createElement("p");
  sunset.innerText = `Sunset: ${setime}`;

  lat = data.coord.lat;
  lon = data.coord.lon;

  sunriseDiv.append(riseimg, sunrise);
  sunsetDiv.append(setimg, sunset);

  sundiv.append(sunriseDiv, sunsetDiv);

  container.append(h2, temp, min_temp, max_temp, wind, clounds, sundiv);

  let iframe = document.querySelector("#gmap_canvas");
  iframe.src = url;
  futureDays();
}

// const url = "https://fakestoreapi.com/products";

// async function getData() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     append(data);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData();

// function append(data) {
//   let container = document.getElementById("container");

//   data.sort(function (a, b) {
//     return a.price - b.price;
//   });

//   data = data.filter(function (el) {
//     return el.category === "jewelery";
//   });

//   data.forEach(function (el) {
//     let img = document.createElement("img");
//     img.src = el.image;

//     let p = document.createElement("p");
//     p.innerText = el.title;

//     let price = document.createElement("p");
//     price.innerText = el.price;

//     let div = document.createElement("div");
//     div.append(img, p, price);
//     container.append(div);
//   });
// }

async function futureDays() {
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0ce03a63abac8356df08f187c56616eb&units=${units}`;

  try {
    let res = await fetch(url);
    let data = await res.json();
    data=data.daily
    console.log(data);
    sevenDays(data);
  } catch (err) {
    console.log(err);
  }
  // console.log(lat,lon)
}

function sevenDays(data) {
  let sevenDiv = document.querySelector("#sevendays");
  sevenDiv.innerHTML = null;

  data.forEach(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "smallTabs");

    let date=new Date(el.dt *1000).toGMTString()
    
    let day = document.createElement("p");
    day.innerText=date

    let img = document.createElement("img");
    img.src=`http://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`

    let min_temp = document.createElement("p");
    min_temp.innerText = `Temp:- ${+el.temp.min}°C`;

    let max_temp = document.createElement("p");
    max_temp.innerText = `Temp:- ${+el.temp.max}°C`;

    div.append(day, img, min_temp, max_temp);

    sevenDiv.append(div);
  });
}


function getLocation(){

  navigator.geolocation.getCurrentPosition(success);

  function success(pos){
      const crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      getWeatherOnLocation(crd.latitude,crd.longitude)

  }
}

// getLocation() is called in body html onload------>imp


// let url=https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function getWeatherOnLocation(lat,lon){

  let units = "metric";

  let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ce03a63abac8356df08f187c56616eb&units=${units}`;

  fetch(url)
  .then(function(res){
      return res.json()
  })
  .then(function(res){
      // console.log(res)
      append(res);
  })

}