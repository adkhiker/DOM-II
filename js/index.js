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
  h1.style.color = "#a3f7b5";
  h1.style.fontWeight = "700";
  h1.style.textShadow = "5px 10px yellow";
  event.stopPropagation();
});
h1.addEventListener("mouseout", event => {
  h1.textContent = "Choose an Adventure!";
  h1.style.color = "black";
  h1.style.fontWeight = "none";
  h1.style.textShadow = "none";
  event.stopPropagation();
});

