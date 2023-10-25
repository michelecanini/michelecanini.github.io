"use strict";

// IMPORTAZIONE DELL'ARRAY
import { dataProjects } from './dataProjects.js';

// FUNZIONE DI CREAZIONE CARD
function createCard(project) {
    let card = `
        <div class="card card_style scale_card col-12 col-sm-4 m-3 text-white border border-primary" style="max-width: 24rem; background-color: #2d3748;" >
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

// CICLO FOR INVERTITO
for (let i = dataProjects.length - 1; i >= 12; i--){
    let project = dataProjects[i];
    let card = createCard(project);
    cards.innerHTML += card;
}

const buttonContainer = document.getElementById("button-container");

// PULSANTE PER CARICARE LE PROSSIME 6 PROGETTI
let loadMoreButton = createButton("Upload Projects", 6, 11);
buttonContainer.appendChild(loadMoreButton);

// PULSANTE PER CARICARE GLI ULTIMI 6 PROGETTI
let loadMoreButton2 = createButton("Upload Projects", 0, 5); // Cambiato il testo del pulsante qui
loadMoreButton2.style.display = "none"; // Nascondi il secondo pulsante all'inizio
buttonContainer.appendChild(loadMoreButton2);

loadMoreButton.addEventListener("click", function() {
    loadMoreButton2.style.display = "inline-block"; // Mostra il secondo pulsante dopo che il primo pulsante è stato cliccato
});

//STYLE CSS CARDS
document.getElementById("cards").style.display = "flex";
document.getElementById("cards").style.flexDirection = "row";
document.getElementById("cards").style.flexWrap = "wrap";


