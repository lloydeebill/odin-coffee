import { bestSellerMenu } from "./coffee-menu";

function home(){

  const divContent = document.querySelector("#content");

  const homeContainer = document.createElement('div');
  

  const bestSellers = document.createElement('div');


  const bestSellersTitle = document.createElement('p');
  bestSellersTitle.innerText = "Best Sellers"
  bestSellers.classList.add('best-seller-title');
  bestSellers.appendChild(bestSellersTitle);

  const restoHeadline = document.createElement('p');
  restoHeadline.innerText = "In every sip, experience bliss at Bill's Cafe";
  restoHeadline.classList.add('headline');
  homeContainer.appendChild(restoHeadline);

  const bestSellerMenuContainer = bestSellerMenu();


  homeContainer.appendChild(bestSellers);

  
  divContent.appendChild(homeContainer);
  divContent.appendChild(bestSellerMenuContainer);

}

export {home};