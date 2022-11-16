let dataList = [
    {
      image:
        "https://alchetron.com/cdn/Man-of-Steel-film-images-9fb80349-7bb3-4fb3-8309-3722134f15a.jpg",
      name: "Man of steel",
      release: "14 June 2013",
      IMDb: "7.1",
    },
    {
      image:
        "https://alchetron.com/cdn/Interstellar-film-images-ee2fbd04-2f96-4a74-a543-378202f97cd.jpg",
      name: "Interstellar",
      release: "7 November 2014",
      IMDb: "8.6",
    },
    {
      image:
        "https://alchetron.com/cdn/The-Martian-film-images-d607dd1f-6485-48b0-b384-9eeb2bfc535.jpg",
      name: "The Martian",
      release: "2 October 2015",
      IMDb: "8",
    },
    {
      image:
        "https://alchetron.com/cdn/Life-of-Pi-film-images-780149f1-3eca-41d2-94d2-4a077f02ede.jpg",
      name: "Life Of Pi",
      release: "23 November 2012",
      IMDb: "7.9",
    },
    {
      image:
        "https://alchetron.com/cdn/doctor-strange-film-8f5c5c23-2229-4dbc-8ceb-9f568df13bb-resize-750.jpeg",
      name: "Doctor Strange in the Multiverse of Madness",
      release: "6 May 2022",
      IMDb: "7.2",
    },
    {
      image:
        "https://i.pinimg.com/564x/29/18/f7/2918f713ca415daac5de31c21156eab1.jpg",
      name: "Kesari",
      release: "21 March 2019",
      IMDb: "7.4",
    },
    {
      image:
        "https://i.pinimg.com/564x/9a/8d/6f/9a8d6f693f7ae03f4331c73042bcf3b8.jpg",
      name: "Extraction",
      release: "24 April 2020",
      IMDb: "6.7",
    },
    {
      image:
        "https://i.pinimg.com/736x/60/a4/d1/60a4d1f0be37a4e72bd2d8dab33e7a5d.jpg",
      name: "K.G.F: Chapter 2",
      release: "14 April 2022 ",
      IMDb: "8.5",
    },
    {
      image:
        "https://i.pinimg.com/564x/14/df/f0/14dff03d8050c07b5a1aeca560626d67.jpg",
      name: "Uncharted",
      release: "18 February 2022",
      IMDb: "6.4",
    },
    {
      image:
        "https://i.pinimg.com/564x/6f/5a/11/6f5a11624a09e2b19c6010de0232aa34.jpg",
      name: "Spider-Man: No Way Home",
      release: "17 December 2021",
      IMDb: "8.3",
    },
  ];
  
  let dataSlideshow = [
    "https://c4.wallpaperflare.com/wallpaper/736/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/221/189/102/batman-batman-begins-movies-the-dark-knight-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/232/717/114/venom-movie-venom-superheroes-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/819/656/45/face-keanu-reeves-actor-looking-at-viewer-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/985/100/venom-movie-venom-2018-movies-movies-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/58/729/130/digital-art-black-background-minimalism-skull-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/290/933/71/digital-digital-art-artwork-illustration-dc-comics-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/799/191/755/godzilla-movies-digital-art-movie-poster-wallpaper-preview.jpg",
  ];
  
  localStorage.setItem("slidemovies", JSON.stringify(dataSlideshow));
  
  localStorage.setItem("movies", JSON.stringify(dataList));
  
  let localMovies = JSON.parse(localStorage.getItem("movies")) || [];
  
  let emailId = JSON.parse(localStorage.getItem("signUp"))||[];
  if (emailId.length == 0) {
    document.querySelector("#movies").innerHTML = "";
    document.querySelector("#sort-buttons").innerHTML = "";
    document.querySelector("#slideshow").innerHTML = "";
    location.href = "login.html";
    // alert("Please login first");
  } else {
    // gridMovieDisplay
    display(localMovies);
    function display(localMovies) {
      document.querySelector("#movies").innerHTML = "";
      localMovies.forEach(function (el) {
        let box = document.createElement("div");
  
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText = `Movie: ${el.name}`;
        let imdb = document.createElement("p");
        imdb.innerText = `Rating: ${el.IMDb}`;
        let release = document.createElement("p");
        release.innerText = `Release: ${el.release}`;
  
        box.append(image, name, release, imdb);
  
        document.querySelector("#movies").append(box);
      });
    }
  
    // sorting
    let low_High = document.querySelector("#sort-lh");
    low_High.addEventListener("click", lowHigh);
  
    function lowHigh() {
      localMovies.sort(function (a, b) {
        return +a.IMDb - +b.IMDb;
      });
  
      display(localMovies);
    }
  
    let high_Low = document.querySelector("#sort-hl");
    high_Low.addEventListener("click", HighLow);
  
    function HighLow() {
      localMovies.sort(function (a, b) {
        return +b.IMDb - +a.IMDb;
      });
  
      display(localMovies);
    }
  
    let id;
    let i = 0;
  
    function slidshow() {
      let images = JSON.parse(localStorage.getItem("slidemovies"));
  
      let container = document.querySelector("#slideshow");
  
      id = setInterval(function () {
        if (i == images.length) {
          i = 0;
        }
        let img = document.createElement("img");
        img.src = images[i];
        container.innerHTML = null;
        container.append(img);
        i++;
      }, 2500);
    }
  
    // Pause
  
    let container = document.querySelector("#slideshow");
    container.addEventListener("mouseover", pause);
    container.addEventListener("mouseout", slidshow);
  
    function pause() {
      clearInterval(id);
    }
  
    slidshow();
  }
  