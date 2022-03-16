

       var mode = "jour";

       function colorMode() {
           if (mode == "jour") {
               mode = "nuit";
               document.body.style.backgroundColor = 'rgba(9, 9, 17, 0.959)';
               document.body.style.color = "white";
               document.getElementsByTagName("img")[0].src = '../image/icones/icone-moon.png';
               // document.getElementsByClassName("container").style = "box-shadow : 4px 4px 7px white";
               // document.querySelectorAll("a").style.color = "white";
               // document.links.style.color = "white";
               // document.querySelectorAll(".underline::before").style.backgroundColor= "white";
            //    document.getElementsByClassName("portrait").style.boxShadow = "white";
               // document.getElementsByClassName("lien_reseau a").style.borderBottom = "white";
               document.getElementsByTagName("h2").style.color = "black";
               document.getElementsByTagName("h2").style.backgroundColor = "aquamarine";
               document.getElementsByTagName("h2").style.borderBottom = "black";
               document.getElementsByTagName("h2").style.borderLeft = "black";
               document.getElementsByTagName("h2").style.boxShadow = "aquamarine";
               document.getElementsByClassName("time").style.borderBottom = "white";
               document.querySelectorAll('#text').style.color = "white";

               // couleursdoc.style.txtColor = "white";
               // couleursdoc.style.h2Color = "aquamarine";
               // couleursdoc.style.h2BgColor = "black";
               // couleursdoc.style.n2BorderColor = "aquamarine";
               // couleursdoc.style.shadow = "black";
               // couleursdoc.style.borderUnderline = "black";

               document.getElementsByTagName("img")[1].src = '../image/icones/icone-moon.png';
               // document.getElementsByClassName("container").style.boxShadow = "4px 4px 7px white";
               document.getElementsByTagName("a").style.color = "white";
           } else {
               mode = "jour";
               document.body.style.backgroundColor = "white";
               document.body.style.color = "black";
               document.getElementsByTagName("img")[0].src = '../image/icones/icone-soleil.png';
               // document.getElementsByClassName("container").style = "box-shadow : 4px 4px 7px black";
               // document.querySelectorAll("a").style.color = "black";
               // document.links.style.color = "black";
               // document.querySelectorAll(".underline::before").style.backgroundColor = "black";
            //    document.getElementsByClassName("portrait").style.boxShadow = "black";
               // document.getElementsByClassName("lien_reseau a").style.borderBottom = "black";
               document.getElementsByTagName("h2").style.color = "aquamarine";
               document.getElementsByTagName("h2").style.backgroundColor = "black";
               document.getElementsByTagName("h2").style.borderBottom = "aquamarine";
               document.getElementsByTagName("h2").style.borderLeft = "aquamarine";
               document.getElementsByTagName("h2").style.boxShadow = "black";
               document.getElementsByClassName("time").style.borderBottom = "black";
               document.querySelectorAll('#text').style.color = "black";

               // couleursdoc.style.txtColor = "black";
               // couleursdoc.style.h2Color = "aquamarine";
               // couleursdoc.style.h2BgColor = "black";
               // couleursdoc.style.n2BorderColor = "aquamarine";
               // couleursdoc.style.shadow = "black";
               // couleursdoc.style.borderUnderline = "black";

               document.getElementsByTagName("img")[1].src = '../image/icones/icone-soleil.png';
               // document.getElementsByClassName("container").style.boxShadow = "4px 4px 7px black";
               document.getElementsByTagName("a").style.color = "black";
           }
       }









//-----------------------------------------------



// document.getElementById("interupteur").addEventListener("click", function () {
//     if (mode == "jour") {
//         mode = "nuit";

//     } else {
//         mode = "jour";
     
//     }

// });