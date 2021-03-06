//-------------------------------------------------
// fonction pour le theme sombre
//-------------------------------------------------

const theme = {


    init: function () {
        let btnMode = document.querySelector(".interupteur");
        btnMode.addEventListener('click', theme.handleCHoixTheme);
        if (localStorage.mode == "jour") { //on applique le theme demandé en cours
            theme.handleThemeClair();
        } else {
            theme.handleThemeSombre();
        }
    },

    handleCHoixTheme: function () {
        if (localStorage.mode == "jour") { //on applique le theme sombre
            theme.handleThemeSombre();
        } else {
            theme.handleThemeClair();
        }

    },

    handleThemeClair: function () {

        let inter = document.getElementsByClassName('inter');
        let portrait = document.getElementsByClassName('portrait');
        let container = document.getElementsByClassName('container');
        let titleH1 = document.querySelector('h1');
        let h2 = document.querySelectorAll('h2');
        let lien = document.querySelectorAll('a');
        let timeTag = document.querySelectorAll('time');
        let accordeonPanel = document.querySelectorAll('.panel');
        let barre100 = document.querySelector('#time');
        let barre = document.querySelector('#trainingtime');
        let iconeCompetence = document.querySelector('#logoDev');
        let barreProgressPage = document.querySelector('#progress');

        localStorage.mode = "jour";
        console.log("thème clair activé");
        let son = new Audio('https://assets.codepen.io/165585/switch.mp3');
        son.volume = 0.2;
        son.play();
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
        //couleur barre de progression
        barre100.style.backgroundColor = "white";
        barre100.style.boxShadow = "4px 4px 7px black";
        barre.style.backgroundColor = "var(--h1-color)";
        lien.forEach(element => {
            // element.style.color = "black";
            element.style.filter = "invert(0%)";
        });
        iconeCompetence.style.filter = 'invert(100%)';
        barreProgressPage.style.backgroundColor = 'black';


        if (document.title == 'CV Christophe Desmarres') {
            portrait[0].style.boxShadow = "2px 2px 5px black";
            timeTag.forEach(element => {
                element.style.borderBottom = "1px solid black";
            });
            accordeonPanel.forEach(element => {
                element.style.backgroundColor = 'white';
            });

        }

    },

    handleThemeSombre: function () {

        let inter = document.getElementsByClassName('inter');
        let portrait = document.getElementsByClassName('portrait');
        let container = document.getElementsByClassName('container');
        let titleH1 = document.querySelector('h1');
        let h2 = document.querySelectorAll('h2');
        let lien = document.querySelectorAll('a');
        let timeTag = document.querySelectorAll('time');
        let accordeonPanel = document.querySelectorAll('.panel');
        let barre100 = document.querySelector('#time');
        let barre = document.querySelector('#trainingtime');
        let iconeCompetence = document.querySelector('#logoDev');
        let barreProgressPage = document.querySelector('#progress');

        localStorage.mode = "nuit";
        console.log("thème sombre activé");
        let son = new Audio('https://assets.codepen.io/165585/switch.mp3');
        son.volume = 0.5;
        son.play();        
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
        //couleur barre de progression
        barre100.style.backgroundColor = "black";
        barre100.style.boxShadow = "2px 2px 4px rgb(255, 217, 0)";
        barre.style.backgroundColor = "aquamarine";
        //pour tous les liens, on inverse les couleurs
        lien.forEach(element => {
            //  element.style.color = "white";
            element.style.filter = "invert(100%)";
        });
        iconeCompetence.style.filter = 'invert(0%)';
        barreProgressPage.style.backgroundColor = 'white';

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



    }

}

document.addEventListener('DOMContentLoaded', theme.init)
