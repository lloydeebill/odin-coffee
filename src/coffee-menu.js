

class Coffee {

  constructor(name,price,image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

}

const espresso = new Coffee('Espresso', 'P100', '/src/img/espresso.webp');
const latte = new Coffee('Latte', 'P140', '/src/img/latte.webp');
const americano = new Coffee('Americano','P120' ,'/src/img/americano.webp');


function createCoffeeCard(coffee) {

  const coffeeCard = document.createElement("div");
  coffeeCard.classList.add('coffee-card');


  const coffeeName = document.createElement("h3");
  coffeeName.innerText = coffee.name;

  const coffeePrice = document.createElement("p");
  coffeePrice.innerText = coffee.price;

  const coffeeImage = document.createElement("img");
  coffeeImage.src = coffee.image;


  coffeeCard.appendChild(coffeeName);
  coffeeCard.appendChild(coffeePrice);
  coffeeCard.appendChild(coffeeImage);

  return coffeeCard;

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

export { bestSellerMenu };