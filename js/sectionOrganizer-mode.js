const orginize = {





    init: function () {
        // pour zone gauche
        let leftZone = document.createElement("div");
        leftZone.classList.add("left");
        // pour zone droite
        let rightZone = document.createElement("div");
        rightZone.classList.add("right");
        window.addEventListener('resize', resizeWindow);

    },

    //fonction qui repositionne les sections suivant la taille d'écran
    resizeWindow: function () {
        let newWidth = window.innerWidth;

        let container = document.querySelector('.container');
        let competences = document.querySelector("#competences");
        let interets = document.querySelector('#interets');
        let formations = document.querySelector("#formations");
        let experiences = document.querySelector('#experiences');

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

}

document.addEventListener('DOMContentLoaded', orginize.init);




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