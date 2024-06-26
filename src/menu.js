
import { allMenu } from "./coffee-menu";


function menu() {

  const divContent = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const menuTitle = document.createElement("p");

  menuTitle.innerText = "Menu";
  menuTitle.classList.add('menu-title');

  menuContainer.appendChild(menuTitle);

  const allMenuItems = allMenu();

  menuContainer.appendChild(allMenuItems);

  divContent.appendChild(menuContainer);



}

export { menu };