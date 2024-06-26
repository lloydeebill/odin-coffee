
import { home } from "./home";
import { menu } from "./menu";


import './style.css';


const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const aboutButton = document.querySelector('.about-btn');


home();

homeButton.addEventListener("click",() => {
  clearContent();
  home();
})

menuButton.addEventListener("click",() => {
  clearContent();
  menu();
})

aboutButton.addEventListener("click",() => {
  clearContent();
  about();
})






function clearContent() {

  const divContent = document.querySelector("#content");
  divContent.innerHTML = "";
}