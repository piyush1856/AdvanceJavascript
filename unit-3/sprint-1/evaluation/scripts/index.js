//store the products array in localstorage as "data"
function nike(b,n,p,i){
    this.brand = b;
    this.name =n;
    this.price = p;
    this.image=i;

    // created a blueprint/constructor function of object and this keyword will refer to the onject creation/pointiong toward the object value
}

document .querySelector("form").addEventListener("submit", store)

function store(){
    event.preventDefault();

    let form = document.getElementById("product_form");
    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let n1=new nike(brand,name,price,image)
    // console.log(n1)
    // created required object with the help of blue print/constructor and using new keyword to assing object

    let dataNike = JSON.parse(localStorage.getItem("data")) || [];
    dataNike.push(n1);
    localStorage.setItem("data", JSON.stringify(dataNike));
    // pushing data to local storage
    window.location.reload();
}
