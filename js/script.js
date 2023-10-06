"use strict";

// IMPORTAZIONE DELL'ARRAY
import { dataProjects } from './dataProjects.js';

// FUNZIONE DI CREAZIONE CARD
function createCard(project) {
    let card = `
        <div class="card scale_card col-12 col-md-4 m-4 text-white border border-primary" style="width: 24rem; background-color: #2d3748; max-height: 320px;" >
            <div class="card-body">
                <img src="${project.thumb}" class="card-img-top mt-3">
                <h5 class="card-title mt-3">${project.title}</h5>
                <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
                <a href="${project.demo}" target="_blank" class="btn btn-light">Demo</a>
            </div>
        </div>
    `;
    return card;
}

// CONTENITORE DELLE SCHEDE NEL DOM
const cards = document.getElementById("cards");

// CICLO FOR PER L'ARRAY DEI PRIMI 6 PROGETTI
//for (let i = 0; i < 6; i++){

// CICLO FOR INVERTITO
for (let i = dataProjects.length - 1; i >= 6; i--){

    // VARIABILE PER SALVARE IL SINGOLO PROGETTO INTERNA AL CICLO
    let project = dataProjects[i];
    let card = createCard(project);

    //CONCATENAZIONE HTML DELLA NUOVA CARD
    cards.innerHTML += card;
}

// AGGIUNGI UN PULSANTE PER CARICARE GLI ULTIMI 6 PROGETTI
let loadMoreButton = document.createElement("button");
loadMoreButton.innerHTML = "Upload Projects";
loadMoreButton.classList.add("btn", "btn-success");
loadMoreButton.addEventListener("click", function() {

    // CICLO FOR PER GLI ULTIMI 6 PROGETTI
    for (let i = 5; i >= 0; i--) {

    // VARIABILE PER SALVARE IL SINGOLO PROGETTO INTERNA AL CICLO
    let project = dataProjects[i];
    let card = createCard(project);

    //CONCATENAZIONE HTML DELLA NUOVA CARD
    cards.innerHTML += card;
    }
    // NASCONDI IL PULSANTE DOPO AVER CARICATO GLI ULTIMI 6 PROGETTI
    loadMoreButton.style.display = "none";
});

const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(loadMoreButton);

//STYLE CSS CARDS
document.getElementById("cards").style.display = "flex";
document.getElementById("cards").style.flexDirection = "row";
document.getElementById("cards").style.flexWrap = "wrap";