import espressoImg from './img/espresso.webp';
import latteImg from './img/latte.webp';
import americanoImg from './img/americano.webp';
import waffleImg from './img/waffle.webp';
import cinnamonImg from './img/cinnamon-roll.webp'
import cheesecakeImg from './img/cheesecake.webp'

class Coffee {

  constructor(name,price,image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

}

class Food{

  constructor(name,price,image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

}

const espresso = new Coffee('Espresso', 'P100', espressoImg);
const latte = new Coffee('Latte', 'P140', latteImg);
const americano = new Coffee('Americano','P120' , americanoImg);
const waffle = new Food("Waffle", 'P80', waffleImg);
const cinnamonRoll = new Food("Cinnamon Roll", 'P80', cinnamonImg);
const cheeseCake = new Food("Cheesecake", 'P80', cheesecakeImg);


const menu = [espresso,latte,americano,waffle,cinnamonRoll,cheeseCake];




function createCoffeeCard(coffee) {

  const coffeeCard = document.createElement("div");
  coffeeCard.classList.add('coffee-card');


  const coffeeName = document.createElement("h3");
  coffeeName.innerText = coffee.name;

  const coffeePrice = document.createElement("p");
  coffeePrice.innerText = coffee.price;

  const coffeeImage = document.createElement("img");
  coffeeImage.src = coffee.image;


  
  coffeeCard.appendChild(coffeeImage);
  coffeeCard.appendChild(coffeeName);
  coffeeCard.appendChild(coffeePrice);

  return coffeeCard;

}



function createFoodCard(food) {

  const foodCard = document.createElement("div");
  foodCard.classList.add('food-card');


  const foodName = document.createElement("h3");
  foodName.innerText = food.name;

  const foodPrice = document.createElement("p");
  foodPrice.innerText = food.price;

  const foodImage = document.createElement("img");
  foodImage.src = food.image;


  
  foodCard.appendChild(foodImage);
  foodCard.appendChild(foodName);
  foodCard.appendChild(foodPrice);

  return foodCard;

}

function bestSellerMenu() {
  const bestSellerContainer = document.createElement("div");
  bestSellerContainer.classList.add("best-seller-container");

  [espresso,latte,americano].forEach(coffee => {
    const card = createCoffeeCard(coffee);
    bestSellerContainer.appendChild(card);
  })

  return bestSellerContainer;
}

function allMenu() {
  
  const allMenuContainer = document.createElement("div");
  allMenuContainer.classList.add("all-menu-container");

  menu.forEach(item => {
    let card;

    if (item instanceof Coffee) {
      card = createCoffeeCard(item);
    } else if ( item instanceof Food) {
      card = createFoodCard(item);
    }
    allMenuContainer.appendChild(card);
  });

  return allMenuContainer;



}

export { bestSellerMenu , allMenu};