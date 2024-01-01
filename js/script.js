// import of the array
import { dataProjects } from './dataProjects.js';

// card creation function
function createCard(project) {
  let card = `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card scale_card">
      <div class="card-body">
        <h5 class="card-title text-white mt-3">${project.title}</h5>
        <img src="${project.thumb}" class="card-img-top mt-1">
        <a href="${project.github}" target="_blank" class="btn btn-primary m-1 mt-3">GitHub</a>
        <a href="${project.demo}" target="_blank" class="btn btn-light m-1 mt-3">Demo</a>
      </div>
    </div>
  </div>
  `;
  return card;
}

// button function
function createButton(text, start, end) {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.classList.add("btn", "btn-success");
  button.addEventListener("click", function() {
    for (let i = end; i >= start; i--) {
      let project = dataProjects[i];
      let card = createCard(project);
      cards.innerHTML += card;
    }
    button.style.display = "none";
    buttonContainer.style.display = "none";
  });
  return button;
}

// container of the cards
const cards = document.getElementById("cards");

// reversed FOR loop for the first 3 projects
for (let i = dataProjects.length - 1; i >= dataProjects.length - 3; i--){
  let project = dataProjects[i];
  let card = createCard(project);
  cards.innerHTML += card;
}

// button to load projects
const buttonContainer = document.getElementById("button-container");
let loadMoreButton = createButton("Upload Projects", 0, 4);
buttonContainer.appendChild(loadMoreButton);
