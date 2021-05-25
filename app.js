/* const pcontainer = document.querySelector("#pcontainer");
const newSubtitle = document.createElement("h2");
newSubtitle.textContent = "Soy un h2 saludando desde el DOM";
pcontainer.appendChild(newSubtitle);

const newButton = document.createElement("button");
const referenceGroup = document.querySelector("#pcontainer #p2");
const pcontainer2 = document.querySelector("#pcontainer");
newButton.textContent = "Soy un boton creado desde el DOM";
pcontainer2.insertBefore(newButton, referenceGroup); */

const root = document.querySelector("#root");
const creatingHeader = document.createElement("header");
root.appendChild(creatingHeader);
creatingHeader.setAttribute("id", "header-content");

const selectingHeader = document.querySelector("#header-content");
const creatingNav = document.createElement("nav");
selectingHeader.appendChild(creatingNav);
creatingNav.setAttribute("id", "nav-items");
creatingNav.setAttribute(
  "class",
  "navbar navbar-expand-lg navbar-light bg-light justify-content-around shadow-sm"
);


const selectingNav = document.querySelector("#nav-items");
const creatingUlNav = document.createElement("ul");
selectingNav.appendChild(creatingUlNav);
creatingUlNav.setAttribute("id", "ul-list-items");
creatingUlNav.setAttribute("class", "nav bg-light p-2 justify-content-around");

const selectingUl = document.querySelector("#ul-list-items");
const creatingLiItems = document.createElement("li");
const creatingLiItems2 = document.createElement("li");
const creatingLiItems3 = document.createElement("li");
selectingUl.append(creatingLiItems, creatingLiItems2, creatingLiItems3);
creatingLiItems.setAttribute("class", "nav-item px-3 text-primary");
creatingLiItems.setAttribute("id", "li-1");
creatingLiItems2.setAttribute("class", "nav-item px-3 text-primary");
creatingLiItems2.setAttribute("id", "li-2");
creatingLiItems3.setAttribute("class", "nav-item px-3 text-primary");
creatingLiItems3.setAttribute("id", "li-3");
const selectingLi1 = document.querySelector("#li-1");
const selectingLi2 = document.querySelector("#li-2");
const selectingLi3 = document.querySelector("#li-3");
const creatingItemA = document.createElement('a');
const creatingItemA2 = document.createElement("a");
const creatingItemA3 = document.createElement("a");
creatingItemA.textContent = "Soy un <li>";
creatingItemA2.textContent = "Soy un segundo <li>";
creatingItemA3.textContent = "Soy un tercer <li>";
selectingLi1.append(creatingItemA);
selectingLi2.append(creatingItemA2);
selectingLi3.append(creatingItemA3);
creatingLiItems2.setAttribute("class", "nav-item");
creatingLiItems3.setAttribute("class", "nav-item");
creatingItemA.setAttribute("class", "href=#");
creatingItemA2.setAttribute("class", "href=# px-3 text-dark");
creatingItemA3.setAttribute("class", "href=# px-3 text-muted");

const root2 = document.querySelector("#root");
const creatingDiv = document.createElement("div");
root2.append(creatingDiv);
creatingDiv.setAttribute("id", "div-id-tag");
creatingDiv.setAttribute("class", "div-class-tag");

const selectingHeroDiv = document.querySelector("#div-id-tag");
const creatingImgTag = document.createElement("img");
selectingHeroDiv.appendChild(creatingImgTag);
creatingImgTag.setAttribute("src", "./Assets/michi-hero-img.jpg");
creatingImgTag.setAttribute("width", "100%");

