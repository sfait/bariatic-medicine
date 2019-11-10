function showTooltip() {
    const questionSigns = document.querySelectorAll(".question-sign-wrapper");

    for (let i = 0; i < questionSigns.length; i++) {
        questionSigns[i].addEventListener("mouseover", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.add("show-tooltip");
        })

        questionSigns[i].addEventListener("mouseout", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.remove("show-tooltip");
        })
    }
}

const init = function() {
    showTooltip();
}

document.addEventListener("DOMContentLoaded", init);
