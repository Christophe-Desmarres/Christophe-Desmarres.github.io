let mode = 'jour';



     function colorMode() {
           
        let inter = document.getElementsByClassName('inter');
        let portrait = document.getElementsByClassName('portrait');
        let container = document.getElementsByClassName('container');
        let retour = document.getElementsByClassName('retour');
        let h2 = document.querySelectorAll('h2');
        let lien = document.querySelectorAll('a');
        let timeTag = document.querySelectorAll('time');

        if (mode == "jour") {
               mode = "nuit";
               console.log("thème sombre activé");
               new Audio('https://assets.codepen.io/165585/switch.mp3').play();
               document.body.style.backgroundColor = 'rgba(9, 9, 17, 0.959)';
               document.body.style.color = "white";
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
                lien.forEach(element => {
                    //  element.style.color = "white";
                     element.style.filter = "invert(100%)";
                });


            
            if (document.title == 'CV Christophe Desmarres') {
               portrait[0].style.boxShadow = "2px 2px 5px rgb(255, 217, 0)";
               timeTag.forEach(element => {
                   element.style.borderBottom =  "1px solid white";
               });

            } else if (document.title == 'galerie') {
                retour[0].style.backgroundColor = "white";
               
            }

            
        
        } else {
                mode = "jour";
                console.log("thème clair activé");
                new Audio('https://assets.codepen.io/165585/switch.mp3').play();
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementsByClassName("inter")[0].src = '../image/icones/icone-soleil.png';
                inter[0].style.backgroundColor = "white";
                inter[0].style.boxShadow = "inset 0px 4px 10px black";
                container[0].style.boxShadow = "4px 4px 7px black";
                
                h2.forEach(element => {

                    element.style.color = "white";
                    element.style.backgroundColor = "black";
                    element.style.borderBottom = "aquamarine";
                    element.style.borderLeft = "aquamarine";
                    element.style.boxShadow = "2px 2px 4px black";
                });
                lien.forEach(element => {
                    // element.style.color = "black";
                    element.style.filter = "invert(0%)";

                });

                
                if (document.title == 'CV Christophe Desmarres') {
                portrait[0].style.boxShadow = "2px 2px 5px black";
                timeTag.forEach(element => {
                    element.style.borderBottom =  "1px solid black";
                });

                } else if (document.title == 'galerie') {
                retour[0].style.color = "black";

            }

            }
            return mode;
        }
        

//-----------------------------------------------



// document.getElementById("interupteur").addEventListener("click", function () {
//     if (mode == "jour") {
//         mode = "nuit";

//     } else {
//         mode = "jour";
     
//     }

// });