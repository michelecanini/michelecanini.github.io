"use strict";

// ARRAY DEI PROGETTI
let dataProjects = [
    {
        title: "Scooter Lim",
        thumb: "https://github.com/michelecanini/scooterlimproject/raw/main/img/CodingChallenge.png",
        github: "https://github.com/michelecanini/scooterlimproject",
        demo: "https://michelecanini.github.io/scooterlimproject/"
    },
    {
        title: "Airbnb Blocks",
        thumb: "https://github.com/michelecanini/airbnb-blocks/raw/main/img/airbnb-blocks.png",
        github: "https://github.com/michelecanini/airbnb-blocks",
        demo: "https://michelecanini.github.io/airbnb-blocks/"
    },
    {
        title: "Wayne Barnett",
        thumb: "https://github.com/michelecanini/scooterlimproject/raw/main/img/CodingChallenge.png",
        github: "Founder & CEO",
        demo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        title: "Test",
        thumb: "https://github.com/michelecanini/scooterlimproject/raw/main/img/CodingChallenge.png",
        github: "Founder & CEO",
        demo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        title: "Test",
        thumb: "https://github.com/michelecanini/scooterlimproject/raw/main/img/CodingChallenge.png",
        github: "Founder & CEO",
        demo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        title: "Test",
        thumb: "https://github.com/michelecanini/scooterlimproject/raw/main/img/CodingChallenge.png",
        github: "Founder & CEO",
        demo: "wayne-barnett-founder-ceo.jpg"
    },
   
]

// CONTENITORE DELLE SCHEDE NEL DOM
const cards = document.getElementById("cards");

// CICLO FOR PER L'ARRAY MEMBRI DEL TEAM
for (let i = 0; i < dataProjects.length; i++){

    //VARIABILE PER SALVARE IL SINGOLO PROGETTO INTERNA AL CICLO
    let project = dataProjects[i];

    // SINGOLA CARD DEL DOM CON LE INFORMAZIONI DEL SINGOLO PROGETTO
    let card = 
    
    `
    <div class="card col-12 col-md-4 m-3 text-white border border-primary" style="width: 25rem; background-color: #2d3748; max-height: 320px;" >
        <div class="card-body">
        <img src="${project.thumb}" class="card-img-top mt-3">
            <h5 class="card-title">${project.title}</h5>
            <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
            <a href="${project.demo}" target="_blank" class="btn btn-light">Demo</a>
        </div>
    </div>
    `

    //CONCATENAZIONE HTML DELLA NUOVA CARD
    cards.innerHTML += card;
}

//STYLE CSS CARDS
document.getElementById("cards").style.display = "flex";
document.getElementById("cards").style.flexDirection = "row";
document.getElementById("cards").style.flexWrap = "wrap";