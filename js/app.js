function changeTitle() {
    const message = "Return to the website";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

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
    changeTitle();
    showTooltip();
}

document.addEventListener("DOMContentLoaded", init);
