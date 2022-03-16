

       let mode = "jour";

       function colorMode(title) {
        let inter = document.getElementsByClassName('inter');
        let portrait = document.getElementsByClassName('portrait');
        let container = document.getElementsByClassName('container');
        let retour = document.getElementsByClassName('retour');
        let h2 = document.querySelectorAll('h2');
        let lien = document.querySelectorAll('a');

        if (mode == "jour") {
               mode = "nuit";
               console.log("mode nuit");
               console.log("underline");
               new Audio('https://assets.codepen.io/165585/switch.mp3').play();
               document.body.style.backgroundColor = 'rgba(9, 9, 17, 0.959)';
               document.body.style.color = "white";
               document.getElementsByClassName("inter")[0].src = '../image/icones/icone-moon.png';
               inter[0].style.backgroundColor = "rgba(9, 9, 17, 0.959)";
               container[0].style.boxShadow = "4px 4px 7px rgb(255, 217, 0)";
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

            } else if (document.title == 'galerie') {
                retour[0].style.backgroundColor = "white";

            }

            
        
        } else {
                mode = "jour";
                console.log("mode jours");
                new Audio('https://assets.codepen.io/165585/switch.mp3').play();
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementsByClassName("inter")[0].src = '../image/icones/icone-soleil.png';
                inter[0].style.backgroundColor = "white";
                container[0].style.boxShadow = "4px 4px 7px black";
                
                h2.forEach(element => {

                    element.style.color = "aquamarine";
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

                } else if (document.title == 'galerie') {
                retour[0].style.color = "black";

            }

            }
        }
        
        // mode nuit

        // document.querySelectorAll("a").style.color = "white";
        // document.links.style.color = "white";
        // document.querySelectorAll(".underline::before").style.backgroundColor= "white";
        //    document.getElementsByClassName("portrait").style.boxShadow = "white";
        // document.getElementsByClassName("lien_reseau a").style.borderBottom = "white";
        //    document.getElementsByTagName("h2").style.color = "black";
        //    document.getElementsByTagName("h2").style.backgroundColor = "aquamarine";
        //    document.getElementsByTagName("h2").style.borderBottom = "black";
        //    document.getElementsByTagName("h2").style.borderLeft = "black";
        //    document.getElementsByTagName("h2").style.boxShadow = "aquamarine";
        //    document.getElementsByClassName("time").style.borderBottom = "white";
        //    document.querySelectorAll('#text').style.color = "white";

        // couleursdoc.style.txtColor = "white";
        // couleursdoc.style.h2Color = "aquamarine";
        // couleursdoc.style.h2BgColor = "black";
        // couleursdoc.style.n2BorderColor = "aquamarine";
        // couleursdoc.style.shadow = "black";
        // couleursdoc.style.borderUnderline = "black";
        

        // mode jour
                       // document.querySelectorAll("a").style.color = "black";
                       // document.links.style.color = "black";
                       // document.querySelectorAll(".underline::before").style.backgroundColor = "black";
                    //    document.getElementsByClassName("portrait").style.boxShadow = "black";
                       // document.getElementsByClassName("lien_reseau a").style.borderBottom = "black";
                    //    document.getElementsByTagName("h2").style.color = "aquamarine";
                    //    document.getElementsByTagName("h2").style.backgroundColor = "black";
                    //    document.getElementsByTagName("h2").style.borderBottom = "aquamarine";
                    //    document.getElementsByTagName("h2").style.borderLeft = "aquamarine";
                    //    document.getElementsByTagName("h2").style.boxShadow = "black";
                    //    document.getElementsByClassName("time").style.borderBottom = "black";
                    //    document.querySelectorAll('#text').style.color = "black";
        
                       // couleursdoc.style.txtColor = "black";
                       // couleursdoc.style.h2Color = "aquamarine";
                       // couleursdoc.style.h2BgColor = "black";
                       // couleursdoc.style.n2BorderColor = "aquamarine";
                       // couleursdoc.style.shadow = "black";
                       // couleursdoc.style.borderUnderline = "black";








//-----------------------------------------------



// document.getElementById("interupteur").addEventListener("click", function () {
//     if (mode == "jour") {
//         mode = "nuit";

//     } else {
//         mode = "jour";
     
//     }

// });