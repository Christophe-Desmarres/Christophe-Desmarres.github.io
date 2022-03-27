/* 
faire une transition au chgt de page genre de gauche vers la droite 
*/


liste de fonctions avant la mise en méthode



//-------------------------------------------------
// fonction pour le theme sombre
//-------------------------------------------------

function colorMode() {

    let inter = document.getElementsByClassName('inter');
    let portrait = document.getElementsByClassName('portrait');
    let container = document.getElementsByClassName('container');
    let retour = document.querySelector('#retour');
    let titleH1 = document.querySelector('h1');
    let h2 = document.querySelectorAll('h2');
    let lien = document.querySelectorAll('a');
    let timeTag = document.querySelectorAll('time');
    let accordeonPanel = document.querySelectorAll('.panel');

    if (mode == "jour") { //on applique le theme sombre
        mode = "nuit";
        console.log("thème sombre activé");
        new Audio('https://assets.codepen.io/165585/switch.mp3').play();
        document.body.style.backgroundColor = 'rgba(9, 9, 17, 0.959)';
        document.body.style.color = "white";
        titleH1.style.textShadow = "2px 2px 2px rgb(255, 217, 0)";
        //chgt d'icone avec la lune
        document.getElementsByClassName("inter")[0].src = '../image/icones/icone-moon.png';
        //chgt style background-color et box-shadow
        inter[0].style.backgroundColor = "rgba(9, 9, 17, 0.959)";
        inter[0].style.boxShadow = "inset 0px 4px 10px white";
        container[0].style.boxShadow = "4px 4px 10px rgb(255, 217, 0)";
        h2.forEach(element => {
            element.style.color = "black";
            element.style.backgroundColor = "aquamarine";
            element.style.borderBottom = "black";
            element.style.borderLeft = "black";
            element.style.boxShadow = "2px 2px 4px rgb(255, 217, 0)";
        });

        //pour tous les liens, on inverse les couleurs
        lien.forEach(element => {
            //  element.style.color = "white";
            element.style.filter = "invert(100%)";
        });

        if (document.title == 'CV Christophe Desmarres') {
            portrait[0].style.boxShadow = "2px 2px 5px rgb(255, 217, 0)";
            timeTag.forEach(element => {
                element.style.borderBottom = "1px solid white";
            });
            //accordeonPanel.style.color = 'rgba(9, 9, 17, 0.959)';
            //accordeonPanel[1].style.color = 'rgba(9, 9, 17, 0.959)';

            accordeonPanel.forEach(element => {
                element.style.backgroundColor = 'rgba(9, 9, 17, 0.959)';
            });


        }

        // else if (document.title == 'galerie') {
        //     console.log("mode nuit pour retour galerie");
        //     //retour.style.color = "white";
        // }



    } else { //on applique le theme clair
        mode = "jour";
        console.log("thème clair activé");
        new Audio('https://assets.codepen.io/165585/switch.mp3').play();
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        titleH1.style.textShadow = "none";
        document.getElementsByClassName("inter")[0].src = '../image/icones/icone-soleil.png';
        inter[0].style.backgroundColor = "white";
        inter[0].style.boxShadow = "inset 0px 4px 10px black";
        container[0].style.boxShadow = "4px 4px 7px black";

        h2.forEach(element => {

            element.style.color = "var(--h2-color)";
            element.style.backgroundColor = "var(--h2-bg-color)";
            element.style.borderBottom = "2px solid var(--h2-border-color)";
            element.style.borderLeft = "2px solid var(--h2-border-color)";
            element.style.boxShadow = "1px -1px 1px var(--shadow)";
        });
        lien.forEach(element => {
            // element.style.color = "black";
            element.style.filter = "invert(0%)";

        });


        if (document.title == 'CV Christophe Desmarres') {
            portrait[0].style.boxShadow = "2px 2px 5px black";
            timeTag.forEach(element => {
                element.style.borderBottom = "1px solid black";
            });
            accordeonPanel.forEach(element => {
                element.style.backgroundColor = 'white';
            });

        }
        // else if (document.title == 'galerie') {
        //     //retour.style.color = "black";
        // }

    }
    return mode;
}


//-------------------------------------------------
// fonction pour le repositionnement des sections suivant la taille d'écran
//-------------------------------------------------

// déclaration variables
let largeur = window.innerWidth;
let container = document.querySelector('.container');
// pour zone gauche
let leftZone = document.createElement("div");
leftZone.classList.add("left");
let competences = document.querySelector("#competences");
let interets = document.querySelector('#interets');
// pour zone droite
let rightZone = document.createElement("div");
rightZone.classList.add("right");
let formations = document.querySelector("#formations");
let experiences = document.querySelector('#experiences');

//appel de la fonction resizeWindow lors de l'evenement resize
window.addEventListener('resize', resizeWindow);

//fonction qui repositionne les sections suivant la taille d'écran
function resizeWindow() {
    let newWidth = window.innerWidth;
    //console.log("window resizing...." + newWidth);
    //condition uniquement valable dans la pag index.html => titre = CV Christophe Desmarres
    if (document.title == 'CV Christophe Desmarres') {
        if (newWidth > 1200) {
            // gauche
            container.append(leftZone);
            leftZone.prepend(competences);
            leftZone.append(interets);

            // droite
            container.append(rightZone);
            rightZone.prepend(experiences);
            rightZone.prepend(formations);

        } else {
            //toutes les sections à la suite
            container.append(formations);
            container.append(competences);
            container.append(experiences);
            container.append(interets);
        }
    }
}

//appel de la fonction 1 fois pour le 1er chargement de la page
resizeWindow()

//-------------------------------------------------
// fonction pour le menu accordéon de la page index
//-------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

