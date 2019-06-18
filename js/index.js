// Your code goes here

let h1 = document.querySelector(".logo-heading");
let navblock = document.querySelector(".nav");
let navlinks = document.querySelectorAll(".nav-link");
let navlinksArray = Array.from(navlinks);
let images = document.querySelectorAll("img");
let imagesArray = Array.from(images);
let intro = document.querySelector(".intro");
let h2 = document.querySelectorAll("h2");
let h4 = document.querySelectorAll("h4");
let textArea = document.querySelectorAll(".text-content");
let destination = document.querySelectorAll(".destination");
let p = document.querySelectorAll("p");
let pArray = Array.from(p);
let footer = document.getElementsByClassName("footer");

imagesArray.forEach(function(image) {
  image.addEventListener("mouseenter", event => {
    image.style.border = "6px solid #a3f7b5";
    event.stopPropagation();
  });
  image.addEventListener("mouseleave", event => {
    image.style.border = "none";
  });
});

h1.addEventListener("mouseover", event => {
  h1.textContent = "RIDE THE FUN BUS!";
  h1.style.color = "#black";
  h1.style.fontWeight = "700";
  h1.style.textShadow = "5px 10px #FFE66D";
  event.stopPropagation();
});
h1.addEventListener("mouseout", event => {
  h1.textContent = "Choose an Adventure!";
  h1.style.color = "#1a535c";
  h1.style.fontWeight = "none";
  //   h1.style.textShadow = "5px 10px #4ecdc4";
  event.stopPropagation();
});

navlinksArray.forEach(function(link) {
  link.addEventListener("mouseover", event => {
    link.style.color = "#a3f7b5";
    link.style.fontWeight = "700";
    link.style.textShadow = "5px 7px #FFE66D";
    link.style.fontFamily = "'Indie Flower', cursive";
  });
  link.addEventListener("mouseout", event => {
    link.style.color = "#FF6B6B";
    link.style.fontWeight = "600";
    link.style.textShadow = "none";
    link.style.fontFamily = "none";
  });
  link.addEventListener("click", event => {
    alert("That goes nowhere!!!");
  });
});

pArray.forEach(P => {
  P.addEventListener("dblclick", event => {
    P.style.color = "#A30000";
  });
  
 });

textArea.forEach(ta => {
  ta.addEventListener("mouseenter", event => {
    ta.style.textAlign = "center";  
    ta.style.backgroundColor = "#EFD28D";
    ta.style.borderRadius = "5px";
    ta.style.color = "#004777";
  });
  ta.addEventListener("mouseleave", event => {
    ta.style.backgroundColor = "#a30000";
    ta.style.textAlign = "left"; 
    ta.style.color = "black";
  });
});

destination.forEach(d => {
  d.addEventListener("mouseenter", event => {
    d.style.backgroundColor = "#00AFB5";
    d.style.borderRadius = "15px";
    d.style.color = "white";
    d.style.textAlign = "center";
  });
  d.addEventListener("mouseleave", event => {
    d.style.textAlign = "left";  
    d.style.backgroundColor = "white";
    d.style.color = "black";
  });
});
