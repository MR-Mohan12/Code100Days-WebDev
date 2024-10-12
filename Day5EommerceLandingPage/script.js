let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let mainPage = document.querySelector(".main");
let blog = document.querySelector(".trends");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

function homes() {
  mainPage.style.display = "block";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";

  document.getElementById("shop").style.color = "black";
  document.getElementById("home").style.color = "orangered";
  document.getElementById("block").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function shops() {
  card.style.display = "block";
  card2.style.display = "block";
  mainPage.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";

  document.getElementById("shop").style.color = "orangered";
  document.getElementById("home").style.color = "black";
  document.getElementById("blog").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("about").style.color = "black";
}

function blogs() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "block";
  about.style.display = "none";

  document.getElementById("blog").style.color = "orangered";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("about").style.color = "black";
}

function abouts() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  about.style.display = "block";
  contact.style.display= "none";

  document.getElementById("blog").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("about").style.color = "orangered";
}

function contacts(){

    mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";
  contact.style.display= "block";

  document.getElementById("blog").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("contact").style.color = "orangered";
  document.getElementById("about").style.color = "black";

}


// cart 

function show(img){
    console.log(img);
    
    let newImg = document.getElementById("newImg");
    console.log(newImg);
        newImg.src= img;
    
     

        mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";
  contact.style.display= "none";

        document.querySelector(".cart").style.display ="flex"
}

function addCart(){
    alert("Added to Cart");
    location.reload();
}