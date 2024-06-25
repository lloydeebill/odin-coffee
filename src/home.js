
function home(){

  const divContent = document.querySelector("#content");
  const homeContainer = document.createElement('div');
  const restoHeadline = document.createElement('p');

  restoHeadline.innerText = "Experience Bliss in Every Sip at Bill's Cafe";
  
  homeContainer.appendChild(restoHeadline);
  divContent.appendChild(homeContainer);

}

export {home};