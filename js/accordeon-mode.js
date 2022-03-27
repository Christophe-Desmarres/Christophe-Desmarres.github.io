const accordeon = {

    init: function () {
        var acc = document.getElementsByClassName("accordion");

        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", accordeon.handleToggleContenu);
        }
    },

    handleToggleContenu: function (e) {
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

}

document.addEventListener('DOMContentLoaded', accordeon.init);
