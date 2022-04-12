//pour afficher un barre d'avancement de la page en haut de la fenetre
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre + "px"
    })


    // pour affichage avancementFormation
    //calcule de l'avancement en fonction du temps passé
    let dateBegin = new Date("2022-02-21"); // début de la formation
    let dateToday = new Date();
    let progress = dateToday.getTime() - dateBegin.getTime();
    let Diff_jours = progress / (1000 * 3600 * 24); //transforme le résultat en nb de jour
    let progression = Math.round(Diff_jours / 169 * 100); // renvoie la valeur arrondi en % sur 169 jours de formation

    //selection et modification pour affichage html
    let barre = document.querySelector('#trainingtime');
    let barreText = document.querySelector('#trainingtime>p');
    if (progression <= 100) {
        barre.style.width = progression + "%";
        barreText.innerHTML = "Progression : " + progression + "%";
    } else {
        barre.style.width = "100%";
        barreText.innerHTML = "Formation terminée à 100%";
    }


}