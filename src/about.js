

function about(){

  const divContent = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const aboutTitle = document.createElement("p");
  aboutTitle.innerText = "About";
  aboutTitle.classList.add('about-title');


  const aboutContentContainer = document.createElement("div");
  aboutContentContainer.classList.add("about-content-container");

  const aboutDetail = document.createElement("p");
  
  aboutDetail.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum est eget imperdiet vestibulum. Nunc dignissim, elit interdum efficitur lacinia, diam justo hendrerit mi, sit amet egestas turpis dui a justo. Fusce facilisis risus ante, vitae auctor purus scelerisque ut. Aliquam eget quam non leo porta elementum. Donec in ligula cursus, gravida dui ut, vulputate ex. Nulla pellentesque nibh sed mauris dictum, id feugiat leo auctor. Etiam blandit quam quis fermentum commodo.`

  aboutDetail.classList.add('about-detail');


  const aboutImg = document.createElement("img");
  aboutImg.src = '/src/img/bg-img-coffee.webp'

  aboutContentContainer.appendChild(aboutImg);
  aboutContentContainer.appendChild(aboutDetail);

  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutContentContainer);
 

  divContent.appendChild(aboutContainer);

}




export { about } ;