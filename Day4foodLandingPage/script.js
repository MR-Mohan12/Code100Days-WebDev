let slides = document.querySelectorAll(".reviews"); 
let count = 0;

function myfun() {
    slides.forEach(function(slide) {
        slide.classList.remove('active'); 
    });
    slides[count].classList.add('active'); 
}


setInterval(function() {
    count++;
    if (count == slides.length) {
        count = 0; 
    }
    myfun();
}, 2000);


// search bar
let search = document.getElementById("search");
let user = document.getElementById("user");
let bar = document.getElementById("bar");
let logBtn = document.getElementById("logBtn");

search.addEventListener("click",function(){
    document.querySelector(".searchBar").classList.toggle("active1");
})

user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle("active2");
})

logBtn.addEventListener("click",function(){
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  if(email.value == "" && pass.value == ""){
    alert("Fill Details");
  }
  else{
   alert("You Logged In");
   document.querySelector(".loginPage").style.display = "none";
  }
})

//navbar

bar.addEventListener("click",function(){
    document.querySelector("ul").classList.toggle("showData");
})



