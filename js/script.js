"use strict";

// IMPORTAZIONE DELL'ARRAY
import { dataProjects } from './dataProjects.js';

// FUNZIONE DI CREAZIONE CARD
function createCard(project) {
    let card = `
        <div class="card card_style scale_card col-12 col-md-4 m-3 text-white border border-primary" style="max-width: 24rem; background-color: #2d3748;" >
            <div class="card-body">
                <img src="${project.thumb}" class="card-img-top mt-3">
                <h5 class="card-title mt-3">${project.title}</h5>
                <a href="${project.github}" target="_blank" class="btn btn-primary m-1">GitHub</a>
                <a href="${project.demo}" target="_blank" class="btn btn-light m-1">Demo</a>
            </div>
        </div>
    `;
    return card;
}

// FUNZIONE DEL BOTTONE

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
    });
    return button;
}


// CONTENITORE DELLE SCHEDE NEL DOM
const cards = document.getElementById("cards");

// CICLO FOR INVERTITO PER I PRIMI 3 PROGETTI
for (let i = dataProjects.length - 1; i >= dataProjects.length - 3; i--){
    let project = dataProjects[i];
    let card = createCard(project);
    cards.innerHTML += card;
}

const buttonContainer = document.getElementById("button-container");

// PULSANTE PER CARICARE LE PROSSIME 6 PROGETTI
let loadMoreButton = createButton("Upload Projects", 0, 2);
buttonContainer.appendChild(loadMoreButton);

// PULSANTE PER CARICARE GLI ULTIMI 6 PROGETTI
//let loadMoreButton2 = createButton("Upload Projects", 0, 2); 
//loadMoreButton2.style.display = "none"; 
//buttonContainer.appendChild(loadMoreButton2);

loadMoreButton.addEventListener("click", function() {
    loadMoreButton2.style.display = "inline-block"; 
});

//STYLE CSS CARDS
document.getElementById("cards").style.display = "flex";
document.getElementById("cards").style.flexDirection = "row";
document.getElementById("cards").style.flexWrap = "wrap";