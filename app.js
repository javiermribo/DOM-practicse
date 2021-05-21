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

const selectingNav = document.querySelector("#nav-items");
const creatingUlNav = document.createElement("ul");
selectingNav.appendChild(creatingUlNav);
creatingUlNav.setAttribute("id", "ul-list-items");

const selectingUl = document.querySelector("#ul-list-items");
const creatingLiItems = document.createElement("li");
const creatingLiItems2 = document.createElement("li");
const creatingLiItems3 = document.createElement("li");
creatingLiItems.textContent = "Soy un <li>";
creatingLiItems2.textContent = "Soy un segundo <li>";
creatingLiItems3.textContent = "Soy un tercer <li>";
selectingUl.append(creatingLiItems, creatingLiItems2, creatingLiItems3);
